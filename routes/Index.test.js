const request = require("supertest");
const app = require("../app");

describe("Test the root path - done", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the root path - Promise", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    });
  });

describe("Test the root path - async await", () => {
    test("It should response the GET method", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });
});


describe("Test the root path - supertest", () => {
    test("It should response the GET method", () => {
      return request(app)
        .get("/")
        .expect(200);
    });
});
