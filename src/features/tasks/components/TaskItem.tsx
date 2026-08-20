import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Task } from "../models/tasks.types";
import { colors, radius, spacing, typography } from "../../../core/theme";

interface TaskItemProps {
  task: Task;
  isHighlighted?: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({
  task,
  isHighlighted = false,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <View
      style={[
        styles.card,
        isHighlighted && styles.cardHighlighted,
        task.isDone && styles.cardDone,
      ]}
    >
      {/* CHECKBOX */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onToggle(task.id)}
        style={[
          styles.checkbox,
          task.isDone ? styles.checkboxChecked : styles.checkboxUnchecked,
        ]}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: task.isDone }}
        accessibilityLabel={`Mark ${task.title} as ${task.isDone ? "incomplete" : "complete"}`}
      >
        {task.isDone ? (
          <Octicons name="check" size={14} color={colors.textSecondary} />
        ) : null}
      </TouchableOpacity>

      {/* TITLE */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onToggle(task.id)}
        style={styles.titleContainer}
      >
        <Text
          style={[
            styles.titleText,
            task.isDone && styles.titleTextDone,
          ]}
        >
          {task.title.toUpperCase()}
        </Text>
      </TouchableOpacity>

      {/* DELETE BUTTON */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onDelete(task.id)}
        style={styles.deleteButton}
        accessibilityRole="button"
        accessibilityLabel={`Delete ${task.title}`}
      >
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          color={task.isDone ? colors.textMuted : colors.textSecondary}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radius.xs,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
    marginBottom: spacing.md,
  },
  cardHighlighted: {
    borderColor: colors.cardBorderHighlight,
    borderWidth: 1.5,
  },
  cardDone: {
    opacity: 0.65,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: radius.xs,
    justifyContent: "center",
    alignItems: "center",
    marginRight: spacing.md,
  },
  checkboxUnchecked: {
    borderWidth: 1.5,
    borderColor: colors.textSecondary,
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    borderWidth: 1.5,
    borderColor: colors.textMuted,
    backgroundColor: colors.tagDark,
  },
  titleContainer: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  titleText: {
    fontFamily: typography.mono,
    fontSize: 15,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: 0.5,
    lineHeight: 20,
  },
  titleTextDone: {
    color: colors.textMuted,
    textDecorationLine: "line-through",
  },
  deleteButton: {
    padding: spacing.xs,
    justifyContent: "center",
    alignItems: "center",
  },
});
