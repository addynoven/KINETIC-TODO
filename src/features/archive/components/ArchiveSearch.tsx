import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { colors, radius, spacing, typography } from "../../../core/theme";

interface ArchiveSearchProps {
  value: string;
  onChangeText: (text: string) => void;
  onToggleFilter?: () => void;
}

export function ArchiveSearch({
  value,
  onChangeText,
  onToggleFilter,
}: ArchiveSearchProps) {
  return (
    <View style={styles.container}>
      <Octicons
        name="search"
        size={16}
        color={colors.textSecondary}
        style={styles.searchIcon}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Query Archive..."
        placeholderTextColor={colors.textMuted}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onToggleFilter}
        style={styles.filterButton}
        accessibilityRole="button"
        accessibilityLabel="Filter Archive"
      >
        <MaterialCommunityIcons
          name="filter-variant"
          size={20}
          color={colors.textSecondary}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radius.xs,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    minHeight: 48,
    marginBottom: spacing.lg,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontFamily: typography.mono,
    fontSize: 14,
    color: colors.text,
    paddingVertical: spacing.xs,
  },
  filterButton: {
    padding: spacing.xs,
  },
});
