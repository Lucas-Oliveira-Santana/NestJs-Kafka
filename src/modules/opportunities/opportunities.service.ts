import { Injectable } from '@nestjs/common';
import { CreateOpportunityDto, itemsDto } from './dtos/create-opportunity.dto';
import { OpportunitiesRepository } from 'src/repositories/opportunitiesRepository';

@Injectable()
export class OpportunitiesService {
  constructor(private opportunitiesRepository: OpportunitiesRepository) {}

  async createOpportunityService(data: CreateOpportunityDto) {
    const opportunity = await this.opportunitiesRepository.createOpportunity(
      data,
    );

    await this.createItems(data.items, opportunity.id);

    return opportunity;
  }

  async findAllOpportunitiesService(id: number) {
    const opportunities =
      await this.opportunitiesRepository.getOpportunitiesByClient(id);

    return opportunities;
  }

  private async createItems(items: itemsDto[], opportunityId: string) {
    const itemsCreated = await this.opportunitiesRepository.createItem(
      items,
      opportunityId,
    );

    return itemsCreated;
  }
}
