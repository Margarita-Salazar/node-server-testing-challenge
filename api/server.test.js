const request = require('supertest')
const server = require('./server')
const db = require('../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db('cars').truncate()
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

test('sanity', () => {
  expect(true).not.toBe(false)
})

describe('[GET] /api/cars', () => {
  it('responds with the proper status code', async () => {
    const res = await request(server).get('/api/cars')
    expect(res.status).toBe(200)

  })
  it('correct amount of cars', async () => {
    const res = await request(server).get('/api/cars')
    const expected = [{ name: "Sonic" }, { name: "Malibou" }, { name: "Camaro" },]
    expect(res.body).toMatchObject(expected)
  }, 500)
})