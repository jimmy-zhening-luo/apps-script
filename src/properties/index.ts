function getProperties() {
  const properties = PropertiesService
    .getScriptProperties();

  function getNamedProperties<T extends keyof typeof namedProperties>(app: T): (readonly [typeof namedProperties[T][number], string])[] {
    return namedProperties[app]
      .map(
        property => [
          property,
          properties.getProperty(property),
        ] as const,
      )
      .filter(
        (retrievedProperty): retrievedProperty is readonly [typeof retrievedProperty[0], string] => (retrievedProperty[1] ?? null) !== null,
      );
  }

  const mail = getNamedProperties("mail"),
  calendar = getNamedProperties("calendar")
    .map(
      ([category, titles]) => [
        category,
        titles
          .split(";")
          .map(title => title.trim())
          .filter(title => title !== ""),
      ] as const,
    );

  if (
    mail.length < namedProperties.mail.length
    || calendar.length < namedProperties.calendar.length
  )
    throw new ReferenceError("Some named properties are missing or duplicated");

  return {
    mail: Object.fromEntries(mail) as Record<typeof mail[number][0], string>,
    calendar: Object.fromEntries(calendar) as Record<typeof calendar[number][0], string[]>,
  };
}
