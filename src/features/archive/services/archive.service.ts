import { ArchiveRecord } from "../models/archive.types";

const initialArchiveRecords: ArchiveRecord[] = [
  {
    id: "arch-1",
    hexId: "0x8F2A1",
    timestamp: "T-04:12:00",
    title: "Compile kernel dependencies",
    status: "ARCHIVED",
  },
  {
    id: "arch-2",
    hexId: "0x3B9C4",
    timestamp: "T-18:45:30",
    title: "Synchronize orbital telemetry data",
    status: "VAULTED",
  },
  {
    id: "arch-3",
    hexId: "0x1A4D7",
    timestamp: "T-42:10:05",
    title: "Purge redundant cache nodes",
    status: "ARCHIVED",
  },
  {
    id: "arch-4",
    hexId: "0x9F8E2",
    timestamp: "T-89:00:12",
    title: "Initialize backup protocol Omega",
    status: "VAULTED",
  },
];

const historicalRecords: ArchiveRecord[] = [
  {
    id: "arch-5",
    hexId: "0x5C2E8",
    timestamp: "T-124:30:15",
    title: "Defragment quantum state cache",
    status: "VAULTED",
  },
  {
    id: "arch-6",
    hexId: "0x7D1B9",
    timestamp: "T-186:04:42",
    title: "Calibrate neural subspace bus",
    status: "ARCHIVED",
  },
];

export async function getArchiveRecords(): Promise<ArchiveRecord[]> {
  return [...initialArchiveRecords];
}

export async function loadMoreHistoricalRecords(): Promise<ArchiveRecord[]> {
  return [...historicalRecords];
}
