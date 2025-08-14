function cleanGarbage(garbageTag: string) {
  const garbage = getThreads(garbageTag);

  console.log(`cleanGarbage: Retrieved ${garbage.length} threads tagged with: ${garbageTag}`);

  for (const piece of garbage)
    piece.moveToSpam();

  console.log("cleanGarbage: Garbage threads marked as spam");
}
