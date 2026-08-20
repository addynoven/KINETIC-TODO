import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../../core/theme";

interface SegmentedBarProps {
  totalSegments?: number;
  filledSegments: number;
}

export function SegmentedBar({
  totalSegments = 10,
  filledSegments,
}: SegmentedBarProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSegments }).map((_, index) => {
        const isFilled = index < filledSegments;
        return (
          <View
            key={`seg-${index}`}
            style={[
              styles.segment,
              isFilled ? styles.segmentFilled : styles.segmentEmpty,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 4,
    width: "100%",
    marginTop: 12,
  },
  segment: {
    flex: 1,
    height: 6,
    borderRadius: 1,
  },
  segmentFilled: {
    backgroundColor: colors.primary,
  },
  segmentEmpty: {
    backgroundColor: colors.tagDark,
  },
});
