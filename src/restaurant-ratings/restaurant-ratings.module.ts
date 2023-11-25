import { Module } from '@nestjs/common';
import { RestaurantRatingsService } from './restaurant-ratings.service';
import { RestaurantRatingsController } from './restaurant-ratings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantRating } from './entities/restaurant-rating.entity';
import { UsersModule } from '@/users/users.module';
import { RestaurantsModule } from '@/restaurants/restaurants.module';

@Module({
  imports: [
    UsersModule,
    RestaurantsModule,
    TypeOrmModule.forFeature([RestaurantRating]),
  ],
  controllers: [RestaurantRatingsController],
  providers: [RestaurantRatingsService],
})
export class RestaurantRatingsModule {}
