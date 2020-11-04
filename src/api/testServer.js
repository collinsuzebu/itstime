import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  // must overide the default post request

  rest.post("*", (req, res, ctx) => {
    console.error(`Request handler for ${req.url.toString()} not provided`);
    return res(
      ctx.status(500),
      ctx.json({ error: "Please add request handler" })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
