import { EventRating } from "@/event-ratings/entities/event-rating.entity";
import { RestaurantEvent } from "@/restaurant-event/entities/restaurant-event.entity";
import { BaseEntity } from "src/common/config/base-entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Event extends BaseEntity {

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', nullable: true })
  place: string;

  // @Column({ type: 'text', nullable: true })
  // country: string;
  
  @Column({ type: 'text', nullable: true })
  department: string;
  
  @Column({ type: 'text', nullable: true })
  city: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'text' })
  image: string;

  @Column({ type: 'decimal', precision: 2, scale: 1, nullable: true })
  rating: number;

  @OneToMany(() => EventRating, eventRating => eventRating.event)
  ratings: EventRating[];

  @OneToMany(() => RestaurantEvent, restaurantEvent => restaurantEvent.event)
  restaurants: RestaurantEvent[];

}
