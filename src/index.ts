function clean() {
  const properties = hydrate();

  console.log("Hydrated Gmail labels");

  const garbage = safeThreads(GmailApp.getUserLabelByName(properties.labels.labelGmailGarbage)),
  garbageCount = garbage.length;

  console.log(`${garbageCount} Garbage threads retrieved from Garbage label`);

  for (const piece of garbage)
    piece.moveToSpam();

  console.log("Moved garbage threads to Spam");
  console.log("SUCCESS");
}
