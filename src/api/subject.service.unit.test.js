import { server, rest } from "./testServer";
import SubjectService, { API_URL } from "./subject.service";

const serverCourses = [
  {
    id: 1,
    title: "Mathematics",
    slug: "mathematics",
  },
  {
    id: 2,
    title: "Music",
    slug: "music",
  },
];

describe("Subject Service", () => {
  it("Should successfully fetch 'subject' data from API", async () => {
    // Arrange
    server.use(
      rest.get(API_URL, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(serverCourses));
      })
    );

    // Act
    const responseData = await SubjectService.getSubjects();

    // Assert
    expect(responseData).toHaveLength(2);
  });

  it("Should fail to fetch 'subject' data from API when server is unreachable", async () => {
    // Arrange
    server.use(
      rest.get(API_URL, (req, res, ctx) => {
        return res(ctx.status(400), ctx.json(serverCourses));
      })
    );

    // Assert
    await expect(SubjectService.getSubjects()).rejects.toThrow(/400/i);
  });
});
