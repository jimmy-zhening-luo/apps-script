function main() {
  const properties = hydrate();

  console.log("main(): JOB: Start: Gmail: Clean Garbage");
  cleanGarbage(properties.labels.labelGmailGarbage);
  console.log("main(): JOB: COMPLETE: Gmail: Clean Garbage");

  console.log("main(): JOB: Start: Calendar: Event Colors");
  eventColors(
    properties.events.eventBuffer,
    properties.events.eventTherapy,
    properties.events.eventDoctor,
    properties.events.eventHaircut,
  );
  console.log("main(): JOB: COMPLETED: Calendar: Event Colors");

  console.log("main(): SUCCESS");
}
