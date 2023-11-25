import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {

  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) { }

  async create(createEventDto: CreateEventDto) {
    const { name, date } = createEventDto;
    const event = await this.findOneByName(name);
    if (event && event.date === date) {
      throw new ConflictException('Event already exists');
    }
    const newEvent = this.eventRepository.create(createEventDto);
    return this.eventRepository.save(newEvent);
  }

  findAll() {
    return this.eventRepository.find();
  }

  findOne(id: string) {
    return this.eventRepository.findOneBy({ id });
  }

  findOneByName(name: string) {
    return this.eventRepository.findOneBy({ name })
  }

  findByCity(city: string) {
    return this.eventRepository.find({ where: { city } });
  }

  findByDepartment(department: string) {
    return this.eventRepository.find({ where: { department } });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const event = await this.findOne(id);
    if (!event) {
      throw new NotFoundException(`Event #${id} not found`);
    }
    let { name, date } = updateEventDto;
    if (!name) name = event.name;
    if (!date) date = event.date;
    if(name === event.name && date === event.date) {
      throw new ConflictException('Event already exists');
    }
    return this.eventRepository.update(id, updateEventDto);
  }

  async remove(id: string) {
    const event = await this.findOne(id);
    if (!event) {
      throw new NotFoundException(`Event #${id} not found`);
    }
    return this.eventRepository.delete(id);
  }
}
