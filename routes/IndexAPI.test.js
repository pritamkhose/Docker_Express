const request = require("supertest");
const app = require("../app");

describe("Test the api", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/api/");
   
    expect(response).toBeTruthy()
    expect(response.statusCode).toBe(200);

    expect(response.body.title).toBe('Docker Express JS App');
    expect(response.body.status).toBe(true);
    expect(response.body.date).toBeTruthy();
  });
});


describe("Test the api request", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/api/request");
   
    expect(response).toBeTruthy()
    expect(response.statusCode).toBe(200);

    expect(response.body.title).toBe('Docker Express JS App');
    expect(response.body.date).toBeTruthy();

    expect(response.body.request).toBeTruthy();
    expect(response.body.request.method).toBeTruthy();
    expect(response.body.request.url).toBeTruthy();
    expect(response.body.request.params).toBeTruthy();
    expect(response.body.request.query).toBeTruthy();
    expect(response.body.request.headers).toBeTruthy();
    expect(response.body.request.cookies).toBeTruthy();
    expect(response.body.request.body).toBeTruthy();
  });
});