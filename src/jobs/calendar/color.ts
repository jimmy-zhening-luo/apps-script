function setEventColor(
  eventBuffer: string[],
  eventTherapy: string[],
  eventDoctor: string[],
  eventHaircut: string[],
) {
  function printConfig(category: string, terms: string[]) {
    return `${category}: ${terms.join(", ")}`;
  }

  console.log(
    `setEventColor: Found event categories: ${printConfig("Buffer", eventBuffer)}; ${printConfig("Therapy", eventTherapy)}; ${printConfig("Doctor", eventDoctor)}; ${printConfig("Haircut", eventHaircut)}`,
  );

  const events = getUpcomingEvent(
    CalendarApp.getDefaultCalendar(),
  ),
  buffers = matchEvent(events, eventBuffer),
  sessions = matchEvent(events, eventTherapy),
  checkups = matchEvent(events, eventDoctor),
  haircuts = matchEvent(events, eventHaircut),
  _log = {
    buffer: buffers.length,
    therapy: sessions.length,
    doctor: checkups.length,
    haircut: haircuts.length,
  };

  console.log(
    `setEventColor: Found ${
      Object
        .values(_log)
        .reduce(
          (a, b) => a + b,
          0,
        )
    } total events for categories: ${
      JSON.stringify(_log)
    }`,
  );
  console.log("setEventColor: Begin setting event color");
  setColor(buffers, "Graphite");
  setColor(sessions, "Peacock");
  setColor(checkups, "Banana");
  setColor(haircuts, "Banana");
  console.log(`setEventColor: Successfully set all event colors`);
}
