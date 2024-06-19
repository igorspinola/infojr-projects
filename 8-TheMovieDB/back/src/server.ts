// import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import cors from "cors"
// const prisma = new PrismaClient()

const express = require('express')
const app = express()
const port = 3003

app.use(express.json());
app.use(cors())

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})