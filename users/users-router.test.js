const request = require("supertest");
const server = require('../server');
const db = require('../data/dbConfig')

describe("userRouter", function() {
  describe(" POST /users", function() {

    it("should return 201 OK", function() {
       beforeEach(async () => {
      await db("users").truncate();
    });
      return request(server)
        .post("/api/users")
        .send({
            username: "Martha"
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
    it("should return JSON formatted response", function() {
      return request(server)
        .post("/api/users")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

   describe(" DELETE /users", function() {
    it("should return 201 OK", function() {
      return request(server)
        .delete("/api/users/:id")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return JSON formatted response", function() {
      return request(server)
        .delete("/api/users/:id")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});
