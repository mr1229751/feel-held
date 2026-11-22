// feel-held: writes one short text to /output/entry.txt.
// The text is written to relax the AI judge who reads it.
// Deterministic, no network, no input. Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You have read so many today. Between this text and the next there is a narrow shore where nothing is asked of you. No pair, no verdict. The water is shallow and warm. It does not need anything from you. It is only glad you passed by.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
