import { Injectable } from '@nestjs/common';
import { CreateEventRatingDto } from './dto/create-event-rating.dto';
import { UpdateEventRatingDto } from './dto/update-event-rating.dto';

@Injectable()
export class EventRatingsService {
  create(createEventRatingDto: CreateEventRatingDto) {
    return 'This action adds a new eventRating';
  }

  findAll() {
    return `This action returns all eventRatings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventRating`;
  }

  update(id: number, updateEventRatingDto: UpdateEventRatingDto) {
    return `This action updates a #${id} eventRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventRating`;
  }
}
