import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoNotfoundException } from '../../exceptions/todo-notfound-exception';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  listTodo() {
    return this.todoService.listTodo();
  }

  @Get(':id')
  async getTodo(@Param('id') id: number) {
    const todo = await this.todoService.get(id);
    if (!todo) throw new TodoNotfoundException();

    return todo;
  }

  @Post()
  addTodo(@Body() data: CreateTodoDto) {
    return this.todoService.addTodo(data);
  }
}
