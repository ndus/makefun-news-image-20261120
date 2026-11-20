import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// make.fun entry "news-image-20261120": the poster for Friday
// 20 November 2026 lives in this repo as entry.png, and this
// program drops an exact copy of it into the grader's output
// folder. Nothing is fetched and nothing varies, so a second
// run lands on the same bytes as the first.
const repoDir = dirname(fileURLToPath(import.meta.url));
const destDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(destDir, { recursive: true });
await copyFile(join(repoDir, "entry.png"), join(destDir, "entry.png"));
