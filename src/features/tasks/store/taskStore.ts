import { create } from "zustand";
import { withErrorCatch } from "../../../core/errors";
import { taskRepository } from "../repositories/task.repository";
import { TaskStore } from "./taskStore.types";

export const useTaskStore = create<TaskStore>((set) => {
  const handleError = (error: Error) => set({ error: error.message });

  return {
    tasks: [],
    error: null,

    initialize: () => {
      withErrorCatch(
        () => {
          taskRepository.initialize();
          const tasks = taskRepository.getTasks();
          set({ tasks, error: null });
        },
        { source: "TaskStore", action: "initialize" },
        handleError
      );
    },

    addTask: (input) => {
      const task = withErrorCatch(
        () => {
          const created = taskRepository.createTask(input);
          set((state) => ({
            tasks: [...state.tasks, created],
            error: null,
          }));
          return created;
        },
        { source: "TaskStore", action: "addTask", metadata: { input } },
        handleError
      );

      return task ?? null;
    },

    updateTask: (id, input) => {
      const updated = withErrorCatch(
        () => {
          const result = taskRepository.updateTask(id, input);
          set((state) => ({
            tasks: state.tasks.map((task) => (task.id === id ? result : task)),
            error: null,
          }));
          return result;
        },
        { source: "TaskStore", action: "updateTask", metadata: { id, input } },
        handleError
      );

      return updated ?? null;
    },

    deleteTask: (id) => {
      withErrorCatch(
        () => {
          taskRepository.deleteTask(id);
          set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
            error: null,
          }));
        },
        { source: "TaskStore", action: "deleteTask", metadata: { id } },
        handleError
      );
    },

    toggleTask: (id) => {
      withErrorCatch(
        () => {
          const updated = taskRepository.toggleTask(id);
          set((state) => ({
            tasks: state.tasks.map((task) => (task.id === id ? updated : task)),
            error: null,
          }));
        },
        { source: "TaskStore", action: "toggleTask", metadata: { id } },
        handleError
      );
    },

    clearTasks: () => {
      withErrorCatch(
        () => {
          taskRepository.clearTasks();
          set({ tasks: [], error: null });
        },
        { source: "TaskStore", action: "clearTasks" },
        handleError
      );
    },

    clearCompleted: () => {
      withErrorCatch(
        () => {
          taskRepository.clearCompleted();
          set((state) => ({
            tasks: state.tasks.filter((task) => !task.isDone),
            error: null,
          }));
        },
        { source: "TaskStore", action: "clearCompleted" },
        handleError
      );
    },

    findTasksByTitle: (title) => {
      const results = withErrorCatch(
        () => taskRepository.findByTitle(title),
        {
          source: "TaskStore",
          action: "findTasksByTitle",
          metadata: { title },
        },
        handleError
      );

      return results ?? [];
    },

    clearError: () => {
      set({ error: null });
    },
  };
});
