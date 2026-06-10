import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const processes = [
  spawn("node", ["server.mjs"], {
    cwd: root,
    env: { ...process.env, API_PORT: process.env.API_PORT || "5180" },
    shell: true,
    stdio: "inherit",
  }),
  spawn("vite", [], {
    cwd: root,
    shell: true,
    stdio: "inherit",
  }),
];

function stopAll() {
  for (const childProcess of processes) {
    if (!childProcess.killed) {
      childProcess.kill();
    }
  }
}

process.on("SIGINT", () => {
  stopAll();
  process.exit(0);
});

process.on("SIGTERM", () => {
  stopAll();
  process.exit(0);
});

for (const childProcess of processes) {
  childProcess.on("exit", (code) => {
    if (code && code !== 0) {
      stopAll();
      process.exit(code);
    }
  });
}
