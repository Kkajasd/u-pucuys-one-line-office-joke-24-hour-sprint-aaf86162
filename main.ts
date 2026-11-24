import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The office printer jammed during my performance review, so my raise is now stuck in the queue behind 47 copies of the same PDF.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
