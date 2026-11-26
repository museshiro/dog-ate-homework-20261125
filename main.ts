import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You rubbed that pink mouse on your math sheet for twenty minutes, " +
  "so I ate its nest.";
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", line);
