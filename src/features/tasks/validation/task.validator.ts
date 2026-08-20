export type TaskCreateInput = {
  title: string;
};

export function validateTaskTitle(title: string): string {
  const trimmed = title.trim();

  if (!trimmed) {
    throw new Error("Task title is required");
  }

  if (trimmed.length < 3) {
    throw new Error("Task title must be at least 3 characters");
  }

  return trimmed;
}

export function validateCreateTaskInput(input: TaskCreateInput) {
  return {
    title: validateTaskTitle(input.title),
  };
}
