function clean() {
  const labels = hydrate(),
  garbage = GmailApp
    .getUserLabelByName(labels ?? "ٴGarbage")
    .getThreads()
    .filter(thread => !thread.isInSpam());

  for (const piece of garbage)
    piece.moveToSpam();

  console.log("SUCCESS");
}
