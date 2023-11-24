import { PartialType } from '@nestjs/swagger';
import { CreateEventRatingDto } from './create-event-rating.dto';

export class UpdateEventRatingDto extends PartialType(CreateEventRatingDto) {}
