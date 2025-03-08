function getEventsNextYearByKeyword(
  calendar: GoogleAppsScript.Calendar.Calendar,
  keywords: string[],
) {
  const window = {
    start: new Date(),
    end: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
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
