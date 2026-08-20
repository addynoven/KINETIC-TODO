export type LogLevel = "INFO" | "ACTION" | "WARN" | "CRON" | "ERROR";

export interface SystemLogEntry {
  id: string;
  time: string;
  level: LogLevel;
  message: string;
}

export interface SystemMetrics {
  taskDensityPercent: number;
  taskDensityDelta: string;
  memoryUsed: string;
  memoryLimit: string;
  memoryUsedRatio: number;
  syncLatencyMs: number;
  syncLatencyAvgMs: number;
  latencyBars: number[];
  kernelStatus: string;
  uptime: string;
  build: string;
}
