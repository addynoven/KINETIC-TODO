import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { colors, spacing, typography } from "../theme";

export type NavTab = "tasks" | "archive" | "system";

interface BottomNavProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export function BottomNav({ currentTab, onSelectTab }: BottomNavProps) {
  return (
    <View style={styles.navBar}>
      {/* TASKS TAB */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onSelectTab("tasks")}
        style={[styles.tabItem, currentTab === "tasks" && styles.tabItemActive]}
      >
        <MaterialCommunityIcons
          name="format-list-checks"
          size={20}
          color={currentTab === "tasks" ? colors.tagLightText : colors.textSecondary}
        />
        <Text
          style={[
            styles.tabLabel,
            currentTab === "tasks" && styles.tabLabelActive,
          ]}
        >
          TASKS
        </Text>
      </TouchableOpacity>

      {/* ARCHIVE TAB */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onSelectTab("archive")}
        style={[
          styles.tabItem,
          currentTab === "archive" && styles.tabItemActive,
        ]}
      >
        <MaterialCommunityIcons
          name="archive-outline"
          size={20}
          color={currentTab === "archive" ? colors.tagLightText : colors.textSecondary}
        />
        <Text
          style={[
            styles.tabLabel,
            currentTab === "archive" && styles.tabLabelActive,
          ]}
        >
          ARCHIVE
        </Text>
      </TouchableOpacity>

      {/* SYSTEM TAB */}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onSelectTab("system")}
        style={[
          styles.tabItem,
          currentTab === "system" && styles.tabItemActive,
        ]}
      >
        <Octicons
          name="cpu"
          size={20}
          color={currentTab === "system" ? colors.tagLightText : colors.textSecondary}
        />
        <Text
          style={[
            styles.tabLabel,
            currentTab === "system" && styles.tabLabelActive,
          ]}
        >
          SYSTEM
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.borderSubtle,
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 64,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.xs,
    backgroundColor: "transparent",
  },
  tabItemActive: {
    backgroundColor: colors.primary,
  },
  tabLabel: {
    fontFamily: typography.mono,
    fontSize: 11,
    fontWeight: "700",
    color: colors.textSecondary,
    marginTop: 4,
    letterSpacing: 1,
  },
  tabLabelActive: {
    color: colors.primaryDark,
    fontWeight: "900",
  },
});
