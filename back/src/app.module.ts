import { Module } from '@nestjs/common';
import { PersonajeModule } from './personaje/personaje.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personaje } from './personaje/entities/personaje.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    PersonajeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'karin',
      entities: [Personaje],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
