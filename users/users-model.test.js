//imports
const db = require("../data/dbConfig.js");
const { find, findById, add, remove } = require("./users-model");

describe("users model", function() {
  describe("add", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should insert a user", async function() {
      await add({ username: "Martha" });
      const users = await db("users");
      expect(users).toHaveLength(1);
    });

    it("should insert the provided user", async function() {
      await add({ username: "Martha" });

      const users = await db("users");
      expect(users[0].username).toBe("Martha");
    });
  });

  describe("find", function() {});
  beforeEach(async () => {
    await db("users").truncate();
  });
  it("should return the names of all users", async function() {
    let user = await add({ username: "Mary" });
    await find();
    const users = await db("users");
    expect(users.length).toBeGreaterThan(0);
  });
  describe("findById", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });
    it("should return a single user", async function() {
      let user = await add({ username: "Mary" });

      await findById(1);
      const users = await db("users");
      expect(users).toHaveLength(1);
    });

    it("should return the user which matches the given id", async function() {
      let user = await add({ username: "Mary" });

      const users = await findById(1);
      expect(users.username).toBe("Mary");
    });
  });
});

describe("remove", function() {
  beforeEach(async () => {
      await db("users").truncate();
    });
  it("should remove a user", async function() {
          let user = await add({ username: "Morgan" });
          const users = await remove(1);
          expect(users[0]).toBe(undefined);
  });

});
