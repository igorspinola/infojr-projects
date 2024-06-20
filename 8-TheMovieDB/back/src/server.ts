import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import cors from "cors"
import axios from 'axios'


const prisma = new PrismaClient()

const express = require('express')
const app = express()
const port = 3003

app.use(express.json());
app.use(cors())

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/movie_list', async (req: Request, res: Response) => {

  const list = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
  console.log(list)
  res.send(list.data)
})

app.post('/user', async (req: Request, res: Response) => {
  
  console.log(req.body)
  const {username, email, password} = req.body

  const user = await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: password,
    },
  }) 
  console.log(user)
  res.send(user)
})

// app.post('/add_favorite', async (req: Request, res: Response) => {
  
//   console.log(req.body)
//   const {username, movie_id} = req.body

//   const user = await prisma.user.update({
//     data: {
//       favorite_movies:
//     },
//   }) 
//   console.log(user)
//   res.send(user)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})