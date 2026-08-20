import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { KernelBanner } from "./components/KernelBanner";
import { MetricCard } from "./components/MetricCard";
import { SegmentedBar } from "./components/SegmentedBar";
import { LatencyHistogram } from "./components/LatencyHistogram";
import { SystemLogsTable } from "./components/SystemLogsTable";
import { SystemLogEntry, SystemMetrics } from "./models/system.types";
import { colors, spacing } from "../../core/theme";

const initialMetrics: SystemMetrics = {
  taskDensityPercent: 84,
  taskDensityDelta: "+12% / 24H",
  memoryUsed: "1.2GB",
  memoryLimit: "2.0GB",
  memoryUsedRatio: 0.6,
  syncLatencyMs: 14,
  syncLatencyAvgMs: 22,
  latencyBars: [6, 9, 5, 12, 20, 10, 14, 6, 32, 4],
  kernelStatus: "ONLINE",
  uptime: "94:12:04",
  build: "v2.4.1-rc",
};

const initialLogs: SystemLogEntry[] = [
  {
    id: "log-1",
    time: "14:02:11",
    level: "INFO",
    message: "REFRESH_TASKS: SUCCESS [24 ms]",
  },
  {
    id: "log-2",
    time: "14:01:45",
    level: "ACTION",
    message: "TOGGLE_STATUS: ID_0xAF23 -> COMPLETED",
  },
  {
    id: "log-3",
    time: "13:58:22",
    level: "WARN",
    message: "SYNC_TIMEOUT: RETRYING (1/3)",
  },
  {
    id: "log-4",
    time: "13:58:25",
    level: "INFO",
    message: "SYNC_RESOLVED: 4 ITEMS PUSHED",
  },
  {
    id: "log-5",
    time: "13:45:00",
    level: "CRON",
    message: "ARCHIVE_CLEANUP: 12 STALE TASKS PURGED",
  },
];

export function SystemScreen() {
  const [metrics] = useState<SystemMetrics>(initialMetrics);
  const [logs] = useState<SystemLogEntry[]>(initialLogs);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* 1. KERNEL STATUS */}
      <KernelBanner
        status={metrics.kernelStatus}
        uptime={metrics.uptime}
        build={metrics.build}
      />

      {/* 2. TASK DENSITY */}
      <MetricCard
        label="TASK DENSITY"
        icon={<Octicons name="sync" size={15} color={colors.textSecondary} />}
        value={`${metrics.taskDensityPercent}%`}
        subValue={metrics.taskDensityDelta}
      >
        <SegmentedBar
          totalSegments={10}
          filledSegments={Math.round(metrics.taskDensityPercent / 10)}
        />
      </MetricCard>

      {/* 3. MEMORY ALLOCATION */}
      <MetricCard
        label="MEMORY ALLOCATION"
        icon={<Octicons name="cpu" size={15} color={colors.textSecondary} />}
        value={metrics.memoryUsed}
        subValue={`LIMIT: ${metrics.memoryLimit}`}
      >
        <SegmentedBar
          totalSegments={10}
          filledSegments={Math.round(metrics.memoryUsedRatio * 10)}
        />
      </MetricCard>

      {/* 4. SYNC LATENCY */}
      <MetricCard
        label="SYNC LATENCY"
        icon={
          <MaterialCommunityIcons
            name="arrow-collapse-down"
            size={16}
            color={colors.textSecondary}
          />
        }
        value={`${metrics.syncLatencyMs}ms`}
        subValue={`AVG: ${metrics.syncLatencyAvgMs}ms`}
      >
        <LatencyHistogram bars={metrics.latencyBars} />
      </MetricCard>

      {/* 5. SYSTEM LOGS TABLE */}
      <SystemLogsTable logs={logs} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
  },
});
