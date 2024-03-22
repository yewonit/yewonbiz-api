import { gzip } from "gzip";
import { Context } from 'oak';

export default async function gzipMiddleware(ctx: Context, next: () => Promise<unknown>) {
  await next();

  const body = ctx.response.body;
  if (body && ctx.request.acceptsEncodings("gzip")) {
    if (typeof body === "string" || body instanceof Uint8Array) {
      const compressed = gzip(body instanceof Uint8Array ? body : new TextEncoder().encode(body));
      ctx.response.body = compressed;
      ctx.response.headers.set("Content-Encoding", "gzip");
    }
  }
}