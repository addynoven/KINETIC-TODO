# ⬡ KINETIC TODO
> Monospace terminal-styled task manager with runtime telemetry for Android.

<p align="center">
  <img src="./assets/icon.png" width="120" height="120" alt="Kinetic Todo Logo" />
</p>

<p align="center">
  <a href="https://github.com/addynoven/KINETIC-TODO/releases/latest">
    <img src="https://img.shields.io/github/v/release/addynoven/KINETIC-TODO?style=for-the-badge&color=FFFFFF&labelColor=0B0C0E&logo=github" alt="Latest Release" />
  </a>
  <a href="https://github.com/addynoven/KINETIC-TODO/releases">
    <img src="https://img.shields.io/github/downloads/addynoven/KINETIC-TODO/total?style=for-the-badge&color=22C55E&labelColor=0B0C0E&logo=android&logoColor=white" alt="Total Downloads" />
  </a>
  <img src="https://img.shields.io/badge/EXPO-SDK_54-0B0C0E?style=for-the-badge&logo=expo&logoColor=white" alt="Expo SDK 54" />
  <img src="https://img.shields.io/badge/REACT_NATIVE-0.81.5-0B0C0E?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/TYPESCRIPT-5.9-0B0C0E?style=for-the-badge&logo=typescript&logoColor=3178C6" alt="TypeScript" />
</p>

---

## 📥 Direct APK Downloads

Pre-built standalone Android packages compiled via GitHub Actions:

| Build Target | Size | Recommended For | Link |
| :--- | :---: | :--- | :--- |
| **`app-arm64-v8a-release.apk`** | **~11 MB** | Modern Android Devices (64-bit ARM) | [⬇️ Download ARM64](https://github.com/addynoven/KINETIC-TODO/releases/latest/download/app-arm64-v8a-release.apk) |
| **`app-universal-release.apk`** | **~24 MB** | Emulators & All Chipsets | [⬇️ Download Universal](https://github.com/addynoven/KINETIC-TODO/releases/latest/download/app-universal-release.apk) |

---

## 🖥️ Screen Previews

<p align="center">
  <img src="./screen/image.png" width="31%" alt="Tasks Screen" />
  <img src="./screen/image%20copy.png" width="31%" alt="Archive Screen" />
  <img src="./screen/image%20copy%202.png" width="31%" alt="System Screen" />
</p>

---

## ⚡ Key Highlights

* **Terminal-Inspired Aesthetics**: High-contrast dark theme, monospace typography, grid background, and prompt-style inputs.
* **Archived Records with Hash IDs**: Completed items store historical timestamps (`T-04:12:00`) and hex identifier tags (`0x8F2A1`) for quick audit searching.
* **System Telemetry Screen**: Real-time diagnostic tab monitoring JS heap allocation, simulated roundtrip latency histogram, and categorized application log streams (`INFO`, `WARN`, `ACTION`).
* **Optimized Binary Size**: Standalone production build compressed to ~11 MB utilizing Hermes engine bytecodes and React Native New Architecture.

---

## 🏗️ Architecture

Organized using a **Feature-Driven Modular Architecture** (MVVM) to keep UI components, business logic, and data layer decoupled:

```
src/
├── core/                        # Global foundational systems
│   ├── components/              # Shared UI (GridBackground, Navigation)
│   ├── errors/                  # ErrorBoundary & logging pipelines
│   └── theme/                   # Palette tokens & typography
│
└── features/                    # Feature modules (tasks, archive, system)
    └── [feature]/
        ├── components/          # Presentational UI elements
        ├── hooks/               # State machine & lifecycle hooks
        ├── services/            # Pure business logic & validations
        ├── repositories/        # Storage abstraction layer
        └── [feature]_screen.tsx # Top-level screen container
```

---

## 🚀 Development Setup

### 1. Install Dependencies
```bash
bun install
# or: npm install
```

### 2. Run Local Dev Server
```bash
bun start
# Press 'a' to open Android emulator
```

### 3. Build Standalone Release APK
```bash
bun run build:apk
```

*Output artifact:* `android/app/build/outputs/apk/release/app-arm64-v8a-release.apk`

---

## 🛠️ Tech Stack

* **Runtime**: React Native 0.81.5 (Hermes JS Engine + New Architecture)
* **Framework**: Expo SDK 54
* **Language**: TypeScript 5.9 (Strict Type Checking)
* **Icons**: `@expo/vector-icons`
* **CI/CD**: GitHub Actions workflow for automated tagging and APK release builds
