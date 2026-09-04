import type { IncomingMessage, ServerResponse } from "node:http";

const workspace = process.env.COUNTER_API_WORKSPACE ?? "black-vein";
const counterName = "website-visits";

function sendJson(response: ServerResponse, status: number, body: Record<string, number | string>) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(body));
}

export default async function handler(request: IncomingMessage, response: ServerResponse) {
  if (request.method !== "GET") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  const token = process.env.COUNTER_API_TOKEN;
  if (!token) {
    sendJson(response, 503, { error: "Counter is not configured" });
    return;
  }

  try {
    const aborter = new AbortController();
    const timeout = setTimeout(() => aborter.abort(), 8_000);
    const counterResponse = await fetch("https://api.counterapi.dev/v2/" + workspace + "/" + counterName + "/up", {
      headers: { Authorization: "Bearer " + token },
      signal: aborter.signal,
    });
    clearTimeout(timeout);
    const data = await counterResponse.json() as { value?: number; count?: number; data?: { value?: number; count?: number } };
    const views = data.value ?? data.count ?? data.data?.value ?? data.data?.count;
    if (!counterResponse.ok || typeof views !== "number") {
      sendJson(response, 502, { error: "Counter is unavailable" });
      return;
    }
    sendJson(response, 200, { views });
  } catch {
    sendJson(response, 502, { error: "Counter is unavailable" });
  }
}
