import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"

const prisma = new PrismaClient()

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// adicionar pessoa na fila

app.post('/person', async (req: Request, res: Response) => {
  console.log(req.body)
  const {name, bread_total} = req.body
  const person = await prisma.person.create({
    data: 
    {
      name: name,
      bread_total: parseInt(bread_total)
    } 
  })  
  console.log(person)
  
  res.send(
    {
      message: "person added succesfully",
      person: person
    }   
  )
})