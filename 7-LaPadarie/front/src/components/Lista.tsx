"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
//-- COMPONENTs
import styled from 'styled-components';
import Text from './Text';
//-- ASSETs
import iconTrash from '../assets/iconTrash.svg'


//-- STYLED COMPONENTs
const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;
const AddItem = styled.button`
  display: flex;
  width: max-content;
  justify-self: start;
  background-color: transparent;
  border: hidden;

  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(31, 90%, 20%);
`;
const ListaSC = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  gap: 1.5rem;
  list-style: none;
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem;

  background-color: hsla(0, 0%, 100%, 0.8);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  list-style: none;
  color: hsl(31, 90%, 20%);
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;
const Total = styled.div`
  display: flex;
  gap: 1rem;
  color: hsl(31, 90%, 20%);
`;
const Span = styled.span`
  font-weight: 700;
`


//-- TYPEs
interface IProps {
  className?: string;
  onClick: any
}
//-- FUNCTION
export default function Lista({ className, onClick }: IProps) {
  const [clientes, setClientes] = useState([{}]);
  //- Função "adicionar cliente" (á lista)
  useEffect(() => {
    function fetchClientes() {
      axios.get('http://localhost:1080/clientes')
        .then(response => {
          setClientes(response.data);
        })
        .catch(error => {
          console.error('Erro ao obter os usuários:', error);
        });
    }
    fetchClientes();
  }, [clientes]);
  //- Função "deletar cliente" (do banco de dados)
  const deleteCliente = (id: number) => {
    axios.delete(`http://localhost:1080/clientes/${id}`)
      .then(response => {
        alert(response.data.message);
        setClientes(clientes.filter(cliente => cliente.id !== id));
      })
      .catch(error => {
        console.error('Erro ao deletar o cliente:', error);
        alert('Erro ao deletar o cliente');
      });
  };
  //
  return (
    <Container className={className}>
      <AddItem onClick={onClick}>
        + Adicionar pessoa à fila 
      </AddItem>

      {clientes.length > 1 && (
        <ListaSC>
        {clientes.map(cliente => (
          <Item key={cliente.id}>

            <Body>
              <Text type='h3'><Span>{cliente.nome}</Span></Text>
              <Total>
                <Text><Span>Total de pães:</Span> {cliente.paes} </Text>
                <Text><Span>Total a pagar:</Span> R$ {cliente.dinheiros}</Text>
              </Total>
            </Body>

            <AddItem onClick={
              () => deleteCliente(cliente.id)
            }>
              <Image src={iconTrash} alt="." />
            </AddItem>

          </Item>
        ))}
        </ListaSC>
      )}

    </Container>
  );
};