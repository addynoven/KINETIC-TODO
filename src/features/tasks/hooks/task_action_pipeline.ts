import {
  type AppError,
  type AppErrorContext,
  withAsyncErrorCatch,
  withErrorCatch,
} from "../../../core/errors/error-handler";

type TaskActionOptions = {
  action: string;
  metadata?: Record<string, unknown>;
};

export function createTaskActionPipeline(
  onError: (message: string) => void,
  source = "useTask",
) {
  const handleError = (appError: AppError) => {
    onError(appError.message);
  };

  const buildContext = (options: TaskActionOptions): AppErrorContext => ({
    source,
    action: options.action,
    metadata: options.metadata,
  });

  const runAction = <T>(
    options: TaskActionOptions,
    action: () => T,
  ): T | undefined => {
    return withErrorCatch(action, buildContext(options), handleError);
  };

  const runAsyncAction = <T>(
    options: TaskActionOptions,
    action: () => Promise<T>,
  ): Promise<T | undefined> => {
    return withAsyncErrorCatch(action, buildContext(options), handleError);
  };

  return {
    runAction,
    runAsyncAction,
  };
}
