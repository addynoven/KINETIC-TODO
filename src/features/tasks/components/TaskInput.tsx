import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, radius, spacing, typography } from "../../../core/theme";

export interface TaskInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void | Promise<void>;
  error?: string | null;
  loading?: boolean;
}

export function TaskInput({
  value,
  onChangeText,
  onSubmit,
  error,
  loading = false,
}: TaskInputProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputCard}>
        <Text style={styles.prompt}>{">"}</Text>

        <TextInput
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmit}
          placeholder="New objective..."
          placeholderTextColor={colors.textMuted}
          style={styles.textInput}
          returnKeyType="done"
          autoCapitalize="characters"
          autoCorrect={false}
          editable={!loading}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onSubmit}
          disabled={loading || !value.trim()}
          style={[
            styles.addButton,
            (!value.trim() || loading) && styles.addButtonDisabled,
          ]}
          accessibilityRole="button"
          accessibilityLabel="Add Objective"
        >
          <Text style={styles.addButtonText}>+ ADD</Text>
        </TouchableOpacity>
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.lg,
  },
  inputCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: radius.xs,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    paddingLeft: spacing.md,
    paddingRight: spacing.xs,
    paddingVertical: spacing.xs,
    minHeight: 52,
  },
  prompt: {
    fontFamily: typography.mono,
    fontSize: 14,
    fontWeight: "700",
    color: colors.textSecondary,
    marginRight: spacing.xs,
  },
  textInput: {
    flex: 1,
    fontFamily: typography.mono,
    fontSize: 14,
    color: colors.text,
    paddingVertical: spacing.xs,
  },
  addButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs + 2,
    borderRadius: radius.xs,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonDisabled: {
    opacity: 0.5,
  },
  addButtonText: {
    fontFamily: typography.mono,
    fontSize: 12,
    fontWeight: "900",
    color: colors.primaryDark,
    letterSpacing: 0.5,
  },
  errorText: {
    fontFamily: typography.mono,
    fontSize: 11,
    color: colors.warn,
    marginTop: spacing.xs,
    marginLeft: spacing.xs,
  },
});
