import { StyleSheet, Text, View } from "react-native";

import { colors, radius, spacing } from "../../core/theme";

export function StarterScreen() {
  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>Starter</Text>
      <Text style={styles.title}>Your app starts here</Text>
      <Text style={styles.text}>
        This is a clean template for building your next product. Replace this
        screen with your own features and flows.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: spacing.xs,
    textTransform: "uppercase",
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "700",
    marginBottom: spacing.sm,
  },
  text: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
  },
});
