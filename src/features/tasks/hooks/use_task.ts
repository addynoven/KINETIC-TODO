import { useCallback, useEffect, useMemo, useState } from "react";

import { CreateTaskDTO, Task } from "../models/tasks.types";
import { taskRepository } from "../repositories/task.repository";
import { validateCreateTaskInput } from "../validation/task.validator";
import { createTaskActionPipeline } from "./task_action_pipeline";

export default function useTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const actionPipeline = useMemo(() => {
    return createTaskActionPipeline((message) => {
      setError(message);
    });
  }, []);

  // 1. Initial / Manual Refresh
  const refreshTasks = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await actionPipeline.runAsyncAction(
        { action: "refreshTasks" },
        async () => {
          const nextTasks = await taskRepository.getTasksAsync();
          setTasks(nextTasks);
          return nextTasks;
        },
      );

      if (result === undefined) {
        setError("Failed to load tasks");
      }
    } finally {
      setLoading(false);
    }
  }, [actionPipeline]);

  useEffect(() => {
    void refreshTasks();
  }, [refreshTasks]);

  // 2. Create Task
  const createTask = useCallback(
    async (draft: CreateTaskDTO) => {
      return await actionPipeline.runAsyncAction(
        { action: "createTask" },
        async () => {
          const payload = validateCreateTaskInput(draft);
          const nextTask = await taskRepository.createTask(payload);

          setTasks((prev) => [...prev, nextTask]);
          setInput("");
          setError(null);
          return nextTask;
        },
      );
    },
    [actionPipeline],
  );

  // 3. Update Task
  const updateTask = useCallback(
    async (id: string, nextTitle: string) => {
      return await actionPipeline.runAsyncAction(
        { action: "updateTask", metadata: { id } },
        async () => {
          const payload = validateCreateTaskInput({ title: nextTitle });
          const updated = await taskRepository.updateTask(id, payload);

          setTasks((prev) =>
            prev.map((task) => (task.id === id ? updated : task)),
          );
          setError(null);
          return updated;
        },
      );
    },
    [actionPipeline],
  );

  // 4. Remove Task
  const removeTask = useCallback(
    async (id: string) => {
      return await actionPipeline.runAsyncAction(
        { action: "removeTask", metadata: { id } },
        async () => {
          await taskRepository.removeTask(id);
          setTasks((prev) => prev.filter((task) => task.id !== id));
          setError(null);
        },
      );
    },
    [actionPipeline],
  );

  // 5. Toggle Status
  const toggleTaskStatus = useCallback(
    async (id: string) => {
      return await actionPipeline.runAsyncAction(
        {
          action: "toggleTaskStatus",
          metadata: { id },
        },
        async () => {
          const updated = await taskRepository.toggleTaskStatus(id);
          setTasks((prev) =>
            prev.map((task) => (task.id === id ? updated : task)),
          );
          setError(null);
          return updated;
        },
      );
    },
    [actionPipeline],
  );

  // 6. Clear All
  const clearAllTasks = useCallback(async () => {
    return await actionPipeline.runAsyncAction(
      { action: "clearAllTasks" },
      async () => {
        await taskRepository.clearAllTasks();
        setTasks([]);
        setError(null);
      },
    );
  }, [actionPipeline]);

  // 6b. Clear Completed
  const clearCompletedTasks = useCallback(async () => {
    return await actionPipeline.runAsyncAction(
      { action: "clearCompletedTasks" },
      async () => {
        await taskRepository.clearCompletedTasks();
        setTasks((prev) => prev.filter((task) => !task.isDone));
        setError(null);
      },
    );
  }, [actionPipeline]);

  // 7. Synchronous Derived Counts (Computed directly from state without extra network delay)

  const countTasks = useMemo(() => tasks.length, [tasks]);

  const countDoneTasks = useMemo(
    () => tasks.filter((t) => t.isDone).length,
    [tasks],
  );

  const countNotDoneTasks = useMemo(
    () => tasks.filter((t) => !t.isDone).length,
    [tasks],
  );

  // 8. Find / Get Query Actions
  const getTaskById = useCallback(
    async (id: string) => {
      return await actionPipeline.runAsyncAction(
        { action: "getTaskById", metadata: { id } },
        async () => {
          const task = await taskRepository.getTaskById(id);
          setError(null);
          return task;
        },
      );
    },
    [actionPipeline],
  );

  // 9. Find by Title
  const findTasksByTitle = useCallback(
    async (title: string) => {
      return await actionPipeline.runAsyncAction(
        { action: "findTasksByTitle", metadata: { title } },
        async () => {
          const foundTasks = await taskRepository.findTasksByTitle(title);
          setError(null);
          return foundTasks;
        },
      );
    },
    [actionPipeline],
  );

  return {
    tasks,
    input,
    setInput,
    error,
    loading,
    createTask,
    updateTask,
    removeTask,
    toggleTaskStatus,
    clearAllTasks,
    clearCompletedTasks,
    countTasks,
    countDoneTasks,
    countNotDoneTasks,
    getTaskById,
    findTasksByTitle,
    refreshTasks,
    setError,
  };
}
