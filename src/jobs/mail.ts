function cleanGarbage(label: string) {
  const garbage = getSafeThreads(label),
  garbageCount = garbage.length;

  console.log(`cleanGarbage: ${garbageCount} Garbage threads retrieved from label:${label}`);

  for (const piece of garbage)
    piece.moveToSpam();

  console.log("cleanGarbage: Garbage threads marked as spam");
}
