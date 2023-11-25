import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventRatingDto } from './dto/create-event-rating.dto';
import { UpdateEventRatingDto } from './dto/update-event-rating.dto';
import { EventRating } from './entities/event-rating.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventsService } from '@/events/events.service';
import { UsersService } from '@/users/users.service';

@Injectable()
export class EventRatingsService {

  constructor(
    @InjectRepository(EventRating)
    private readonly eventRatingRepository: Repository<EventRating>,
    private readonly eventsService: EventsService,
    private readonly usersService: UsersService,
  ) { }

  async create(createEventRatingDto: CreateEventRatingDto) {
    const { eventId, userEmail, userId, ...rest } = createEventRatingDto;
    if(!userId && !userEmail) {
      throw new BadRequestException('Either userId or userEmail must be provided');
    }
    const event = await this.eventsService.findOne(eventId);
    if(!event) {
      throw new NotFoundException('Event not found');
    }
    const user = userId ? await this.usersService.findOne(userId) : await this.usersService.findOneByEmail(userEmail);
    if(!user) {
      throw new NotFoundException('User not found');
    }
    const eventRating = this.findOneByUserAndEvent(user.id, event.id);
    if(eventRating) {
      throw new ConflictException('Event rating already exists');
    }
    const newEventRating = this.eventRatingRepository.create({ event, user, ...rest });
    return this.eventRatingRepository.save(newEventRating);
  }

  findAll() {
    return this.eventRatingRepository.find();
  }

  findOne(id: string) {
    return this.eventRatingRepository.findOneBy({ id });
  }

  findOneByUserAndEvent(userId: string, eventId: string) {
    return this.eventRatingRepository.findOneBy({ user: { id: userId }, event: { id: eventId } });
  }

  findObeByUserEmailAndEventId(userEmail: string, eventId: string) {
    return this.eventRatingRepository.findOneBy({ user: { email: userEmail }, event: { id: eventId } });
  }

  findByEvent(eventId: string) {
    return this.eventRatingRepository.find({ where: { event: { id: eventId } } });
  }

  findByUser(userId: string) {
    return this.eventRatingRepository.find({ where: { user: { id: userId } } });
  }

  async update(id: string, updateEventRatingDto: UpdateEventRatingDto) {
    const eventRating = await this.findOne(id);
    if(!eventRating) {
      throw new NotFoundException('Event rating not found');
    }
    // TODO: Implement update
    console.log(updateEventRatingDto);
    return `This action updates a #${id} eventRating`;
  }

  async remove(id: string) {
    const eventRating = await this.findOne(id);
    if(!eventRating) {
      throw new NotFoundException('Event rating not found');
    }
    return this.eventRatingRepository.remove(eventRating);
  }
}
