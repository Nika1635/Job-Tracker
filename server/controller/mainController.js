import express from "express"

export const appRouter = express.Router()

appRouter.get('/', (req, res) => {
    res.send({info: "server is running"})
})