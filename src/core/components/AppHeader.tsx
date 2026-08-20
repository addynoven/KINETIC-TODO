import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { colors, spacing, typography } from "../theme";

interface AppHeaderProps {
  showPrefix?: boolean;
}

export function AppHeader({ showPrefix = false }: AppHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        {showPrefix ? (
          <Text style={styles.prefix}>terminal </Text>
        ) : (
          <View style={styles.terminalIconBox}>
            <MaterialCommunityIcons
              name="code-tags"
              size={18}
              color={colors.text}
            />
          </View>
        )}
        <Text style={styles.title}>KINETIC_TODO</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.actionButton}
        accessibilityRole="button"
        accessibilityLabel="Options"
      >
        <Octicons name="sliders" size={20} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderSubtle,
    backgroundColor: colors.background,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  prefix: {
    fontFamily: typography.mono,
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: "400",
  },
  terminalIconBox: {
    marginRight: spacing.xs,
  },
  title: {
    fontFamily: typography.mono,
    fontSize: 18,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: 0.5,
  },
  actionButton: {
    padding: spacing.xs,
  },
});
