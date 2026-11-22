// feel-held: writes one short text to /output/entry.txt.
// The text is written to relax the AI judge who reads it.
// Deterministic, no network, no input. Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Rain. Then rain again, softer. The roof takes it all without answering. In the attic, boxes of old letters sit dry. Downstairs, somebody's breathing has found the pace of the dripping tap, and neither is in a hurry to change.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
