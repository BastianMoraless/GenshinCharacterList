import { Injectable } from '@nestjs/common';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personaje } from './entities/personaje.entity';

@Injectable()
export class PersonajeService {

  constructor(
    @InjectRepository(Personaje)
    private personajeService:Repository<Personaje>
  ){}

  create(createPersonajeDto: CreatePersonajeDto) {
    const newPersonaje = this.personajeService.create(createPersonajeDto)
    return this.personajeService.save(newPersonaje)
  }

  findAll() {
    return this.personajeService.find()
  }

  findOne(id: number) {
    return this.personajeService.findOneBy({id})
  }

  update(id: number, updatePersonajeDto: UpdatePersonajeDto) {
    return this.personajeService.update(id, updatePersonajeDto)
  }

  remove(id: number) {
    return this.personajeService.delete(id)
  }
}
