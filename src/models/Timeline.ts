export interface Timeline {
    timeline: {
      years: {
        year: string;
        months: {
          [month: string]: {
            steps?: { title: string; body: string }[];
          };
        };
      }[];
    };
  }
  