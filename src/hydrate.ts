function hydrate() {
  const properties = PropertiesService.getScriptProperties(),
  labels = properties.getProperty("labelGmailGarbage");

  console.log("Hydrated labels");

  return labels;
}
