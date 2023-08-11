import { Client, Items, Opportunities } from '@prisma/client';
import {
  CreateOpportunityDto,
  itemsDto,
} from 'src/modules/opportunities/dtos/create-opportunity.dto';

export abstract class OpportunitiesRepository {
  abstract createOpportunity(data: CreateOpportunityDto);

  abstract findOrCreateClient(id: number): Promise<Client>;

  abstract createItem(
    items: itemsDto[],
    opportunityId: string,
  ): Promise<Items[]>;

  abstract getOpportunitiesByClient(id: number);
}
