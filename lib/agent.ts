import { ToolLoopAgent } from "ai";
import { createOllama } from "ollama-ai-provider-v2";

const ollama = createOllama({
  baseURL: "https://api.ollama.com/api",
  headers: { Authorization: `Bearer ${process.env.AI_GATEWAY_API_KEY}` },
});

const agent = new ToolLoopAgent({
  model: ollama("gemma4:31b"),
});

export { agent };
