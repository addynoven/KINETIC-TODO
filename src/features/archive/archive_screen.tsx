import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { ArchiveRecord } from "./models/archive.types";
import {
  getArchiveRecords,
  loadMoreHistoricalRecords,
} from "./services/archive.service";
import { ArchiveSearch } from "./components/ArchiveSearch";
import { ArchiveItem } from "./components/ArchiveItem";
import { colors, radius, spacing, typography } from "../../core/theme";

export function ArchiveScreen() {
  const [records, setRecords] = useState<ArchiveRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasLoadedMore, setHasLoadedMore] = useState(false);

  useEffect(() => {
    void getArchiveRecords().then(setRecords);
  }, []);

  const handleLoadMore = async () => {
    if (loadingMore || hasLoadedMore) return;
    setLoadingMore(true);
    const extra = await loadMoreHistoricalRecords();
    setRecords((prev) => [...prev, ...extra]);
    setLoadingMore(false);
    setHasLoadedMore(true);
  };

  const filteredRecords = records.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hexId.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      {/* 1. ARCHIVE QUERY SEARCH */}
      <ArchiveSearch
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* 2. ARCHIVE RECORDS LIST */}
      <FlatList
        data={filteredRecords}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ArchiveItem record={item} />}
        ListFooterComponent={
          !hasLoadedMore ? (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleLoadMore}
              disabled={loadingMore}
              style={styles.loadMoreButton}
              accessibilityRole="button"
              accessibilityLabel="Load Historical Data"
            >
              <Octicons
                name="chevron-down"
                size={14}
                color={colors.textSecondary}
                style={styles.loadMoreIcon}
              />
              <Text style={styles.loadMoreText}>
                {loadingMore ? "LOADING DATA..." : "LOAD HISTORICAL DATA"}
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.endOfArchive}>
              <Text style={styles.endOfArchiveText}>
                --- ALL HISTORICAL NODES LOADED ---
              </Text>
            </View>
          )
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>NO ARCHIVED NODES FOUND</Text>
          </View>
        }
      />
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
    paddingBottom: spacing.xxl,
  },
  loadMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.card,
    borderRadius: radius.xs,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    paddingVertical: spacing.md,
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
  },
  loadMoreIcon: {
    marginRight: spacing.xs,
  },
  loadMoreText: {
    fontFamily: typography.mono,
    fontSize: 11,
    fontWeight: "700",
    color: colors.textSecondary,
    letterSpacing: 1,
  },
  endOfArchive: {
    alignItems: "center",
    paddingVertical: spacing.md,
  },
  endOfArchiveText: {
    fontFamily: typography.mono,
    fontSize: 10,
    color: colors.textMuted,
    letterSpacing: 1,
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
});
