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

// get paes vendidos

// get numero de pessoas na fila 

// get dinheiro que entrou


// retornar pessoas da fila

app.get('/line', async (req: Request, res: Response) => {
  const people = await prisma.person.findMany()
  res.send(people)
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
  
  const dashboard = await prisma.dashboard.findUnique({
    where: {
      id: 1
    }
  }) || {id: 1, people_on_line: 0, breads_sold: 0, revenue: 0}

  const new_people_on_line = dashboard.people_on_line + 1
  const new_breads_sold = dashboard.breads_sold + 1
  const new_revenue = new_breads_sold * 0.5 + dashboard.revenue

  res.send(
    {
      message: "person added succesfully",
      person: person
    }   
  )
})