import { itemsDto } from './create-opportunity.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';

class CustomerDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  phone: string;
}

export class CartAbandonedDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  items: itemsDto[];

  @IsNotEmpty()
  customer: CustomerDto;
}
