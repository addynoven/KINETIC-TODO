import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing, typography } from "../../../core/theme";

interface MetricCardProps {
  label: string;
  icon?: React.ReactNode;
  value: string;
  subValue?: string;
  children?: React.ReactNode;
}

export function MetricCard({
  label,
  icon,
  value,
  subValue,
  children,
}: MetricCardProps) {
  return (
    <View style={styles.card}>
      {/* HEADER ROW */}
      <View style={styles.headerRow}>
        <Text style={styles.label}>{label}</Text>
        {icon ? <View style={styles.iconContainer}>{icon}</View> : null}
      </View>

      {/* VALUE ROW */}
      <View style={styles.valueRow}>
        <Text style={styles.valueText}>{value}</Text>
        {subValue ? <Text style={styles.subValueText}>{subValue}</Text> : null}
      </View>

      {/* CUSTOM VISUAL CONTENT */}
      {children}
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
    marginBottom: spacing.md,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.xs,
  },
  label: {
    fontFamily: typography.mono,
    fontSize: 11,
    fontWeight: "700",
    color: colors.textSecondary,
    letterSpacing: 1,
  },
  iconContainer: {
    opacity: 0.8,
  },
  valueRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  valueText: {
    fontFamily: typography.mono,
    fontSize: 32,
    fontWeight: "900",
    color: colors.text,
    letterSpacing: 0.5,
  },
  subValueText: {
    fontFamily: typography.mono,
    fontSize: 11,
    fontWeight: "700",
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
});
