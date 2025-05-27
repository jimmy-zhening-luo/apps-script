function main() {
  console.log("main(): BEGIN");

  const properties = hydrate();

  console.log("main(): Hydrated script properties");
  console.log("main(): JOB: START: Gmail: Clean Garbage");
  cleanGarbage(properties.labels.labelGmailGarbage);
  console.log("main(): JOB: END: Gmail: Clean Garbage");
  console.log("main(): JOB: START: Calendar: Event Colors");
  eventColors(
    properties.events.eventBuffer,
    properties.events.eventTherapy,
    properties.events.eventDoctor,
    properties.events.eventHaircut,
  );
  console.log("main(): JOB: END: Calendar: Event Colors");
  console.log("main(): SUCCESS");
}
