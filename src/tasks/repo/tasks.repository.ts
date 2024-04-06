import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { TasksEntity } from "../entities/tasks.entity";
import { FilterDto } from "../dto/filter.dto";

@Injectable()
export class TasksRepository extends Repository<TasksEntity>{
    constructor(private dataSource: DataSource){
        super(TasksEntity, dataSource.createEntityManager())
    }

    // create task
    async createTask(title: string, description: string){
        const task = this.create({
            title,
            description
        });
        await this.save(task)
        return task;
    }

    // get task
    async getTask(){
        return this.find()
    }

    // get task by id
    async getTaskById(id: number){
        return await this.findOne({ where: { id } });
    }

    // delete
    async deleteTask(id: number){
        const hapusData = await this.delete(id)
        return hapusData
    }

    // get task by search
    async getTaskSearch(filter: FilterDto){
        const {search} = filter

        const query = this.createQueryBuilder('tasks')

        if(search){
            query.andWhere('(LOWER(tasks.title) LIKE LOWER(:search) OR LOWER(tasks.description) LIKE LOWER(:search))', {search: `%${search}%`})
        }
        const task = await query.getMany()
        return task;
    }
}