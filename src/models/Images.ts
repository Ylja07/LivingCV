export interface IImage {
    id: string;
    altText: string;
    file: string;
    eventId: string; // FK -> Event.id
  }
  