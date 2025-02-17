import { IImage } from "./Images";

export interface IEvent {
    id: string;
    date: Date; // Timestamp
    title: string;
    body: string;
    images: IImage[];
  }
  