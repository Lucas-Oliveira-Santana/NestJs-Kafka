import { IsNotEmpty } from 'class-validator';

export class CreateOpportunityDto {
  client_id?: number;

  customer_id: number;
  customer_email: string;
  customer_firstname: string;
  customer_lastname: string;
  customer_phone: string;

  items: itemsDto[];
}

export class itemsDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  quantity: number;
}
