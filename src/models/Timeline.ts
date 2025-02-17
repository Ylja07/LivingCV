import { TimelineDisplayModeType } from "../enums/timelineDisplayMode";
import { IEvent } from "./Event";

export interface ITimeline {
    id: string;
    title: string;
    description: string;
    tags: string;
    displayMode: TimelineDisplayModeType // (e.g. vertical, horizontal)
    events: IEvent[];
  }
  