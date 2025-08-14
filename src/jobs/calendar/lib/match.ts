function matchEvent(
  events: CalendarEventHandle[],
  terms: string[],
) {
  return [
    ...new Map(
      terms
        .map(term => term.toLocaleLowerCase())
        .map(
          term => events.filter(
            ([, handle]) => handle
              .title
              .includes(term),
          ),
        )
        .flat(),
    )
      .values(),
  ]
    .map(detail => detail.event);
}
