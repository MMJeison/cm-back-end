import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantRatingDto } from './dto/create-restaurant-rating.dto';
import { UpdateRestaurantRatingDto } from './dto/update-restaurant-rating.dto';
import { Repository } from 'typeorm';
import { RestaurantRating } from './entities/restaurant-rating.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantsService } from '@/restaurants/restaurants.service';
import { UsersService } from '@/users/users.service';

@Injectable()
export class RestaurantRatingsService {

  constructor(
    @InjectRepository(RestaurantRating)
    private readonly restaurantRatingRepository: Repository<RestaurantRating>,
    private readonly restaurantsService: RestaurantsService,
    private readonly usersService: UsersService,
  ) { }

  async create(createRestaurantRatingDto: CreateRestaurantRatingDto) {
    const { restaurantId, userEmail, userId, ...rest } = createRestaurantRatingDto;
    if(!userId && !userEmail) {
      throw new BadRequestException('Either userId or userEmail must be provided');
    }
    const restaurant = await this.restaurantsService.findOne(restaurantId);
    if(!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }
    const user = userId ? await this.usersService.findOne(userId) : await this.usersService.findOneByEmail(userEmail);
    if(!user) {
      throw new NotFoundException('User not found');
    }
    const restaurantRating = this.findOneByUserAndRestaurant(user.id, restaurant.id);
    if(restaurantRating) {
      throw new ConflictException('Restaurant rating already exists');
    }
    const newRestaurantRating = this.restaurantRatingRepository.create({ restaurant, user, ...rest });
    return this.restaurantRatingRepository.save(newRestaurantRating);
  }

  findAll() {
    return this.restaurantRatingRepository.find();
  }

  findOne(id: string) {
    return this.restaurantRatingRepository.findOneBy({ id });
  }

  findOneByUserAndRestaurant(userId: string, restaurantId: string) {
    return this.restaurantRatingRepository.findOneBy({ user: { id: userId }, restaurant: { id: restaurantId } });
  }

  findByRestaurant(restaurantId: string) {
    return this.restaurantRatingRepository.find({ where: { restaurant: { id: restaurantId } } });
  }

  findByUser(userId: string) {
    return this.restaurantRatingRepository.find({ where: { user: { id: userId } } });
  }

  

  update(id: string, updateRestaurantRatingDto: UpdateRestaurantRatingDto) {
    // TODO: Implement
    console.log(updateRestaurantRatingDto);
    return `This action updates a #${id} restaurantRating`;
  }

  async remove(id: string) {
    const restaurantRating = await this.findOne(id);
    if(!restaurantRating) {
      throw new NotFoundException('Restaurant rating not found');
    }
    return this.restaurantRatingRepository.remove(restaurantRating);
  }
}
