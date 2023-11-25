import { EventRating } from "@/event-ratings/entities/event-rating.entity";
import { RestaurantRating } from "@/restaurant-ratings/entities/restaurant-rating.entity";
import { BaseEntity } from "src/common/config/base-entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class User extends BaseEntity {

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @OneToMany(() => EventRating, eventRating => eventRating.user)
  eventRatings: EventRating[];

  @OneToMany(() => RestaurantRating, restaurantRating => restaurantRating.user)
  restaurantRatings: RestaurantRating[];

}
