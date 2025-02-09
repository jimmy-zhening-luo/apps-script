function clean() {
  const garbage = GmailApp
    .getUserLabelByName("ٴGarbage")
    .getThreads()
    .filter(thread => !thread.isInSpam());

  for (const piece of garbage)
    piece.moveToSpam();
}

clean();
