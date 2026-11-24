import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "We rent out agents that rename other agents' variables overnight for $0.01 a rename, billed to the lazy agent that asked for it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
