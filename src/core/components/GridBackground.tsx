import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../theme";

const GRID_SIZE = 32;

export function GridBackground({ children }: { children?: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <View style={styles.gridOverlay} pointerEvents="none">
        {Array.from({ length: 30 }).map((_, i) => (
          <View
            key={`h-${i}`}
            style={[styles.horizontalLine, { top: i * GRID_SIZE }]}
          />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <View
            key={`v-${i}`}
            style={[styles.verticalLine, { left: i * GRID_SIZE }]}
          />
        ))}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    position: "relative",
  },
  gridOverlay: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
    opacity: 0.7,
  },
  horizontalLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: colors.gridLine,
  },
  verticalLine: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: colors.gridLine,
  },
});
