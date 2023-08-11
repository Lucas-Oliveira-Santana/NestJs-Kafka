import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { OpportunitiesService } from './opportunities.service';
import { lastValueFrom } from 'rxjs';
import { CartAbandonedDto } from './dtos/cart-abandoned.dto';

@Controller()
export class OpportunitiesController {
  constructor(
    private readonly opportunitiesService: OpportunitiesService,
    @Inject('Opportunities_SERVICE')
    private kafkaClient: ClientKafka,
  ) {}

  @MessagePattern('cart-abandoned')
  async createOpportunityController(@Payload() message) {
    await this.opportunitiesService.createOpportunityService({
      client_id: message.value.id,
      items: message.value.items,
      customer_id: message.value.customer.id,
      customer_email: message.value.customer.email,
      customer_firstname: message.value.customer.firstName,
      customer_lastname: message.value.customer.lastName,
      customer_phone: message.value.customer.phone,
    });
  }

  @Get('opportunities')
  async findAllOpportunitiesController(@Body() body) {
    const { id } = body;

    return await this.opportunitiesService.findAllOpportunitiesService(id);
  }

  @Post('cart-abandoned')
  async createCartAbandonedController(@Body() body: CartAbandonedDto) {
    await lastValueFrom(this.kafkaClient.emit('cart-abandoned', body));
    return;
  }
}
