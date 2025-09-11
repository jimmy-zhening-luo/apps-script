export function getThreads(label = "") {
  try {
    if (label === "")
      throw new ReferenceError(
        "No email label provided",
        { cause: { label } },
      );

    return GmailApp
      .getUserLabelByName(label)
      .getThreads();
  }
  catch (e) {
    throw new Error(
      `Failed to get email threads for label: ${label}`,
      { cause: e },
    );
  }
}
