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

  return [
    ...new Map<string, GoogleAppsScript.Calendar.CalendarEvent>(
      keywords
        .map(
          keyword => calendar
            .getEvents(
              window.start,
              window.end,
              { search: keyword },
            ),
        )
        .flat()
        .map(event => [getUUID(event), event]),
    )
      .values(),
  ];
}

function setColors(
  events: GoogleAppsScript.Calendar.CalendarEvent[],
  color: keyof typeof COLORS,
  category = "",
) {
  const quantifier = category === "" ? "events" : `${category} events`;

  console.log(`Calendar.setColors: Try to set ${events.length} ${quantifier} to ${color}`);

  const enumerated = CalendarApp.EventColor[COLORS[color]];

  for (const event of events)
    if (event.getColor() !== String(enumerated))
      event.setColor(String(enumerated));

  console.log(`Calendar.setColors: Successfully set colors of ${quantifier}`);
}
