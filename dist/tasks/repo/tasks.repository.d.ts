import { DataSource, Repository } from "typeorm";
import { TasksEntity } from "../entities/tasks.entity";
import { FilterDto } from "../dto/filter.dto";
export declare class TasksRepository extends Repository<TasksEntity> {
    private dataSource;
    constructor(dataSource: DataSource);
    createTask(title: string, description: string): Promise<TasksEntity>;
    getTask(): Promise<TasksEntity[]>;
    getTaskById(id: number): Promise<TasksEntity>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
    getTaskSearch(filter: FilterDto): Promise<TasksEntity[]>;
}
