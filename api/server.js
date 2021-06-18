const express = require("express");

const server = express();

server.use(express.json());

server.get('/api/cars', (req, res) => {
    res.end()
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

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
})

module.exports = server;
