import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventRatingsService } from './event-ratings.service';
import { CreateEventRatingDto } from './dto/create-event-rating.dto';
import { UpdateEventRatingDto } from './dto/update-event-rating.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Event Ratings')
@Controller('event-ratings')
export class EventRatingsController {
  constructor(private readonly eventRatingsService: EventRatingsService) {}

  @Post()
  create(@Body() createEventRatingDto: CreateEventRatingDto) {
    return this.eventRatingsService.create(createEventRatingDto);
  }

  @Get()
  findAll() {
    return this.eventRatingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventRatingsService.findOne(id);
  }

  @Get('event/:eventId')
  findByEvent(@Param('eventId') eventId: string) {
    return this.eventRatingsService.findByEvent(eventId);
  }

  @Get('user/:userId')
  findByUser(@Param('userId') userId: string) {
    return this.eventRatingsService.findByUser(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventRatingDto: UpdateEventRatingDto) {
    return this.eventRatingsService.update(id, updateEventRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventRatingsService.remove(id);
  }
}
