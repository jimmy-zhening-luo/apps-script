function main() {
  console.log("main(): BEGIN");

  // #region Prepare
  const properties = hydrate();

  console.log("main(): Hydrated script properties");
  // #endregion
  // #region Jobs: Gmail
  console.log("main(): JOB: START: Gmail: Clean Garbage");
  cleanGarbage(properties.labels.labelGmailGarbage);
  console.log("main(): JOB: END: Gmail: Clean Garbage");
  // #endregion
  // #region Jobs: Calendar
  console.log("main(): JOB: START: Calendar: Event Colors");
  eventColors(
    properties.events.eventBuffer,
    properties.events.eventTherapy,
    properties.events.eventMedical,
    properties.events.eventHaircut,
  );
  console.log("main(): JOB: END: Calendar: Event Colors");
  // #endregion
  console.log("main(): SUCCESS");
}
