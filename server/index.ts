import express, { Express, Router, Request, Response } from "express"
import dotenv from "dotenv"
import path from "path"

import errorHandler from "./middleware/errorMiddleware"
import connectDB from "./config/db"

import authRoutes from "./routes/authRoutes"

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/auth", authRoutes)

// serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")))

  app.get("*", (req: Request, res: Response) =>
    res.sendFile(path.resolve(__dirname, "../", "client", "dist", "index.html"))
  )
} else {
  app.get("/", (req: Request, res: Response) => res.send("you need to set to production"))
}

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))
