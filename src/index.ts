function main() {
  const properties = getProperties();

  console.log("main(): JOB: Start: Gmail: Clean Garbage");
  cleanGarbage(properties.mail.labelGmailGarbage);
  console.log("main(): JOB: COMPLETE: Gmail: Clean Garbage");

  console.log("main(): JOB: Start: Calendar: Event Colors");
  eventColors(
    properties.calendar.eventBuffer,
    properties.calendar.eventTherapy,
    properties.calendar.eventDoctor,
    properties.calendar.eventHaircut,
  );
  console.log("main(): JOB: COMPLETED: Calendar: Event Colors");

  console.log("main(): SUCCESS");
}
