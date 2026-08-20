import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useTask from "./hooks/use_task";
import { TaskHeaderStats, TaskInput, TaskItem } from "./components";
import { colors, spacing, typography } from "../../core/theme";

export function TasksScreen() {
  const {
    tasks,
    input,
    setInput,
    error,
    loading,
    createTask,
    removeTask,
    toggleTaskStatus,
    clearCompletedTasks,
    countTasks,
    countDoneTasks,
  } = useTask();

  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const handleAddTask = async () => {
    if (!input.trim()) return;
    const newTask = await createTask({ title: input.trim() });
    if (newTask) {
      setHighlightedId(newTask.id);
    }
  };

  return (
    <View style={styles.container}>
      {/* 1. ARCHITECTURE & OBJECTIVES HEADER */}
      <TaskHeaderStats
        completedCount={countDoneTasks}
        totalCount={countTasks}
      />

      {/* 2. OBJECTIVE INPUT */}
      <TaskInput
        value={input}
        onChangeText={setInput}
        onSubmit={handleAddTask}
        error={error}
        loading={loading}
      />

      {/* 3. OBJECTIVES LIST */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TaskItem
            task={item}
            isHighlighted={
              highlightedId === item.id || (!highlightedId && index === 0)
            }
            onToggle={toggleTaskStatus}
            onDelete={removeTask}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>NO ACTIVE OBJECTIVES</Text>
          </View>
        }
      />

      {/* 4. FOOTER: CLEAR COMPLETED */}
      {countDoneTasks > 0 ? (
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={clearCompletedTasks}
            style={styles.clearButton}
          >
            <MaterialCommunityIcons
              name="menu"
              size={16}
              color={colors.textSecondary}
            />
            <Text style={styles.clearButtonText}>CLEAR ALL COMPLETED</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  listContent: {
    paddingBottom: spacing.lg,
  },
  emptyContainer: {
    paddingVertical: spacing.xxl,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontFamily: typography.mono,
    fontSize: 12,
    color: colors.textMuted,
    letterSpacing: 1,
  },
  footer: {
    paddingVertical: spacing.md,
    alignItems: "flex-end",
  },
  clearButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.xs,
  },
  clearButtonText: {
    fontFamily: typography.mono,
    fontSize: 11,
    fontWeight: "700",
    color: colors.textSecondary,
    letterSpacing: 0.8,
  },
});
