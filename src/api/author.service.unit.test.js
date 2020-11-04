import { server, rest } from "./testServer";
import AuthorService, { API_URL } from "./author.service";

const serverAuthors = [
  { id: 1, name: "Collins Uzebu" },
  { id: 2, name: "Brian Pi" },
  { id: 3, name: "Joy Zhang" },
];

describe("Author Service", () => {
  it("Should successfully fetch 'authors' data from API", async () => {
    // Arrange
    server.use(
      rest.get(API_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(serverAuthors));
      })
    );

    // Act
    const responseData = await AuthorService.getAuthors();

    // Assert
    expect(responseData).toHaveLength(3);
  });

  it("Should fail to fetch 'authors' data from API when server is unreachable", async () => {
    // Arrange
    server.use(
      rest.get(API_URL, (req, res, ctx) => {
        return res(ctx.status(400));
      })
    );

    // Assert
    await expect(AuthorService.getAuthors()).rejects.toThrow(/400/i);
  });
});
