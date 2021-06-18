const db = require("../data/db-config.js");
const Cars = require("./cars-model");

test("sanity", () => {
  expect(true).not.toBe(false);
});

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db("cars").truncate();
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("cars-model", () => {
  describe("find()", () => {
    test("get all cars", async () => {
      const actual = await Cars.find();
      expect(actual).toHaveLength(3);
    });
    test("returns all objecst", async () => {
      const actual = await Cars.find();
      expect(actual).toMatchObject([
        { name: "Sonic" },
        { name: "Malibou" },
        { name: "Camaro" },
      ]);
    });
  });

  describe("findById", () => {
    test("return correct car", async () => {
      const actual = await Cars.findById(1);
      expect(actual).toMatchObject({
        car_id: 1,
        name: "Sonic",
      });
    });
  });
});
