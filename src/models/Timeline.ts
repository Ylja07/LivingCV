export interface ITimeline {
    id: string;
    title: string;
    description: string;
    tags: string;
    userId: string; // FK -> User.id
    displayModeId: string; // FK -> DisplayMode.id
  }
  