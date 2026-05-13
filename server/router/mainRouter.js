import express from "express"
import sql from "../db/db.js"
import { errorMiddleware } from "../middleware/errorMiddleware.js"

export const appRouter = express.Router()

appRouter.get('/', async (req, res) => {
    const jobs = await sql`SELECT * FROM jobs;`
    res.json(jobs)
})

appRouter.post("/", async (req, res) => {
    const [ sendData ] = await sql `INSERT INTO jobs(company, position, status) VALUES (${req.body.company}, ${req.body.position}, ${req.body.status}) RETURNING *;`
    res.json(sendData)
})

appRouter.delete("/:id", async (req, res) => {
    const { id } = req.params
    const removeData = await sql `DELETE FROM jobs WHERE id = ${id};`
    res.json(removeData)
})

appRouter.patch("/:id", async (req, res, next) => {
    try{
        const { id } = req.params
        const [ patchData ] = await sql `UPDATE jobs SET company = ${req.body.company}, position = ${req.body.position}, status = ${req.body.status} WHERE id = ${id};`

        if (!searchById) {
            return res.status(500).json({ message: "Cant change data" })
        }

        res.json(patchData)
    } catch(error){
        next(error)
    }
})

appRouter.get("/:id", async (req, res, next) => {
    try{
        const { id } = req.params

        if(isNaN(id)){
            return res.status(400).json({ message: "Wrong type of id" })
        }

        const [ searchById ] = await sql `SELECT * FROM jobs WHERE id = ${id};`

        if (!searchById) {
            return res.status(404).json({ message: "Job not found" })
        }

        res.json(searchById)
    } catch(error) {
        next(error)
    }
})