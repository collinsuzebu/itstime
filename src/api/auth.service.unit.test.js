import { server, rest } from "./testServer";
import AuthService, { API_URL } from "./auth.service";

const newUser = [
  "test@user.com",
  "123#password",
  "123#password",
  "Test",
  "User",
];

const loginUser = ["test@user.com", "123#password"];

describe("Auth Service", () => {
  describe("Register", () => {
    it("Should successfully create a new user", async () => {
      // Arrange
      server.use(
        rest.post(API_URL + "signup/", (req, res, ctx) => {
          return res(
            ctx.status(201),
            ctx.json({ message: "Successfully registered" })
          );
        })
      );

      // Act
      const serverResponse = await AuthService.register(...newUser);

      // Assert
      expect(serverResponse.data).toEqual({
        message: "Successfully registered",
      });
    });

    it("Should fail to register a user when server is unreachable", async () => {
      // Arrange
      server.use(
        rest.post(API_URL + "signup/", (req, res, ctx) => {
          return rest(ctx.status(400));
        })
      );

      // Assert
      await expect(AuthService.register(...newUser)).rejects.toThrow(
        "Network Error"
      );
    });
  });

  describe("Login", () => {
    it("Should successfully login a user with valid credentials", async () => {
      // Arrange
      server.use(
        rest.post(API_URL + "login/", (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({ token: { access: "accessKey", refresh: "refreshKey" } })
          );
        })
      );

      // Act
      const data = await AuthService.login(...loginUser);

      // Assert
      expect(data).toEqual({
        token: { access: "accessKey", refresh: "refreshKey" },
      });
    });

    it("Should fail to login a user when server is unreachable", async () => {
      // Arrange
      server.use(
        rest.post(API_URL + "login/", (req, res, ctx) => {
          return rest(ctx.status(400));
        })
      );

      // Assert
      await expect(AuthService.login(...loginUser)).rejects.toThrow(
        "Network Error"
      );
    });
  });

  describe("Logout", () => {
    it.todo("Should successfully remove 'user' data from localStorage");
  });
});
