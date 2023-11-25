import { BaseEntity } from "@/common/config/base-entity";
import { Restaurant } from "@/restaurants/entities/restaurant.entity";
import { User } from "@/users/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class RestaurantRating extends BaseEntity {

  @Column({ type: 'decimal', precision: 2, scale: 1 })
  puntuacion: number;

  @Column({ type: 'text' })
  comment: string;

  @ManyToOne(() => User, user => user.restaurantRatings, {
    nullable: false,
  })
  user: User;

  @ManyToOne(() => Restaurant, restaurant => restaurant.ratings, {
    nullable: false,
  })
  restaurant: Restaurant;

}
