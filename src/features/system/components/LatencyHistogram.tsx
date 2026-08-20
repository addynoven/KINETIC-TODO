import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../../core/theme";

interface LatencyHistogramProps {
  bars?: number[];
  maxHeight?: number;
}

const DEFAULT_BARS = [6, 9, 5, 12, 20, 10, 14, 6, 32, 4];

export function LatencyHistogram({
  bars = DEFAULT_BARS,
  maxHeight = 36,
}: LatencyHistogramProps) {
  const maxVal = Math.max(...bars, 32);

  return (
    <View style={[styles.container, { height: maxHeight }]}>
      {bars.map((val, index) => {
        const heightPercent = Math.max(8, (val / maxVal) * 100);
        const isPeak = val === maxVal;

        return (
          <View key={`hist-${index}`} style={styles.barTrack}>
            <View
              style={[
                styles.barFill,
                { height: `${heightPercent}%` },
                isPeak ? styles.barPeak : styles.barNormal,
              ]}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
    width: "100%",
    marginTop: 12,
  },
  barTrack: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  barFill: {
    width: "100%",
    borderRadius: 1,
  },
  barNormal: {
    backgroundColor: colors.tagDarkText,
    opacity: 0.6,
  },
  barPeak: {
    backgroundColor: colors.primary,
  },
});
