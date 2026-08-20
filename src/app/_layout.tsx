import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { AppErrorBoundary } from "../core/errors/ErrorBoundary";
import { colors } from "../core/theme";
import { GridBackground } from "../core/components/GridBackground";
import { AppHeader } from "../core/components/AppHeader";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AppErrorBoundary>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar style="light" backgroundColor={colors.background} />
          <GridBackground>
            <AppHeader showPrefix={true} />
            <Slot />
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
});
