export interface measurmentEntryType {
  date: string;
  parts: {
    name: string;
    value: number;
  }[];
}
