import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PersonajeService } from './personaje.service';
import { CreatePersonajeDto } from './dto/create-personaje.dto';
import { UpdatePersonajeDto } from './dto/update-personaje.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { Express } from 'express';  // Asegúrate de que esto sea correcto.


@Controller('personaje')
export class PersonajeController {
  constructor(private readonly personajeService: PersonajeService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('imagenUrl', {
      storage: diskStorage({
        destination: './uploads',  // Carpeta donde se guardarán las imágenes
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  create(
    @Body() createPersonajeDto: CreatePersonajeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.personajeService.create({
      ...createPersonajeDto,
      imagenUrl: file.filename, // Guardamos el nombre del archivo
    });
  }

  @Get()
  findAll() {
    return this.personajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personajeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePersonajeDto: UpdatePersonajeDto) {
    return this.personajeService.update(+id, updatePersonajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personajeService.remove(+id);
  }
}
