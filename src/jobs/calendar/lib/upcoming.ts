function getUpcomingEvent(
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
