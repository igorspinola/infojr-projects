import {Request, Response, NextFunction } from 'express';
import * as bodyParser from "body-parser";
import { PrismaClient } from '@prisma/client';

const express = require('express')
const app = express();
const cors = require('cors')
const port = 1080;
const prisma = new PrismaClient();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}))
app.use(cors());
app.use((req: Request, res: Response, next: NextFunction)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  app.use(cors());
  next();
})




//-- RECEBIMENTO DOS DADOS
interface FormData {
  nome: string;
  paes: number;
  dinheiros: number;
}
app.post('/', async (req: Request, res: Response)=>{
  const { nome, paes, dinheiros }: FormData = req.body;
  try {
    const cliente = await prisma.clientes.create({
      data: {
        nome: nome,
        paes: paes,
        dinheiros: dinheiros,
      },
    });

    console.log('Novo cliente adicionado à fila: ', cliente);

    res.status(200).json({
      message: 'Cliente adicionado à fila!'
    })
  } catch (error) {
    console.error('Erro ao salvar os dados: ', error);

    res.status(500).json({ error: 'Erro ao salvar os dados' });
  };
});
//-- APAGAMENTO DOS DADOS
app.delete('/clientes/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.clientes.delete({ 
      where: { id: Number(id) } 
    });
    res.status(200).json({ message: 'Cliente deletado com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar o cliente: ', error)
    res.status(500).json({ error: 'Erro ao deletar o cliente' });
  }
});


// -- ENTREGA DE DADOS
interface DBData {
  id: number;
  nome: string;
  paes: number;
  dinheiros: number;
}
app.get('/clientes', async (req: Request, res: Response) => {
  try {
    const clientes: DBData[] = await prisma.clientes.findMany();
    res.status(200).json(clientes);
  } catch (error) {
    console.error('Erro ao obter os usuários:', error);
    res.status(500).json({ error: 'Erro ao obter os usuários' });
  }
});


//-- PAGINA INICIAL DA API
app.get('/', async (req: Request, res: Response)=> {
  try{const clientes: DBData[] = await prisma.clientes.findMany();
  res.json(clientes);} catch {
    res.send('Banco de dados vazio')
  }
})
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});