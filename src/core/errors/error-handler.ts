export type AppErrorContext = {
  source?: string;
  action?: string;
  metadata?: Record<string, unknown>;
};

export type AppError = Error & {
  context?: AppErrorContext;
};

const errorLog: AppError[] = [];

export function captureError(error: unknown, context: AppErrorContext = {}) {
  const normalized = error instanceof Error ? error : new Error(String(error));

  const appError = normalized as AppError;
  appError.context = context;

  errorLog.push(appError);

  console.error("[AppError]", {
    message: appError.message,
    stack: appError.stack,
    context,
  });

  return appError;
}

export function getErrorLog(): AppError[] {
  return [...errorLog];
}

export function withErrorCatch<T>(
  action: () => T,
  context: AppErrorContext = {},
  onError?: (error: AppError) => void,
): T | undefined {
  try {
    return action();
  } catch (error) {
    const appError = captureError(error, context);
    onError?.(appError);
    return undefined;
  }
}

export async function withAsyncErrorCatch<T>(
  action: () => Promise<T>,
  context: AppErrorContext = {},
  onError?: (error: AppError) => void,
): Promise<T | undefined> {
  try {
    return await action();
  } catch (error) {
    const appError = captureError(error, context);
    onError?.(appError);
    return undefined;
  }
}
