import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // Banco de dados SQLite
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Apenas para desenvolvimento
    }),
    UsersModule, // Módulo de usuários
    ConfigModule.forRoot(), // Módulo de configuração
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
