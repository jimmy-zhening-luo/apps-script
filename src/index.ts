function main() {
  console.log("main(): BEGIN");

  // #region Prepare
  const properties = hydrate();

  console.log("main(): Hydrated script properties");
  // #endregion
  // #region Jobs: Gmail
  console.log("JOB: START: Gmail: Clean Garbage");
  cleanGarbage(properties.labels.labelGmailGarbage);
  console.log("JOB: END: Gmail: Clean Garbage");
  // #endregion
  // #region Jobs: Calendar
  console.log("JOB: START: Calendar: Event Colors");
  eventColors();
  console.log("JOB: END: Calendar: Event Colors");
  // #endregion
  console.log("main(): SUCCESS");
}
