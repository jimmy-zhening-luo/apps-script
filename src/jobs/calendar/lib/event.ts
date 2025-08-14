function getUpcomingEvent(
  calendar: GoogleAppsScript.Calendar.Calendar,
  lookahead = 7,
) {
  return calendar.getEvents(
    new Date,
    new Date(
      new Date().setMonth(
        new Date().getMonth() + lookahead,
      ),
    ),
  );
}

function matchEvent(
  events: GoogleAppsScript.Calendar.CalendarEvent[],
  terms: string[],
) {
  return [
    ...new Map<string, GoogleAppsScript.Calendar.CalendarEvent>(
      terms
        .map(term => term.toLocaleLowerCase())
        .map(
          term => events.filter(
            event => event
              .getTitle()
              .toLocaleLowerCase()
              .includes(term),
          ),
        )
        .flat()
        .map(event => [uuid(event), event]),
    )
      .values(),
  ];
}
