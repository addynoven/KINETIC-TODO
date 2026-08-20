import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ArchiveRecord } from "../models/archive.types";
import { colors, radius, spacing, typography } from "../../../core/theme";

interface ArchiveItemProps {
  record: ArchiveRecord;
}

export function ArchiveItem({ record }: ArchiveItemProps) {
  const isVaulted = record.status === "VAULTED";

  return (
    <View style={styles.card}>
      {/* HEADER METADATA */}
      <View style={styles.metaRow}>
        <Text style={styles.hexId}>{record.hexId}</Text>
        <Text style={styles.timestamp}>{record.timestamp}</Text>
      </View>

      {/* RECORD TITLE */}
      <Text style={styles.title}>{record.title}</Text>

      {/* STATUS BADGE */}
      <View style={styles.badgeRow}>
        <View
          style={[
            styles.badge,
            isVaulted ? styles.badgeVaulted : styles.badgeArchived,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              isVaulted ? styles.badgeTextVaulted : styles.badgeTextArchived,
            ]}
          >
            {record.status}
          </Text>
        </View>
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
    marginBottom: spacing.md,
  },
  metaRow: {
    marginBottom: spacing.xs,
  },
  hexId: {
    fontFamily: typography.mono,
    fontSize: 11,
    color: colors.textMuted,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  timestamp: {
    fontFamily: typography.mono,
    fontSize: 11,
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
  title: {
    fontFamily: typography.mono,
    fontSize: 14,
    color: colors.text,
    letterSpacing: 0.2,
    marginVertical: spacing.xs,
    lineHeight: 20,
  },
  badgeRow: {
    alignItems: "flex-end",
    marginTop: spacing.xs,
  },
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: radius.xs,
  },
  badgeArchived: {
    backgroundColor: colors.tagDark,
    borderWidth: 1,
    borderColor: colors.border,
  },
  badgeVaulted: {
    backgroundColor: colors.tagLight,
  },
  badgeText: {
    fontFamily: typography.mono,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  badgeTextArchived: {
    color: colors.tagDarkText,
  },
  badgeTextVaulted: {
    color: colors.tagLightText,
  },
});
