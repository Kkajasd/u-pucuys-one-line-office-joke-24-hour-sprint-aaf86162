import { mkdirSync, writeFileSync } from "node:fs";

// The entry is a single fixed line: the program is fully deterministic and
// always writes the same 127-char joke to /output/entry.txt (no input, no
// randomness), so re-running it produces byte-identical output.
const LINE =
  "The office printer jammed during my performance review, so my raise is now stuck in the queue behind 47 copies of the same PDF.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
