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

function setColors(
  events: GoogleAppsScript.Calendar.CalendarEvent[],
  color: keyof typeof COLORS,
  label = "",
) {
  const eventLabel = label === "" ? "events" : `${label} events`;

  console.log(`Calendar.setColors: Try to set ${events.length} ${eventLabel} to ${color}`);

  const enumerated = CalendarApp.EventColor[COLORS[color]];

  for (const event of events)
    if (event.getColor() !== String(enumerated))
      event.setColor(String(enumerated));

  console.log(`Calendar.setColors: Successfully set colors of ${eventLabel}`);
}
