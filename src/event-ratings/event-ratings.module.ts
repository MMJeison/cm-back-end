import { Module } from '@nestjs/common';
import { EventRatingsService } from './event-ratings.service';
import { EventRatingsController } from './event-ratings.controller';

@Module({
  controllers: [EventRatingsController],
  providers: [EventRatingsService],
})
export class EventRatingsModule {}
