import { Module } from '@nestjs/common';
import { RestaurantEventService } from './restaurant-event.service';
import { RestaurantEventController } from './restaurant-event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantEvent } from './entities/restaurant-event.entity';
import { RestaurantsModule } from '@/restaurants/restaurants.module';
import { EventsModule } from '@/events/events.module';

@Module({
  imports: [
    EventsModule,
    RestaurantsModule,
    TypeOrmModule.forFeature([RestaurantEvent]),
  ],
  controllers: [RestaurantEventController],
  providers: [RestaurantEventService],
})
export class RestaurantEventModule {}
