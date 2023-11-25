import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantsService {

  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurantRepository: Repository<Restaurant>,
  ) { }

  async create(createRestaurantDto: CreateRestaurantDto) {
    const { name } = createRestaurantDto;
    const restaurant = await this.findOneByName(name);
    if (restaurant) {
      throw new ConflictException('Restaurant already exists');
    }
    const newRestaurant = this.restaurantRepository.create(createRestaurantDto);
    return this.restaurantRepository.save(newRestaurant);
  }

  findAll() {
    return this.restaurantRepository.find();
  }

  findOne(id: string) {
    return this.restaurantRepository.findOneBy({ id });
  }

  findOneByName(name: string) {
    return this.restaurantRepository.findOneBy({ name });
  }

  findByCity(city: string) {
    return this.restaurantRepository.find({ where: { city } });
  }

  findByDepartment(department: string) {
    return this.restaurantRepository.find({ where: { department } });
  }

  async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    let restaurant = await this.findOne(id);
    if (!restaurant) {
      throw new NotFoundException(`Restaurant #${id} not found`);
    }
    const { name } = updateRestaurantDto;
    restaurant = await this.findOneByName(name);
    if (restaurant) {
      throw new ConflictException('Restaurant already exists');
    }
    return this.restaurantRepository.update(id, updateRestaurantDto);
  }

  async remove(id: string) {
    const restaurant = await this.findOne(id);
    if (!restaurant) {
      throw new NotFoundException(`Restaurant #${id} not found`);
    }
    return this.restaurantRepository.delete(id);
  }
}
