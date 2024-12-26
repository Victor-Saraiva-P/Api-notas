import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // Banco de dados SQLite
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Apenas para desenvolvimento
    }),
    UsersModule, // Módulo de usuários
    ConfigModule.forRoot(),
    AuthModule, // Módulo de configuração
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
