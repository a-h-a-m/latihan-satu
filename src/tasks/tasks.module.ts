import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksEntity } from './entities/tasks.entity';
import { TasksRepository } from './repo/tasks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TasksEntity])],
  providers: [TasksService, TasksRepository],
  controllers: [TasksController]
})
export class TasksModule {}
