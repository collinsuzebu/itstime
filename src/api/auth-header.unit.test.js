import authHeader from "./auth-header";

const localStorageMock = {
  getItem: jest.fn().mockReturnValue({ access: "yyy", refresh: "nnn" }),
  setItem: jest.fn(),
  clear: jest.fn(),
};

describe("Auth Header", () => {
  it("should return access-token when user is logged In", () => {
    const storage = localStorageMock;
    const user = authHeader(storage);

    expect(user).toEqual({ Authorization: "Bearer " + "yyy" });
  });

  it("should return empty object when token is not found", () => {
    localStorageMock["getItem"] = jest.fn().mockReturnValue({});
    const storage = localStorageMock;
    const user = authHeader(storage);

    expect(user).toEqual({});
  });
});
