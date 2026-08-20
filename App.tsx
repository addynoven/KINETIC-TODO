import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";

import { AppErrorBoundary } from "./src/core/errors/ErrorBoundary";
import { colors } from "./src/core/theme";
import { AppHeader } from "./src/core/components/AppHeader";
import { BottomNav, NavTab } from "./src/core/components/BottomNav";
import { GridBackground } from "./src/core/components/GridBackground";
import { TasksScreen } from "./src/features/tasks/tasks_screen";
import { ArchiveScreen } from "./src/features/archive/archive_screen";
import { SystemScreen } from "./src/features/system/system_screen";

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>("tasks");

  return (
    <SafeAreaProvider>
      <AppErrorBoundary>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar style="light" backgroundColor={colors.background} />

          <GridBackground>
            {/* TERMINAL HEADER */}
            <AppHeader showPrefix={currentTab === "tasks"} />

            {/* SCREEN CONTENT */}
            <View style={styles.screenContainer}>
              {currentTab === "tasks" ? <TasksScreen /> : null}
              {currentTab === "archive" ? <ArchiveScreen /> : null}
              {currentTab === "system" ? <SystemScreen /> : null}
            </View>

            {/* BOTTOM TAB NAVIGATION */}
            <BottomNav
              currentTab={currentTab}
              onSelectTab={setCurrentTab}
            />
          </GridBackground>
        </SafeAreaView>
      </AppErrorBoundary>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screenContainer: {
    flex: 1,
  },
});
