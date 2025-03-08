function eventColors(
  eventBuffer: string[],
  eventTherapy: string[],
  eventDoctor: string[],
  eventHaircut: string[],
) {
  const separator = ", ";

  console.log(`eventColors: Color these events: ${eventBuffer.join(separator)}; ${eventTherapy.join(separator)}; ${eventDoctor.join(separator)}; ${eventHaircut.join(separator)}`);
}
