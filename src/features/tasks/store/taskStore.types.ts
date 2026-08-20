import {
  CreateTaskDTO,
  Task,
  UpdateTaskDTO,
} from "../models/tasks.types";

export interface TaskStoreState {
  tasks: Task[];
  error: string | null;
}

export interface TaskStoreActions {
  initialize: () => void;
  addTask: (input: CreateTaskDTO) => Task | null;
  updateTask: (id: string, input: UpdateTaskDTO) => Task | null;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  clearTasks: () => void;
  clearCompleted: () => void;
  findTasksByTitle: (title: string) => Task[];
  clearError: () => void;
}

export type TaskStore = TaskStoreState & TaskStoreActions;
