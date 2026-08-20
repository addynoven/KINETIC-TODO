import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing, typography } from "../../../core/theme";

interface KernelBannerProps {
  status?: string;
  uptime?: string;
  build?: string;
}

export function KernelBanner({
  status = "ONLINE",
  uptime = "94:12:04",
  build = "v2.4.1-rc",
}: KernelBannerProps) {
  return (
    <View style={styles.card}>
      <View style={styles.statusRow}>
        <View style={styles.statusSquare} />
        <Text style={styles.statusText}>KERNEL STATUS: {status}</Text>
      </View>

      <Text style={styles.metaText}>
        UPTIME: {uptime} | BUILD: {build}
      </Text>
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
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  statusSquare: {
    width: 7,
    height: 7,
    backgroundColor: colors.text,
    marginRight: spacing.xs,
  },
  statusText: {
    fontFamily: typography.mono,
    fontSize: 12,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: 0.8,
  },
  metaText: {
    fontFamily: typography.mono,
    fontSize: 11,
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
});
