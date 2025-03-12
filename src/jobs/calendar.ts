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

  console.log(`eventColors: Found ${count} events: ${JSON.stringify(counts)}`);
  console.log(`eventColors: Trying to set ${counts.buffer} Buffer events to GRAY`);
  setColors(buffers, "Graphite");
  console.log(`eventColors: Successfully set Buffer event colors`);
  console.log(`eventColors: Trying to set ${counts.therapy} Therapy events to MAUVE`);
  setColors(sessions, "Grape");
  console.log(`eventColors: Successfully set Therapy event colors`);
  console.log(`eventColors: Trying to set ${counts.doctor} Doctor events to ORANGE`);
  setColors(checkups, "Banana");
  console.log(`eventColors: Successfully set Doctor event colors`);
  console.log(`eventColors: Trying to set ${counts.haircut} Haircut events to YELLOW`);
  setColors(haircuts, "Banana");
  console.log(`eventColors: Successfully set Haircut event colors`);
  console.log(`eventColors: Finished setting all event colors`);
}
