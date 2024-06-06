import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import type { Request, Response } from "express"

const express = require('express')
const app = express()
const port = 3000

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