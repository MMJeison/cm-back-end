import { BaseEntity } from "@/common/config/base-entity";
import { Restaurant } from "@/restaurants/entities/restaurant.entity";
import { Event } from "@/events/entities/event.entity";
import { Entity, ManyToOne } from "typeorm";

@Entity()
export class RestaurantEvent extends BaseEntity {

  @ManyToOne(() => Restaurant, restaurant => restaurant.events)
  restaurant: Restaurant;

  @ManyToOne(() => Event, event => event.restaurants)
  event: Event;

}
