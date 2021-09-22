const express = require("express");

const server = express();

const Cars = require('./cars/cars-model')

server.use(express.json());

server.get('/api/cars', async (req, res) => {
    const cars = await Cars.find()
    res.status(200).json(cars)
})

server.get('/api/cars/:id', (req, res) => {
    res.end()
})

server.post('/api/cars', (req, res) => {
    res.end()
})

server.put('/api/cars/:id', (req, res) => {
    res.end()
})

server.delete('/api/cars/:id', (req, res) => {
    res.end()
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
})

module.exports = server;
