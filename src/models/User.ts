import { ITimeline } from "./Timeline";
import { IDocument } from "./Document";

export interface IUser {
    id: string;
    name: string;
    settings: string;
    timelines: ITimeline[];
    documents: IDocument[];
  }
  