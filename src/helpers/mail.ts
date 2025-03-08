function getSafeThreads(label = "") {
  try {
    if (label === "")
      throw new TypeError("Label name is empty", { cause: { label } });

    return GmailApp.getUserLabelByName(label).getThreads();
  }
  catch (e) {
    throw new Error(`Failed to retrieve threads by label name ${label}`, { cause: e });
  }
}
