import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/orm.config';
import { TasksModule } from './tasks/tasks.module';
import { TasksController } from './tasks/tasks.controller';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
