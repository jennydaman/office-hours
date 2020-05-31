import { createConnection, Connection } from "typeorm";
import { init } from "./server";
import path from "path";
import { Server } from "@hapi/hapi";

export function setupServerTest(): () => Server {
  let server: Server;

  beforeEach(async () => {
    server = await init();
  });

  afterEach(async () => {
    await server.stop();
  });

  return () => server;
}

export function setupDBTest() {
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection({
      type: "postgres",
      url: "postgres://postgres@localhost:5432/test",
      synchronize: true,
      logging: false,
      entities: [path.resolve(__dirname, "entity/**/*{.js,.ts}")],
      migrations: [path.resolve(__dirname, "migration/**/*{.js,.ts}")],
      subscribers: [path.resolve(__dirname, "subscriber/**/*{.js,.ts}")],
    });
  });

  beforeEach(async () => {
    await connection.synchronize(true);
  });

  afterAll(async () => {
    await connection.close();
  });
}

// An abstraction for testing server request responsese
export function withServer(server) {
  return async ({
    method,
    url,
    statusCode = 200,
    result,
  }: {
    method: "get" | "post";
    url: string;
    statusCode?: number;
    result;
  }) => {
    const request = await server().inject({ method, url });
    expect(request.statusCode).toEqual(statusCode);
    expect(request.result).toStrictEqual(result);
  };
}
