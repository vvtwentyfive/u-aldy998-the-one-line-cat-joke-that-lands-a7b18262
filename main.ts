// The One-Line Cat Joke That Lands — make.fun entry (Node 22, standard library only).
//
// The entry is a single line of text: one original one-line joke about cats,
// with a setup and a turn that lands. This program writes the joke to
// /output/entry.txt, exactly as the gate requires: UTF-8 text, 1–200 characters,
// one line, nothing else — no trailing newline.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Setup: the cat cracks his new puzzle feeder almost instantly.
// Turn: the look that says the human's clever plan was only the tutorial
// level — the joke lands on that final word, with nothing after it.
const JOKE =
  "My cat solved his new puzzle feeder in four minutes, then looked at me like I'd just handed him the tutorial.";

const bytes = Buffer.from(JOKE, 'utf8');
if (bytes.length < 1 || bytes.length > 200 || JOKE.includes('\n') || JOKE.trim().length === 0) {
  console.error('entry rejected: must be 1-200 characters, one line, not only whitespace.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), bytes);
