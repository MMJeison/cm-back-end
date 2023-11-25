import { RestaurantEvent } from "@/restaurant-event/entities/restaurant-event.entity";
import { RestaurantRating } from "@/restaurant-ratings/entities/restaurant-rating.entity";
import { BaseEntity } from "src/common/config/base-entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Restaurant extends BaseEntity {

  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'text', nullable: true })
  department: string;

  @Column({ type: 'text', nullable: true })
  city: string;

  @Column({ type: 'text' })
  image: string;

  @Column({type: 'decimal', precision: 2, scale: 1, nullable: true})
  rating: number;

  @Column({ type: 'text', nullable: true })
  openingHours: string;

  @OneToMany(() => RestaurantRating, restaurantRating => restaurantRating.restaurant)
  ratings: RestaurantRating[];

  @OneToMany(() => RestaurantEvent, restaurantEvent => restaurantEvent.restaurant)
  events: RestaurantEvent[];

}
