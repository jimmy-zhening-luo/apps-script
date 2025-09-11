import { EVENT_COLORS } from "./colors";

export function setColor(
  events: GoogleAppsScript.Calendar.CalendarEvent[],
  color: keyof typeof EVENT_COLORS,
) {
  const code = String(CalendarApp.EventColor[EVENT_COLORS[color]]);

  for (const event of events)
    if (event.getColor() !== code)
      event.setColor(code);
}
