import { PartialType } from '@nestjs/swagger';
import { CreateRestaurantEventDto } from './create-restaurant-event.dto';

export class UpdateRestaurantEventDto extends PartialType(CreateRestaurantEventDto) {}
