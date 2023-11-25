import { BaseEntity } from "@/common/config/base-entity";
import { IsUUID } from "class-validator";

export class CreateRestaurantEventDto extends BaseEntity {

  @IsUUID()
  restaurantId: string;

  @IsUUID()
  eventId: string;

}
