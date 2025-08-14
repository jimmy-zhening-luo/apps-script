function uuid(event: GoogleAppsScript.Calendar.CalendarEvent) {
  function time(date: GoogleAppsScript.Base.Date) {
    return String(date.valueOf());
  }

  return [
    event.getId(),
    ...event.isAllDayEvent()
      ? [
          "ALL_DAY",
          time(event.getAllDayStartDate()),
        ]
      : [time(event.getStartTime())],
  ]
    .join("#");
}
