export interface Event {
    id: string;
    date: Date; // Timestamp
    title: string;
    body: string;
    timelineId: string; // FK -> Timeline.id
  }
  