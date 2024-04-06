import { TasksService } from './tasks.service';
import { UpdateDto } from './dto/updateTask.dto';
import { FilterDto } from './dto/filter.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    insertDataTask(title: string, description: string): Promise<import("src/tasks/entities/tasks.entity").TasksEntity>;
    getTask(): Promise<{
        data: import("src/tasks/entities/tasks.entity").TasksEntity[];
    }>;
    getById(id: number): Promise<import("src/tasks/entities/tasks.entity").TasksEntity>;
    updateDataTask(id: number, taskUpdate: UpdateDto): Promise<import("src/tasks/entities/tasks.entity").TasksEntity>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
    searchData(filter: FilterDto): Promise<import("src/tasks/entities/tasks.entity").TasksEntity[]>;
    root(): {
        title: string;
        message: string;
    };
}
