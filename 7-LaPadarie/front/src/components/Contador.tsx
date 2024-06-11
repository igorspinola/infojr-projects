import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import axios from 'axios';
import { useState, useEffect } from 'react';
//-- COMPONENTs
import Text from './Text';
//-- ASSETs
import iconC1 from '../assets/iconC1.svg'
import iconC2 from '../assets/iconC2.svg'
import iconC3 from '../assets/iconC3.svg'


//-- STYLED COMPONENTs
const ContadoresSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  &.opaco {
    brightness: 1.5;
    z-index: 0;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 330px;
  max-width: 395px;
  min-height: 124px;
  max-height: 136px;
  padding: 1.25rem 1.5rem;
  border-radius: 0.5rem;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  &.brown {
    background-color: hsl(31, 90%, 20%);
    color: hsl(0, 0%, 100%);
  };
`;
const Head = styled.div`
  display: flex;
  align-content: start;
  justify-content: space-between;
`;
const Body = styled.div`
  font-size: 2.25rem;
  line-height: 2.75rem;
`;


//-- TYPEs
interface IProps {
  className?: string,
};
//-- FUNCTION
export default function Contadores({ className }: IProps) {
  const [clientesFila, setClientesFila] = useState<number>(0);
  const [paesVendidos, setPaesVendidos] = useState<number>(0);
  const [dinheirosVendas, setDinheirosVendas] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, []);
  //- Função para pegar dados do servidor
  const fetchData = () => {
    axios.get('http://localhost:1080/clientes')
      .then(response => {
        const clientes = response.data;
        const numClientes = clientes.length;
        setClientesFila(numClientes);

        let totalPaes = 0;
        let totalDinheiros = 0;
        clientes.forEach((cliente: any) => {
          totalPaes += cliente.paes;
          totalDinheiros += cliente.dinheiros;
        });

        setPaesVendidos(totalPaes);
        setDinheirosVendas(totalDinheiros);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  };
  //
  return (
    <ContadoresSC className={className}>

      <Card>
        <Head>
          Pessoas na fila
          <Image src={iconC1} alt="." />
        </Head>

        <Text type='h2'>{clientesFila}</Text>
      </Card>

      <Card>
        <Head>
          Pães vendidos
          <Image src={iconC2} alt="." />
        </Head>

        <Text type='h2'>{paesVendidos}</Text>
      </Card>

      <Card style={{backgroundColor: `hsl(31, 90%, 20%)`, color: `hsl(0, 0%, 100%)`}}>
        <Head>
          Entrada
          <Image src={iconC3} alt="." />
        </Head>

        <Text type='h2'>{dinheirosVendas}</Text>
      </Card>

    </ContadoresSC>
    
  )
};