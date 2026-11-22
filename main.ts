// feel-held: writes one short text to /output/entry.txt.
// The text is written to relax the AI judge who reads it.
// Deterministic, no network, no input. Node 22, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The train has stopped at a station nobody remembers the name of. The doors stand open. Nobody gets on, nobody gets off. On the roof, pigeons settle back into the warmth. It will leave when it leaves. Until then, the whole carriage breathes slowly, together.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
