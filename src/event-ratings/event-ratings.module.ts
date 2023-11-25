import { Module } from '@nestjs/common';
import { EventRatingsService } from './event-ratings.service';
import { EventRatingsController } from './event-ratings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventRating } from './entities/event-rating.entity';
import { EventsModule } from '@/events/events.module';
import { UsersModule } from '@/users/users.module';

@Module({
  imports: [
    UsersModule,
    EventsModule,
    TypeOrmModule.forFeature([EventRating]),
  ],
  controllers: [EventRatingsController],
  providers: [EventRatingsService],
})
export class EventRatingsModule {}
