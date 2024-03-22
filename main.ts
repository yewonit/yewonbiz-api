import { Application } from "oak";
import cors from "./middlewares/cors.ts"
import gzipMiddleware from "./middlewares/gzip.ts"

const run = async (port: number) => {
  const app = new Application();

  app.use(cors);
  app.use(gzipMiddleware);

  // TODO - router
  
  // TODO - denodb, nessie

  console.log(`Server started at http://localhost:${port}🚀`)
  await app.listen({ port: port });
}

await run(4000)
