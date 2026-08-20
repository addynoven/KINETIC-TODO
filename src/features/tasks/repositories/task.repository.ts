import { CreateTaskDTO, Task } from "../models/tasks.types";
import {
  clearCompletedTasks as clearCompletedTasksService,
  clearTasks,
  createTask as createTaskService,
  deleteTask as deleteTaskService,
  findTasksByTitle,
  getTaskById as getTaskByIdService,
  getTasksAsync as getTasksAsyncService,
  toggleTaskDone,
  updateTask as updateTaskService,
} from "../services/task.service";

export class TaskRepository {
  createTask(input: CreateTaskDTO): Promise<Task> {
    return createTaskService(input);
  }

  getTaskById(id: string): Promise<Task> {
    return getTaskByIdService(id);
  }

  async getTasksAsync(): Promise<Task[]> {
    return await getTasksAsyncService();
  }

  updateTask(id: string, input: Partial<CreateTaskDTO>): Promise<Task> {
    return updateTaskService(id, input);
  }

  removeTask(id: string): Promise<void> {
    return deleteTaskService(id);
  }

  toggleTaskStatus(id: string): Promise<Task> {
    return toggleTaskDone(id);
  }

  clearAllTasks(): Promise<void> {
    return clearTasks();
  }

  clearCompletedTasks(): Promise<void> {
    return clearCompletedTasksService();
  }

  findTasksByTitle(title: string): Promise<Task[]> {
    return findTasksByTitle(title);
  }
}

export const taskRepository = new TaskRepository();
