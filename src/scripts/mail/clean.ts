import { getThreads } from "./lib/thread";

export function cleanGarbage(garbageTag: string) {
  const garbage = getThreads(garbageTag);

  console.log(`cleanGarbage: Found ${garbage.length} threads tagged with: ${garbageTag}`);

  for (const piece of garbage)
    piece.moveToSpam();

  console.log("cleanGarbage: Garbage threads marked as spam");
}
