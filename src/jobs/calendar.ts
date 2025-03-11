function eventColors(
  eventBuffer: string[],
  eventTherapy: string[],
  eventDoctor: string[],
  eventHaircut: string[],
) {
  function printTitles(label: string, titles: string[]) {
    return `${label}: ${titles.join(", ")}`;
  }

  function setColors(
    events: GoogleAppsScript.Calendar.CalendarEvent[],
    color: keyof typeof GoogleAppsScript.Calendar.EventColor,
  ) {
    const enumerated = CalendarApp.EventColor[color];

    for (const event of events)
      if (event.getColor() !== String(enumerated))
        event.setColor(String(enumerated));
  }

  const calendar = CalendarApp.getDefaultCalendar();

  console.log(`eventColors: Color events with keywords: ${printTitles("Buffer", eventBuffer)}; ${printTitles("Therapy", eventTherapy)}; ${printTitles("Doctor", eventDoctor)}; ${printTitles("Haircut", eventHaircut)}`);

  const buffers = getEventsNextYearByKeyword(calendar, eventBuffer),
  sessions = getEventsNextYearByKeyword(calendar, eventTherapy),
  checkups = getEventsNextYearByKeyword(calendar, eventDoctor),
  haircuts = getEventsNextYearByKeyword(calendar, eventHaircut),
  counts = {
    buffer: buffers.length,
    therapy: sessions.length,
    doctor: checkups.length,
    haircut: haircuts.length,
  },
  count = Object.values(counts).reduce((a, b) => a + b, 0);

  console.log(`eventColors: Found ${count} events: ${JSON.stringify(counts)}`);
  console.log(`eventColors: Trying to set ${counts.buffer} Buffer events to GRAY`);
  setColors(buffers, "GRAY");
  console.log(`eventColors: Successfully set Buffer event colors`);
  console.log(`eventColors: Trying to set ${counts.therapy} Therapy events to MAUVE`);
  setColors(sessions, "MAUVE");
  console.log(`eventColors: Successfully set Therapy event colors`);
  console.log(`eventColors: Trying to set ${counts.doctor} Doctor events to ORANGE`);
  setColors(checkups, "YELLOW");
  console.log(`eventColors: Successfully set Doctor event colors`);
  console.log(`eventColors: Trying to set ${counts.haircut} Haircut events to YELLOW`);
  setColors(haircuts, "YELLOW");
  console.log(`eventColors: Successfully set Haircut event colors`);
  console.log(`eventColors: Finished setting all event colors`);

  /*
    PALE_BLUE ("1") as "Peacock"
    PALE_GREEN ("2") as "Sage"
    MAUVE ("3"), as "Grape"
    PALE_RED ("4") as "Flamingo"
    YELLOW ("5") as "Banana"
    ORANGE ("6") as "Tangerine"
    CYAN ("7") as "Lavender"
    GRAY ("8") as "Graphite"
    BLUE ("9") as "Blueberry"
    GREEN ("10") as "Basil"
    RED ("11") "Tomato"
  */
}
