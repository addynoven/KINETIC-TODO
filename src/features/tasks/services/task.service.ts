import { CreateTaskDTO, Task } from "../models/tasks.types";
import { v7 as uuidv7 } from "uuid";

const tasks: Task[] = [
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

const DEFAULT_DELAY_MS = 250;

const delay = (ms = DEFAULT_DELAY_MS) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Helper: wraps any function in a simulated network latency
function withDelay<TArgs extends any[], TReturn>(
  fn: (...args: TArgs) => Promise<TReturn> | TReturn,
  ms = DEFAULT_DELAY_MS,
): (...args: TArgs) => Promise<TReturn> {
  return async (...args: TArgs) => {
    await delay(ms);
    return fn(...args);
  };
}

// 1. Create
export const createTask = withDelay(
  async (input: CreateTaskDTO): Promise<Task> => {
    const task: Task = {
      id: uuidv7(),
      title: input.title,
      isDone: false,
      createdAt: Date.now(),
    };
    tasks.push(task);
    return task;
  },
);

// 2. Read
export const getTaskById = withDelay(async (id: string): Promise<Task> => {
  const task = tasks.find((t) => t.id === id);
  if (!task) throw new Error(`Task with ID ${id} not found`);
  return task;
});

export const getTasksAsync = withDelay(async (): Promise<Task[]> => {
  return [...tasks]; // return shallow copy to prevent external mutation
});

// 3. Update
export const updateTask = withDelay(
  async (id: string, input: Partial<CreateTaskDTO>): Promise<Task> => {
    const task = tasks.find((t) => t.id === id);
    if (!task) throw new Error(`Task with ID ${id} not found`);

    if (input.title !== undefined) {
      task.title = input.title;
    }
    return task;
  },
);

// 4. Delete
export const deleteTask = withDelay(async (id: string): Promise<void> => {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) throw new Error(`Task with ID ${id} not found`);
  tasks.splice(index, 1);
});

// 5. Toggle
export const toggleTaskDone = withDelay(async (id: string): Promise<Task> => {
  const task = tasks.find((t) => t.id === id);
  if (!task) throw new Error(`Task with ID ${id} not found`);

  task.isDone = !task.isDone;
  return task;
});

// 6. Clear All
export const clearTasks = withDelay(async (): Promise<void> => {
  tasks.length = 0;
});

// 7. Clear Completed
export const clearCompletedTasks = withDelay(async (): Promise<void> => {
  const remaining = tasks.filter((t) => !t.isDone);
  tasks.length = 0;
  tasks.push(...remaining);
});

// 8. Find by Title
export const findTasksByTitle = withDelay(
  async (title: string): Promise<Task[]> => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(title.toLowerCase()),
    );
  },
);
