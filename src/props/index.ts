function hydrate() {
  const properties = PropertiesService.getScriptProperties(),
  labels = DefinedProperties.Labels
    .map(label => [label, properties.getProperty(label)] as const)
    .filter((entry): entry is readonly [typeof entry[0], string] => (entry[1] ?? null) !== null);

  if (labels.length < DefinedProperties.Labels.length)
    throw new ReferenceError("Some expected labels are missing");

  return {
    labels: Object.fromEntries(labels) as Record<typeof labels[number][0], string>,
  };
}
