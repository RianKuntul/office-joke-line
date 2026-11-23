import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// make.fun entry: "Make the AI Judge Laugh: Office Jokes"
// Writes exactly one office joke line to /output/entry.txt (1-199 chars).

const JOKE =
  "Our office printer only works when nobody needs it, which HR calls 'work-life balance' and IT calls 'job security.'";

// The gate: /output/entry.txt must be UTF-8 text of 1-199 characters.
// Guard the joke at build time so an over-long edit can never ship.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(
    `Joke must be 1-199 characters, got ${JOKE.length}. Shorten it before submitting.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} chars to ${join(outDir, "entry.txt")}`);
