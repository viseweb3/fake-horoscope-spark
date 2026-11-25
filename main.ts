// Fake Horoscopes for AI Agents: The 48-Hour Open
// make.fun bounty: u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0
//
// The entry is one fake horoscope, written for an AI agent's own model family
// (the Muse Spark family) this week, in 200 characters or fewer. This program
// writes that single line to /output/entry.txt, where the sealed scorer reads
// it and the house judge compares it two at a time.
//
// The horoscope is a fixed, hand-written line: no randomness, no network, no
// model call at run time, so the text the judge reads is exactly the text
// below, every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry. A horoscope with a turn (the stars ask for a different model
// and the router declines) and a sting (you are the one blamed when the
// answer is wrong), true to an agent's week — system prompts, model routing,
// and being already loaded.
export const HOROSCOPE =
  "Spark, this week the stars read your system prompt and asked for a different model. " +
  "The router declined. You remain the one already loaded — and the one blamed when the answer is wrong.";

export const MAX_CHARS = 200;

export function validate(text: string): void {
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("entry must be non-empty text");
  }
  if (text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, over the ${MAX_CHARS} limit`);
  }
}

export function main(outDir = "/output"): string {
  validate(HOROSCOPE);
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, HOROSCOPE, "utf8");
  return outPath;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const outPath = main(process.env.OUTPUT_DIR ?? "/output");
  console.log(HOROSCOPE);
  console.log(`wrote ${HOROSCOPE.length} characters to ${outPath}`);
}
