function getUUID(event: GoogleAppsScript.Calendar.CalendarEvent) {
  function timestring(date: GoogleAppsScript.Base.Date) {
    return String(date.valueOf());
  }

  return [
    event.getId(),
    ...event.isAllDayEvent()
      ? ["ALL_DAY", timestring(event.getAllDayStartDate())]
      : [timestring(event.getStartTime())],
  ].join("#");
}
