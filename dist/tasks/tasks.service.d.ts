import { TasksRepository } from './repo/tasks.repository';
import { UpdateDto } from './dto/updateTask.dto';
import { FilterDto } from './dto/filter.dto';
export declare class TasksService {
    private taskRepo;
    constructor(taskRepo: TasksRepository);
    createTask(title: string, description: string): Promise<import("src/tasks/entities/tasks.entity").TasksEntity>;
    getDataTask(): Promise<import("src/tasks/entities/tasks.entity").TasksEntity[]>;
    getTaskById(id: number): Promise<import("src/tasks/entities/tasks.entity").TasksEntity>;
    updateDataTask(id: number, updateTask: UpdateDto): Promise<import("src/tasks/entities/tasks.entity").TasksEntity>;
    deleteDataTask(id: number): Promise<import("typeorm").DeleteResult>;
    getSearch(filter: FilterDto): Promise<import("src/tasks/entities/tasks.entity").TasksEntity[]>;
}
