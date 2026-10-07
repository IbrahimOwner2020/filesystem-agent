import { ToolLoopAgent } from "ai";
import { createOllama } from "ollama-ai-provider-v2";
import { Sandbox } from "@vercel/sandbox";
import { createBashTool } from "./tools";
import path from "path";
import fs from "fs/promises";

const ollama = createOllama({
  baseURL: "https://api.ollama.com/api",
  headers: { Authorization: `Bearer ${process.env.AI_GATEWAY_API_KEY}` },
});

const loadSandboxFiles = async (sandbox: Sandbox) => {
  const callsDir = path.join(process.cwd(), "lib", "calls");
  const callFiles = await fs.readdir(callsDir);

  for (const file of callFiles) {
    const filePath = path.join(callsDir, file);
    const buffer = await fs.readFile(filePath);
    await sandbox.writeFiles([{ path: `calls/${file}`, content: buffer }]);
  }
};

const sandbox = await Sandbox.create();

await loadSandboxFiles(sandbox);

const INSTRUCTIONS = `
You are a helpful assistant that answers questions about customer calls. Use bashTool to explore the files and find relevant information pertaining to the user's query. Using the information you find, craft a response for the user and output it as text.
`;

const agent = new ToolLoopAgent({
  model: ollama("gpt-oss:120b"),
  instructions: INSTRUCTIONS,
  tools: {
    bashTools: createBashTool(sandbox),
  },
});

export { agent };
