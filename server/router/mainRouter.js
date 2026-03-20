import express from "express"
import sql from "../db/db.js"

export const appRouter = express.Router()

appRouter.get('/', async (req, res) => {
    const jobs = await sql`SELECT * FROM jobs;`
    res.json(jobs)
})

appRouter.post("/", async (req, res) => {
    console.log(req.body)
    const incomingData = JSON.parse(req.body)
    const sendData = await sql `INSERT INTO jobs(company, position, status) VALUES (${incomingData.company}, ${incomingData.position}, ${incomingData.status});`
    res.json(sendData)
})
