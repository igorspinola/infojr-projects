"use client"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
//-- COMPONENTs
import Text from './Text';


//-- STYLED COMPONENTs
const Container = styled.div`
  display: flex;
  justify-self: center;
  flex-direction: column;
  justify-content: space-between;
  width: 24rem;
  height: 24rem;
  padding: 1rem 1.5rem;
  gap: 3.75rem;
  position: sticky;
  top: 5rem;
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px hsla(0, 0%, 0%, 0.1), 0 4px 6px -4px hsla(0, 0%, 0%, 0.1);
  color: hsl(31, 90%, 20%);
`;
const Head = styled.h3`
  font-weight: 700;
  margin-bottom: 1.5rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Input = styled.input`
  width: auto;
  height: 50px;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: hidden;
  background-color: hsla(0, 0%, 96%, 1);
  font-size: 1rem;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48%;
  height: 60px;
  background-color: hsl(31, 69%, 35%);
  border: hidden;
  border-radius: 0.5rem;
  color: hsl(0, 0%, 100%);
  font-size: 1rem;

  &.cancelar{
    background-color: transparent;
    border: 2px solid hsl(0, 76%, 49%);
    color: hsl(0, 76%, 49%);
  }
`;


//-- TYPEs
interface IProps {
  onClick: any
};
//-- FUNCTION
export default function Formulario({
  onClick
}: IProps) {
  //
  const [nome, setNome] = useState<string>("");
  const[paes, setPaes] = useState<number>(0);
  //
  const fNome = (e: React.FormEvent)=>{
    setNome(e.target.value);
  };
  const fPaes = (e: React.FormEvent)=>{
    const paesInt = parseInt(e.target.value, 10); 
    setPaes(paesInt);
  };
  //- Função "enviar formulário"
  const envForm = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      nome,
      paes,
      dinheiros: paes * 0.5,
    };
    axios.post('http://localhost:1080/', formData) 
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        console.error('Erro ao enviar os dados: ', error);
        alert('Erro ao enviar os dados');
    });
  };
  //
  return (
    <Container>
      <div>
        <Head>Adicionar pessoa à fila</Head>
        
        <Form id='add-form'>

          <Input type='text' name='nome' value={nome} onChange={fNome} placeholder='Nome completo do cliente' />
          <Input type='number' name='paes' value={paes} onChange={fPaes} placeholder='Total de pães' />

        </Form>
      </div>

      <div style={{display: `flex`, justifyContent:`space-between`}}>

        <Button form='add-form' onClick={envForm}>
          Enviar
        </Button>

        <Button className='cancelar' onClick={onClick}>
          Cancelar
        </Button>

      </div>

    </Container>
  )
};