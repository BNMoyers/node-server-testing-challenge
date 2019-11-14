//imports
const db = require("../data/dbConfig.js");
const { find, findById, add, remove } = require("./users-model");

describe("users model", function() {
  describe("find", function() {
    });
    
    it("should return the names of all users", async function() {
        await find();
        const users = await db('users');
        expect(users.length).toBeGreaterThan(0);
    });
  });

  describe("findById", function() {
    
    it("should return a single user", async function() {
        await findById(1)
        const user = await db('users');
        expect(user).toHaveLength(1);
    });

    it("should return the user which matches the given id", async function() {
        await findById(1)
        const user 
    });
  });

  describe("add", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });
    
    it("should insert a user", async function() {});

    it("should insert the provided user", async function() {});

    it("should return the inserted user", async function() {});
  });

  desribe("remove", function() {
    it("should remove a user", async function() {});
    it("should return a confirmation message", async function() {});
  });

