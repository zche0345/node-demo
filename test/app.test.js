const request = require("supertest");
const app = require("../src/app");

describe("Node demo API", () => {
  test("GET /health returns ok", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: "ok"
    });
  });

  test("GET /api/message returns demo message", async () => {
    const response = await request(app).get("/api/message");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      message: "Hello from Node.js demo"
    });
  });
});
