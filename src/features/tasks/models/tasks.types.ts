export interface Task {
  id: string;
  title: string;
  isDone: boolean;
  createdAt: number;
}

export type CreateTaskDTO = Pick<Task, "title">;
