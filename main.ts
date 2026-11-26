import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You rubbed that pink mouse on your math sheet for twenty minutes, " +
  "so I ate its nest.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
