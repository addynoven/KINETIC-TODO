import React, {
  useEffect,
  useState,
} from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useTaskStore } from "./store/taskStore";
import {
  TaskHeaderStats,
  TaskInput,
  TaskItem,
} from "./components";

import {
  colors,
  spacing,
  typography,
} from "../../core/theme";

export function TasksScreen() {
  const [input, setInput] = useState("");

  const [
    highlightedId,
    setHighlightedId,
  ] = useState<string | null>(null);

  const tasks = useTaskStore(
    (state) => state.tasks,
  );

  const error = useTaskStore(
    (state) => state.error,
  );

  const initialize = useTaskStore(
    (state) => state.initialize,
  );

  const addTask = useTaskStore(
    (state) => state.addTask,
  );

  const deleteTask = useTaskStore(
    (state) => state.deleteTask,
  );

  const toggleTask = useTaskStore(
    (state) => state.toggleTask,
  );

  const clearCompleted = useTaskStore(
    (state) => state.clearCompleted,
  );

  useEffect(() => {
    initialize();
  }, [initialize]);

  const totalCount = tasks.length;

  const completedCount =
    tasks.filter(
      (task) => task.isDone,
    ).length;

  const handleAddTask = () => {
    const title = input.trim();

    if (!title) {
      return;
    }

    const newTask = addTask({
      title,
    });

    if (newTask) {
      setHighlightedId(
        newTask.id,
      );
      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      <TaskHeaderStats
        completedCount={completedCount}
        totalCount={totalCount}
      />

      <TaskInput
        value={input}
        onChangeText={setInput}
        onSubmit={handleAddTask}
        error={error}
        loading={false}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        contentContainerStyle={
          styles.listContent
        }
        showsVerticalScrollIndicator={false}
        renderItem={({
          item,
          index,
        }) => (
          <TaskItem
            task={item}
            isHighlighted={
              highlightedId === item.id ||
              (!highlightedId &&
                index === 0)
            }
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        )}
        ListEmptyComponent={
          <View
            style={
              styles.emptyContainer
            }
          >
            <Text
              style={styles.emptyText}
            >
              NO ACTIVE OBJECTIVES
            </Text>
          </View>
        }
      />

      {completedCount > 0 ? (
        <View style={styles.footer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={clearCompleted}
            style={
              styles.clearButton
            }
          >
            <MaterialCommunityIcons
              name="menu"
              size={16}
              color={
                colors.textSecondary
              }
            />

            <Text
              style={
                styles.clearButtonText
              }
            >
              CLEAR ALL COMPLETED
            </Text>
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
