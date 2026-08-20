import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SystemLogEntry } from "../models/system.types";
import { colors, radius, spacing, typography } from "../../../core/theme";

interface SystemLogsTableProps {
  logs: SystemLogEntry[];
  onExport?: () => void;
}

export function SystemLogsTable({ logs, onExport }: SystemLogsTableProps) {
  return (
    <View style={styles.card}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <MaterialCommunityIcons
            name="code-tags"
            size={16}
            color={colors.text}
            style={styles.headerIcon}
          />
          <Text style={styles.title}>SYSTEM LOGS</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onExport}
          style={styles.exportButton}
          accessibilityRole="button"
          accessibilityLabel="Export log file"
        >
          <Text style={styles.exportText}>EXPORT .LOG</Text>
        </TouchableOpacity>
      </View>

      {/* LOG ROWS */}
      <View style={styles.logsList}>
        {logs.map((log) => {
          const isWarn = log.level === "WARN";

          return (
            <View key={log.id} style={styles.logRow}>
              {/* TIME */}
              <Text style={styles.timeText}>{log.time}</Text>

              {/* LEVEL */}
              <Text
                style={[
                  styles.levelText,
                  isWarn ? styles.levelWarn : styles.levelNormal,
                ]}
              >
                {log.level}
              </Text>

              {/* MESSAGE */}
              <Text
                style={[
                  styles.messageText,
                  isWarn ? styles.messageWarn : styles.messageNormal,
                ]}
              >
                {log.message}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.xs,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    marginBottom: spacing.xxl,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderSubtle,
    marginBottom: spacing.sm,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    marginRight: spacing.xs,
  },
  title: {
    fontFamily: typography.mono,
    fontSize: 12,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: 0.8,
  },
  exportButton: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.xs,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    backgroundColor: colors.tagDark,
  },
  exportText: {
    fontFamily: typography.mono,
    fontSize: 10,
    fontWeight: "700",
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
  logsList: {
    gap: spacing.sm,
  },
  logRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  timeText: {
    fontFamily: typography.mono,
    fontSize: 10,
    color: colors.textMuted,
    width: 62,
  },
  levelText: {
    fontFamily: typography.mono,
    fontSize: 10,
    fontWeight: "700",
    width: 58,
  },
  levelNormal: {
    color: colors.textSecondary,
  },
  levelWarn: {
    color: colors.warn,
  },
  messageText: {
    flex: 1,
    fontFamily: typography.mono,
    fontSize: 10,
    letterSpacing: 0.2,
    lineHeight: 14,
  },
  messageNormal: {
    color: colors.text,
  },
  messageWarn: {
    color: colors.warn,
  },
});
