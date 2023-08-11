import {
  CreateOpportunityDto,
  itemsDto,
} from 'src/modules/opportunities/dtos/create-opportunity.dto';
import { OpportunitiesRepository } from '../opportunitiesRepository';
import { Opportunities } from '@prisma/client';
import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaOpportunitiesRepository implements OpportunitiesRepository {
  constructor(private prismaService: PrismaService) {}

  async createOpportunity(data: CreateOpportunityDto) {
    try {
      const client = await this.findOrCreateClient(data.client_id);

      const opportunity = await this.prismaService.opportunities.create({
        data: {
          customer_firstname: data.customer_firstname,
          customer_lastname: data.customer_lastname,
          customer_phone: data.customer_phone,
          customer_id: data.customer_id,
          client_id: client.id,
          customer_email: data.customer_email,
        },
      });

      return opportunity;
    } catch (error) {
      // Handle the error, maybe log it, and throw a custom error if needed
      throw new HttpException('Failed to create opportunity' + error, 500);
    }
  }

  async findOrCreateClient(id: number) {
    const client = await this.prismaService.client.findFirst({
      where: {
        tenant_id: id,
      },
    });

    if (!client) {
      return await this.prismaService.client.create({
        data: {
          tenant_id: id,
        },
      });
    }

    return client;
  }

  async createItem(
    items: itemsDto[],
    opportunityId: string,
  ): Promise<
    {
      id: string;
      item_id: number;
      item_name: string;
      item_quantity: number;
      opportunitiesId: string;
    }[]
  > {
    const itemsCreatedPromises = items.map(async (item) => {
      const createdItem = await this.prismaService.items.create({
        data: {
          item_id: item.id,
          item_name: item.name,
          item_quantity: item.quantity,
          opportunitiesId: opportunityId,
        },
      });
      return createdItem;
    });

    const itemsCreated = await Promise.all(itemsCreatedPromises);
    return itemsCreated;
  }

  async getOpportunitiesByClient(id: number) {
    const client = await this.prismaService.client.findFirst({
      where: {
        tenant_id: id,
      },
      include: {
        Opportunities: {
          include: {
            Items: true,
          },
        },
      },
    });

    if (!client) {
      throw new HttpException('Client not found', 404);
    }

    return client;
  }
}
