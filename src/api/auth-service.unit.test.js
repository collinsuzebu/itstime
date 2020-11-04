import { server, rest } from "./testServer";
import AuthService, { API_URL } from "./auth.service";

const newUser = [
  "test@user.com",
  "123#password",
  "123#password",
  "Test",
  "User",
];

describe("Auth Service", () => {
  describe("Register", () => {
    it("Should successfully create a new user", async () => {
      server.use(
        rest.post(API_URL + "signup/", (req, res, ctx) => {
          return res(
            ctx.status(201),
            ctx.json({ message: "Successfully registered" })
          );
        })
      );

      const serverResponse = await AuthService.register(...newUser);
      expect(serverResponse.data).toEqual({
        message: "Successfully registered",
      });
    });

    it("Should fail when server is unreachable", async () => {
      server.use(
        rest.post(API_URL + "signup/", (req, res, ctx) => {
          return rest(ctx.status(400));
        })
      );

      await expect(AuthService.register(...newUser)).rejects.toThrow(
        "Network Error"
      );
    });
  });
});
