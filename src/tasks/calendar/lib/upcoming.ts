export function uuid(event: GoogleAppsScript.Calendar.CalendarEvent) {
  function time(date: GoogleAppsScript.Base.Date) {
    return String(date.valueOf());
  }

  return event
    .getId()
    .concat(
      "#",
      ...event.isAllDayEvent()
        ? [
            "ALL_DAY#",
            time(event.getAllDayStartDate()),
          ]
        : [time(event.getStartTime())],
    );
}
export function getUpcomingEvent(
  calendar: GoogleAppsScript.Calendar.Calendar,
  lookahead = 7,
) {
  return calendar
    .getEvents(
      new Date,
      new Date(
        new Date().setMonth(
          new Date().getMonth() + lookahead,
        ),
      ),
    )
    .map(
      event => [
        uuid(event),
        {
          event,
          title: event
            .getTitle()
            .toLocaleLowerCase(),

        },
      ] as const,
    );
}
