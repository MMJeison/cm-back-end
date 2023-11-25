import { BaseEntity } from "src/common/config/base-entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Event } from "@/events/entities/event.entity"
import { User } from "@/users/entities/user.entity";

@Entity()
export class EventRating extends BaseEntity {

  @Column({ type: 'decimal', precision: 2, scale: 1 })
  puntuacion: number;

  @Column({ type: 'text' })
  comment: string;

  @ManyToOne(() => User, user => user.eventRatings, {
    nullable: false,
  })
  user: User;

  @ManyToOne(() => Event, event => event.ratings, {
    nullable: false,
  })
  event: Event;

}
