const request = require("supertest");
const userRouter = require("./users-router");

describe("userRouter", function() {
  describe(" POST /users", function() {

    it("should return 200 OK", function() {
       beforeEach(async () => {
      await db("users").truncate();
    });
      return request(userRouter)
        .post("/users")
        .send({
            username: Martha
        })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return JSON formatted response", function() {
      return request(userRouter)
        .post("/users")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

   describe(" DELETE /users", function() {
    it("should return 200 OK", function() {
      return request(userRouter)
        .delete("/users")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return JSON formatted response", function() {
      return request(userRouter)
        .post("/users")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});
