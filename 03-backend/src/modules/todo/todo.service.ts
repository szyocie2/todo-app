import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  listTodo() {
    return [
      {
        title: 'TEST',
        content: 'TEST',
        done: true,
      },
    ];
  }

  addTodo(data: CreateTodoDto) {
    return data;
  }

  editTodo() {}
  deleteToDo() {}
}
