import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './repo/tasks.repository';
import { UpdateDto } from './dto/updateTask.dto';
import { FilterDto } from './dto/filter.dto';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(TasksRepository)
    private taskRepo: TasksRepository){}

    // create task
    createTask(title: string, description: string){
        return this.taskRepo.createTask(title, description);
    }

    // get task
    getDataTask(){
        return this.taskRepo.getTask()
    }

    // by id
    getTaskById(id: number){
        return this.taskRepo.getTaskById(id)
    }

    // update data
    async updateDataTask(id: number, updateTask: UpdateDto){
        const {title, description} = updateTask
        const taskData = await this.taskRepo.getTaskById(id)
        if (title) {
            taskData.title = title
        }
        if (description) {
            taskData.description = description
        }

        await this.taskRepo.save(taskData)
        return taskData
    }

    // delete data task
    deleteDataTask(id: number){
        return this.taskRepo.deleteTask(id)
    }

    // search
    getSearch(filter: FilterDto){
        return this.taskRepo.getTaskSearch(filter)
    }
}
