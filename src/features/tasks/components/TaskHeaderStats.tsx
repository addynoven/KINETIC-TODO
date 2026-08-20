import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing, typography } from "../../../core/theme";

interface TaskHeaderStatsProps {
  completedCount: number;
  totalCount: number;
}

export function TaskHeaderStats({
  completedCount,
  totalCount,
}: TaskHeaderStatsProps) {
  const formattedCompleted = String(completedCount).padStart(2, "0");
  const formattedTotal = String(totalCount).padStart(2, "0");

  return (
    <View style={styles.card}>
      <View style={styles.leftColumn}>
        <Text style={styles.label}>ARCHITECTURE</Text>
        <Text style={styles.value}>CLEAN ARCHITECTURE • MVVM</Text>
      </View>

      <View style={styles.rightColumn}>
        <Text style={[styles.label, styles.alignRight]}>OBJECTIVES</Text>
        <Text style={[styles.value, styles.alignRight]}>
          {formattedCompleted} / {formattedTotal}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radius.xs,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    marginBottom: spacing.md,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    alignItems: "flex-end",
  },
  label: {
    fontFamily: typography.mono,
    fontSize: 10,
    fontWeight: "700",
    color: colors.textMuted,
    letterSpacing: 1,
    marginBottom: 4,
  },
  value: {
    fontFamily: typography.mono,
    fontSize: 13,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: 0.5,
  },
  alignRight: {
    textAlign: "right",
  },
});
