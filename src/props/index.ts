function hydrate() {
  const properties = PropertiesService.getScriptProperties(),
  labels = DefinedProperties.Labels
    .map(label => [label, properties.getProperty(label)] as const)
    .filter((entry): entry is readonly [typeof entry[0], string] => (entry[1] ?? null) !== null),
  events = DefinedProperties.Events
    .map(event => [event, properties.getProperty(event)] as const)
    .filter((entry): entry is readonly [typeof entry[0], string] => (entry[1] ?? null) !== null);

  if (labels.length < DefinedProperties.Labels.length || events.length < DefinedProperties.Events.length)
    throw new ReferenceError("Some expected labels are missing");

  return {
    labels: Object.fromEntries(labels) as Record<typeof labels[number][0], string>,
    events: Object.fromEntries(events) as Record<typeof events[number][0], string>,
  };
}
