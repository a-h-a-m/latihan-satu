import { Body, Controller, Delete, Get, Param, Post, Query, Render } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { title } from 'process';
import { UpdateDto } from './dto/updateTask.dto';
import { filter } from 'rxjs';
import { FilterDto } from './dto/filter.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}
    
    // create task
    @Post()
    insertDataTask(@Body('title') title: string, @Body('description') description: string){
        return this.tasksService.createTask(title, description);
    }

    // get task
    @Get('viewdata')
    async getTask(){
        const data = await this.tasksService.getDataTask();
        return {data}
    }

    // by id
    @Get('taskId/:id')
    getById(@Param('id')id: number){
        return this.tasksService.getTaskById(id)
    }

    // update task
    @Post('updateTask/:id')
    updateDataTask(@Param('id') id: number, @Body() taskUpdate: UpdateDto){
        // const {title, description} = taskUpdate
        return this.tasksService.updateDataTask(id, taskUpdate);
    }

    // delete
    @Delete('deleteTask/:id')
    deleteTask(@Param('id')id: number){
        return this.tasksService.deleteDataTask(id)
    }

    // search
    @Get('searchTask')
    searchData(@Query() filter: FilterDto){
        return this.tasksService.getSearch(filter)
    }

    //view hbs
    @Get('test')
    @Render('task/index')
    root(){
        return {title: "Halaman Tasks", message: 'Ini tampilan dari halaman task'}
    }
}
