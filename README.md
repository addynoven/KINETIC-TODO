# ⬡ KINETIC TODO

> **Cybernetic Objective Engine & Modular Telemetry Task Suite for Android & iOS**

<p align="center">
  <img src="./assets/adaptive-icon.png" width="140" height="140" alt="Kinetic Todo Logo" />
</p>

<p align="center">
  <code>KERNEL: ONLINE</code> • 
  <code>ARCH: CLEAN ARCHITECTURE • MVVM</code> • 
  <code>EXPO SDK: 54.0</code> • 
  <code>REACT NATIVE: 0.81.5</code>
</p>

---

## 🖥️ User Interface & Aesthetic

Built with a high-contrast dark terminal interface, monospace typography, segmented telemetry gauges, and a matrix background grid.

<p align="center">
  <img src="./screen/image.png" width="30%" alt="Tasks Screen" />
  <img src="./screen/image copy.png" width="30%" alt="Archive Screen" />
  <img src="./screen/image copy 2.png" width="30%" alt="System Screen" />
</p>

### 1. `TASKS` — Objective Execution Hub

- **Architecture Overview**: Dynamic header monitoring task completion metrics in real time.
- **Terminal Input**: Command prompt style (`> New objective...`) with rapid `+ ADD` dispatch.
- **Objective Cards**: High-contrast active focus outlines, completion strikethrough, and single-tap purge.
- **Batch Processing**: Single-touch `CLEAR ALL COMPLETED` action pipeline.

### 2. `ARCHIVE` — Vaulted Data Store

- **Query Engine**: Real-time filtering by task title or hex node address.
- **Hex ID & Delta Timestamps**: Granular provenance tracing (e.g. `0x8F2A1`, `T-04:12:00`).
- **Classification Badges**: Differentiates between standard `ARCHIVED` and high-priority `VAULTED` records.
- **Historical Node Loading**: Expandable data streams for deep historical audits.

### 3. `SYSTEM` — Real-Time Diagnostic Dashboard

- **Kernel Status Banner**: Uptime tracking and semantic build versioning.
- **Task Density Monitor**: 10-stage segmented progress meter with 24-hour delta tracking.
- **Memory Allocation**: Real-time memory footprint visualization against system ceiling limits.
- **Sync Latency Histogram**: Multi-bar telemetry chart measuring roundtrip packet latency.
- **Structured System Logs**: Color-coded diagnostic event log (`INFO`, `ACTION`, `WARN`, `CRON`) with log export.

---

## 🏗️ Architecture & Philosophy

```
src/
├── core/                        # Global foundational systems
│   ├── components/              # GridBackground, AppHeader, BottomNav
│   ├── errors/                  # ErrorBoundary, structured error pipeline
│   └── theme/                   # Terminal color palette, spacing, typography
│
└── features/                    # Feature-Driven Modular Architecture
    ├── tasks/                   # Objective Management Feature
    │   ├── components/          # TaskInput, TaskItem, TaskHeaderStats
    │   ├── hooks/               # useTask, task_action_pipeline
    │   ├── models/              # tasks.types.ts
    │   ├── repositories/        # task.repository.ts
    │   ├── services/            # task.service.ts
    │   ├── validation/          # task.validator.ts
    │   └── tasks_screen.tsx
    │
    ├── archive/                 # Data Vault & Query Feature
    │   ├── components/          # ArchiveSearch, ArchiveItem
    │   ├── models/              # archive.types.ts
    │   ├── services/            # archive.service.ts
    │   └── archive_screen.tsx
    │
    └── system/                  # Telemetry & Diagnostics Feature
        ├── components/          # MetricCard, SegmentedBar, LatencyHistogram, SystemLogs
        ├── models/              # system.types.ts
        └── system_screen.tsx
```

---

## 🚀 Quick Start & Development

### 1. Install Dependencies

```bash
bun install
# or: npm install
```

### 2. Start Development Server

```bash
bun start
# or: npx expo start
```

### 3. Build Optimized Android APK Locally

```bash
# Generate native Android project
npx expo prebuild --platform android --clean

# Compile release APKs with ABI splitting & R8 minification
cd android && ./gradlew assembleRelease
```

Output APKs are located at:
`android/app/build/outputs/apk/release/app-arm64-v8a-release.apk` (~11 MB)

---

## 🛠️ Tech Stack

- **Runtime**: [React Native 0.81.5](https://reactnative.dev/) with Hermes JS Engine & New Architecture
- **Framework**: [Expo SDK 54](https://docs.expo.dev/)
- **Icons**: `@expo/vector-icons` (Octicons, MaterialCommunityIcons)
- **Safe Area**: `react-native-safe-area-context`
- **Compiler**: TypeScript 5.9 (Strict Type Safety)

---

<p align="center">
  <sub>Engineered with Clean Architecture & Modular MVVM Principles.</sub>
</p>
