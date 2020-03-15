export interface PhotoEntry {
  date: string;
  base64: string;
}

export interface PhotoEntriesGroupedByDateType {
  [date: string]: PhotoEntry[];
}
