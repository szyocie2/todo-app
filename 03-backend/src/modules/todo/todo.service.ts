import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async listTodo() {
    return this.prisma.todo.findMany({});
  }

  async addTodo(data: CreateTodoDto) {
    return this.prisma.todo.create({
      data: {
        title: data.title,
        content: data.content,
        done: data.done,
      },
    });
  }

  editTodo() {}
  deleteToDo() {}

  get(id: number) {
    return this.prisma.todo.findUnique({
      where: {
        id,
      },
    });
  }
}
