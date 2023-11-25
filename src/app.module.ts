import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { EventRatingsModule } from './event-ratings/event-ratings.module';
import { RestaurantRatingsModule } from './restaurant-ratings/restaurant-ratings.module';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { RestaurantEventModule } from './restaurant-event/restaurant-event.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
      })
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER, 
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    EventsModule,
    RestaurantsModule,
    EventRatingsModule,
    RestaurantRatingsModule,
    RestaurantEventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
