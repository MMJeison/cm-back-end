import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantEventDto } from './dto/create-restaurant-event.dto';
import { UpdateRestaurantEventDto } from './dto/update-restaurant-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantEvent } from './entities/restaurant-event.entity';
import { Repository } from 'typeorm';
import { RestaurantsService } from '@/restaurants/restaurants.service';
import { EventsService } from '@/events/events.service';

@Injectable()
export class RestaurantEventService {

  constructor(
    @InjectRepository(RestaurantEvent)
    private readonly restaurantEventRepository: Repository<RestaurantEvent>,
    private readonly restaurantsService: RestaurantsService,
    private readonly eventsService: EventsService,
  ) { }

  async create(createRestaurantEventDto: CreateRestaurantEventDto) {
    const { restaurantId, eventId } = createRestaurantEventDto;
    const restaurant = await this.restaurantsService.findOne(restaurantId);
    if(!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    const event = await this.eventsService.findOne(eventId);
    if(!event) {
      throw new NotFoundException('Event not found');
    }
    const restaurantEvent = this.findByRestaurantAndEvent(restaurantId, eventId);
    if(restaurantEvent) {
      throw new ConflictException('Restaurant event already exists');
    }
    const newRestaurantEvent = this.restaurantEventRepository.create({ restaurant, event });
    return this.restaurantEventRepository.save(newRestaurantEvent);
  }

  findAll() {
    return this.restaurantEventRepository.find();
  }

  findOne(id: string) {
    return this.restaurantEventRepository.findOneBy({ id });
  }

  findByRestaurantAndEvent(restaurantId: string, eventId: string) {
    return this.restaurantEventRepository.findOneBy({ restaurant: { id: restaurantId }, event: { id: eventId } });
  }

  findByRestaurant(restaurantId: string) {
    return this.restaurantEventRepository.find({ where: { restaurant: { id: restaurantId } } });
  }

  findByEvent(eventId: string) {
    return this.restaurantEventRepository.find({ where: { event: { id: eventId } } });
  }

  update(id: string, updateRestaurantEventDto: UpdateRestaurantEventDto) {
    // TODO: Implement
    console.log(id, updateRestaurantEventDto);
    return `This action updates a #${id} restaurantEvent`;
  }

  async remove(id: string) {
    const restaurantEvent = await this.findOne(id);
    if(!restaurantEvent) {
      throw new NotFoundException('Restaurant event not found');
    }
    return this.restaurantEventRepository.remove(restaurantEvent);
  }
}
