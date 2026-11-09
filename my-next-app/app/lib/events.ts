export interface BrewEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  dayName: string;
  time: string;
}

export const upcomingEvents: BrewEvent[] = [
  {
    id: "open-mic-nov14",
    title: "Open Mic Night",
    description:
      "Pull up a stool. Original songs, spoken word, and the occasional debut set. Sign-up sheet at the counter from 5pm.",
    date: "Nov 14",
    dayName: "Friday",
    time: "7:00 pm",
  },
  {
    id: "tasting-nov15",
    title: "Coffee Tasting Session",
    description:
      "Marcus walks you through three single-origin roasts side by side — processing methods, farm stories, and the difference you can taste. Free, ten seats.",
    date: "Nov 15",
    dayName: "Saturday",
    time: "10:00 am",
  },
  {
    id: "open-mic-nov21",
    title: "Open Mic Night",
    description:
      "Same warmth, fresh faces. Every Friday we open the floor. Come for the coffee, stay for whoever's brave enough to go first.",
    date: "Nov 21",
    dayName: "Friday",
    time: "7:00 pm",
  },
];
