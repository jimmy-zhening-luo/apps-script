function getEventsUpcoming(
  calendar: GoogleAppsScript.Calendar.Calendar,
  keywords: string[],
  lookForward = 9,
) {
  const now = new Date,
  window = {
    start: now,
    end: new Date(new Date().setMonth(now.getMonth() + lookForward)),
  };

  return keywords
    .map(
      keyword => calendar
        .getEvents(
          window.start,
          window.end,
          { search: keyword },
        ),
    )
    .flat();
}
