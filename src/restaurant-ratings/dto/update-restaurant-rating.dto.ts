import { PartialType } from '@nestjs/swagger';
import { CreateRestaurantRatingDto } from './create-restaurant-rating.dto';

export class UpdateRestaurantRatingDto extends PartialType(CreateRestaurantRatingDto) {}
