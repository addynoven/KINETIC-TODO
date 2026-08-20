export type ArchiveStatus = "ARCHIVED" | "VAULTED";

export interface ArchiveRecord {
  id: string;
  hexId: string;
  timestamp: string;
  title: string;
  status: ArchiveStatus;
}
