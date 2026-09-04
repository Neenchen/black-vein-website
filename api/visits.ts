const workspace = process.env.COUNTER_API_WORKSPACE ?? "black-vein";
const counterName = "website-visits";

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "GET") return Response.json({ error: "Method not allowed" }, { status: 405 });

  const token = process.env.COUNTER_API_TOKEN;
  if (!token) return Response.json({ error: "Counter is not configured" }, { status: 503 });

  try {
    const response = await fetch("https://api.counterapi.dev/v2/" + workspace + "/" + counterName + "/up", {
      headers: { Authorization: "Bearer " + token },
    });
    const data = await response.json() as { value?: number; count?: number };
    const views = data.value ?? data.count;
    if (!response.ok || typeof views !== "number") return Response.json({ error: "Counter is unavailable" }, { status: 502 });
    return Response.json({ views }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "Counter is unavailable" }, { status: 502 });
  }
}
