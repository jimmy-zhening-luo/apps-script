function getUpcoming(
  calendar: GoogleAppsScript.Calendar.Calendar,
  keywords: string[],
  lookForward = 7,
) {
  const now = new Date,
  window = {
    start: now,
    end: new Date(
      new Date().setMonth(
        now.getMonth() + lookForward,
      ),
    ),
  };

  return [
    ...new Map<string, GoogleAppsScript.Calendar.CalendarEvent>(
      keywords
        .map(
          keyword => calendar
            .getEvents(
              window.start,
              window.end,
              {
                search: keyword,
              },
            ),
        )
        .flat()
        .map(event => [uuid(event), event]),
    )
      .values(),
  ];
}
