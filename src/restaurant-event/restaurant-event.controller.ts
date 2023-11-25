import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantEventService } from './restaurant-event.service';
import { CreateRestaurantEventDto } from './dto/create-restaurant-event.dto';
import { UpdateRestaurantEventDto } from './dto/update-restaurant-event.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Restaurant Events')
@Controller('restaurant-event')
export class RestaurantEventController {
  constructor(private readonly restaurantEventService: RestaurantEventService) {}

  @Post()
  create(@Body() createRestaurantEventDto: CreateRestaurantEventDto) {
    return this.restaurantEventService.create(createRestaurantEventDto);
  }

  @Get()
  findAll() {
    return this.restaurantEventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantEventService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestaurantEventDto: UpdateRestaurantEventDto) {
    return this.restaurantEventService.update(id, updateRestaurantEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantEventService.remove(id);
  }
}
