function safeThreads(label: GoogleAppsScript.Gmail.GmailLabel) {
  try {
    return label.getThreads();
  }
  catch (e) {
    throw new ReferenceError("Failed to safely get threads", { cause: label });
  }
}
