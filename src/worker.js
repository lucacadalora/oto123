export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/health") {
      return Response.json({ ok: true });
    }
    if (url.pathname === "/api/consult") {
      if (request.method !== "POST") {
        return Response.json({ error: "method" }, { status: 405 });
      }
      return Response.json({ ok: true });
    }
    return env.ASSETS.fetch(request);
  },
};
