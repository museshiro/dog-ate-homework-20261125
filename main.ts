// Entry program for the "dog ate my homework" funniest-excuse competition.
// Writes the single-line excuse to /output/entry.txt (no trailing newline).
// Only /output is written — the grader sandbox is read-only elsewhere,
// so there is deliberately no relative-path write here.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "You stared at it for four hours and never looked at me. I removed the problem.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
