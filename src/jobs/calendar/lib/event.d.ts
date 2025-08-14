declare interface CalendarEventDetail {
  event: GoogleAppsScript.Calendar.CalendarEvent;
  title: string;
}

declare type CalendarEventHandle = readonly [
  string,
  CalendarEventDetail,
];
