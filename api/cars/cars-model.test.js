const { text } = require("express");
const db = require("../../data/db-config.js");
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
  describe("insert", () => {
    test("returns created car", async () => {
      const input = { name: "Silverado" }
      const output = await Cars.insert(input)
      expect(output).toMatchObject(input)
    })
  })
  describe("delete", () => {
    test("successfully delets item", async () => {
      await Cars.remove(3)
      const cars = await db('cars')
      expect(cars).toMatchObject([
        { name: "Sonic" },
        { name: "Malibou" },
      ])
    })
    text("data has the correct length", async () => {
      await Cars.remove(3)
      const cars = await db('cars')
      expect(cars).toHaveLength(2)
    })
  })
  describe('update', () => {
    test('retuprn update car', async () => {
      const input = { name: "New Sonic" }
      const updated = await Cars.update(1, input)
      expect(updated).toMatchObject(input)
    })
  })
});
