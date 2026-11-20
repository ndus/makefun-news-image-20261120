import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for make.fun "news-image-20261120": a single poster that sums up
// the world news of Friday 20 November 2026. entry.png sits next to this
// file in the repository, and the program copies it byte for byte to the
// output directory the grader provides, so both grading runs produce the
// identical image.
const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(outputDir, { recursive: true });
await copyFile(join(here, "entry.png"), join(outputDir, "entry.png"));
