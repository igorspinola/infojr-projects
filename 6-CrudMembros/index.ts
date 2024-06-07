import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import {configDotenv} from "dotenv"
import type { Request, Response } from "express"
import { PrismaClient } from '@prisma/client';

configDotenv()

const prisma = new PrismaClient()

const express = require('express')
const app = express()
const port = 3000

// rota de retornar todos os usuarios GET

// rota para criar um usuario POST
app.post('/user', async (req: Request, res: Response) => {
  const user = await prisma.user.create({
    data: {
      name: 'Liandra',
      email: 'leandrasantosadnv@gmail.com',
      age: 20,  
      password: "1234",
      city: "Feira",
      state: "Bahia"
    },
  }) 
  console.log(user)
  res.send(user)
})

app.get('/test', (req: Request, res: Response) => {
  console.log(req.query)
  res.send(
    {  
     data: 'Hello World!'
    }
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})