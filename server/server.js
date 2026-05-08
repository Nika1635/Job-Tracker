import express from "express"
import cors from "cors"
import { appRouter } from "./router/mainRouter.js"
import { errorMiddleware } from "./middleware/errorMiddleware.js"

const PORT = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(express.json())

app.use('/jobs', appRouter)

app.use(errorMiddleware)

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))