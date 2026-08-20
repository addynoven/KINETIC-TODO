import * as Crypto from "expo-crypto";

import { storage } from "../../../core/storage";
import {
  CreateTaskDTO,
  Task,
  UpdateTaskDTO,
} from "../models/tasks.types";

const TASKS_KEY = "tasks";

const initialTasks: Task[] = [
  {
    id: "task-1",
    title: "MASTER REACT NATIVE PRIMITIVES",
    isDone: false,
    createdAt: Date.now() - 3600000,
  },
  {
    id: "task-2",
    title: "IMPLEMENT CLEAN ARCHITECTURE",
    isDone: false,
    createdAt: Date.now() - 7200000,
  },
  {
    id: "task-3",
    title: "SETUP INITIAL PROJECT STRUCTURE",
    isDone: true,
    createdAt: Date.now() - 10800000,
  },
];

export class TaskRepository {
  private readTasks(): Task[] {
    const raw = storage.getString(TASKS_KEY);

    if (!raw) {
      return [];
    }

    try {
      const parsed: unknown = JSON.parse(raw);

      if (!Array.isArray(parsed)) {
        return [];
      }

      return parsed as Task[];
    } catch {
      return [];
    }
  }

  private writeTasks(tasks: Task[]): void {
    storage.set(TASKS_KEY, JSON.stringify(tasks));
  }

  initialize(): void {
    const existing = storage.getString(TASKS_KEY);

    if (existing !== undefined) {
      return;
    }

    this.writeTasks(initialTasks);
  }

  getTasks(): Task[] {
    return this.readTasks();
  }

  getTaskById(id: string): Task {
    const tasks = this.readTasks();

    const task = tasks.find(
      (item) => item.id === id,
    );

    if (!task) {
      throw new Error(
        `Task with ID ${id} not found`,
      );
    }

    return task;
  }

  createTask(input: CreateTaskDTO): Task {
    const tasks = this.readTasks();

    const task: Task = {
      id: Crypto.randomUUID(),
      title: input.title,
      isDone: false,
      createdAt: Date.now(),
    };

    tasks.push(task);

    this.writeTasks(tasks);

    return task;
  }

  updateTask(
    id: string,
    input: UpdateTaskDTO,
  ): Task {
    const tasks = this.readTasks();

    const task = tasks.find(
      (item) => item.id === id,
    );

    if (!task) {
      throw new Error(
        `Task with ID ${id} not found`,
      );
    }

    if (input.title !== undefined) {
      task.title = input.title;
    }

    this.writeTasks(tasks);

    return task;
  }

  deleteTask(id: string): void {
    const tasks = this.readTasks();

    const index = tasks.findIndex(
      (item) => item.id === id,
    );

    if (index === -1) {
      throw new Error(
        `Task with ID ${id} not found`,
      );
    }

    tasks.splice(index, 1);

    this.writeTasks(tasks);
  }

  toggleTask(id: string): Task {
    const tasks = this.readTasks();

    const task = tasks.find(
      (item) => item.id === id,
    );

    if (!task) {
      throw new Error(
        `Task with ID ${id} not found`,
      );
    }

    task.isDone = !task.isDone;

    this.writeTasks(tasks);

    return task;
  }

  clearTasks(): void {
    this.writeTasks([]);
  }

  clearCompleted(): void {
    const tasks = this.readTasks();

    const remaining = tasks.filter(
      (task) => !task.isDone,
    );

    this.writeTasks(remaining);
  }

  findByTitle(title: string): Task[] {
    const tasks = this.readTasks();

    const query = title.trim().toLowerCase();

    if (!query) {
      return tasks;
    }

    return tasks.filter((task) =>
      task.title
        .toLowerCase()
        .includes(query),
    );
  }
}

export const taskRepository =
  new TaskRepository();
