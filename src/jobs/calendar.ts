function eventColors(
  eventBuffer: string[],
  eventTherapy: string[],
  eventDoctor: string[],
  eventHaircut: string[],
) {
  function printTitles(label: string, titles: string[]) {
    return `${label}: ${titles.join(", ")}`;
  }

  const calendar = CalendarApp.getDefaultCalendar();

  console.log(`eventColors: Color events with keywords: ${printTitles("Buffer", eventBuffer)}; ${printTitles("Therapy", eventTherapy)}; ${printTitles("Doctor", eventDoctor)}; ${printTitles("Haircut", eventHaircut)}`);

  const buffers = getEventsUpcoming(calendar, eventBuffer),
  sessions = getEventsUpcoming(calendar, eventTherapy),
  checkups = getEventsUpcoming(calendar, eventDoctor),
  haircuts = getEventsUpcoming(calendar, eventHaircut),
  counts = {
    buffer: buffers.length,
    therapy: sessions.length,
    doctor: checkups.length,
    haircut: haircuts.length,
  },
  count = Object.values(counts).reduce((a, b) => a + b, 0);

  console.log(`eventColors: Found ${count} total events: ${JSON.stringify(counts)}`);
  setColors(buffers, "Graphite");
  setColors(sessions, "Grape");
  setColors(checkups, "Banana");
  setColors(haircuts, "Banana");
  console.log(`eventColors: Finished setting event colors`);
}
