import {
  CreateOpportunityDto,
  itemsDto,
} from 'src/modules/opportunities/dtos/create-opportunity.dto';

export abstract class OpportunitiesRepository {
  abstract createOpportunity(data: CreateOpportunityDto);

  abstract findOrCreateClient(id: number);

  abstract createItem(items: itemsDto[], opportunityId: string);

  abstract getOpportunitiesByClient(id: number);
}
