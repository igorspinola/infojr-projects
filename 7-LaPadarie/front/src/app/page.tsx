"use client"

import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import clsx from "clsx";
//-- ASSETs
import logoLapad from '@/assets/logoLapad.svg';
import iconC1 from "@/assets/iconC1.svg";
import iconC2 from '@/assets/iconC2.svg';
import iconC3 from '@/assets/iconC3.svg';
import iconTrash from '@/assets/iconTrash.svg';


//-- MAIN
const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5rem 2rem;
  gap: 5rem;
  &.opaco {
    background-color: hsla(0, 0%, 100%, 0.5);
  }
`;


//-- CARDs
const GrupoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  &.opaco {
    opacity: 0.5;
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
`;
const CardHead = styled.div`
  display: flex;
  align-content: start;
  justify-content: space-between;
`;
const CardBody = styled.div`
  font-size: 2.25rem;
  line-height: 2.75rem;
`;


//-- LISTA
const Lista = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  color: hsl(31, 90%, 20%);
  font-weight: 700;
  &.opaco {
    opacity: 0.5;
    z-index: 0;
  }
`;
const AddItem = styled.a`
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
`;
const Itens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
  padding: 0 1rem;
  background-color: hsla(0, 0%, 100%, 0.8);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;
const ItensBody = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  span {
    font-weight: 500;
  }
`;


//-- ADD BOX
const Stickyness = styled.div`
  position: absolute;
  z-index:1;
  height: 150vh;
  @media (min-width: 765px) {
    height: 100vh;
  }
`;
const AddBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 5rem;
  width: 24rem;
  height: 24rem;
  padding: 1rem 1.5rem;
  gap: 3.75rem;
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  color: hsl(31, 90%, 20%);
`;
const AddHead = styled.p`
  font-weight: 700;
  margin-bottom: 1.5rem;
`;
const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const AddInput = styled.input`
  width: auto;
  height: 50px;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: hidden;
  background-color: hsla(0, 0%, 96%, 1);
`;
const AddButton = styled.button`
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


//-- PÁGINA HOME
export default function Home() {
  // BOTÃO "ADD CLIENTEs"
  const [visBox, setVisBox] = useState<boolean>(false);
  function toggleBox() {
    setVisBox(!visBox);
  };


  return (
    <Main className={clsx(
      visBox && 'opaco'
    )}>

      <Image src={logoLapad} alt="." />

      <GrupoCard className={clsx(
        visBox && 'opaco'
      )}>
        <Card>
          <CardHead>
            Pessoas na fila
            <Image src={iconC1} alt="." />
          </CardHead>

          <CardBody>7</CardBody>
        </Card>

        <Card>
          <CardHead>
            Pães vendidos
            <Image src={iconC2} alt="." />
          </CardHead>

          <CardBody>350</CardBody>
        </Card>

        <Card style={{backgroundColor: `hsl(31, 90%, 20%)`, color: `hsl(0, 0%, 100%)`}}>
          <CardHead>
            Entrada
            <Image src={iconC3} alt="." />
          </CardHead>

          <CardBody>R$ 175,00</CardBody>
        </Card>
      </GrupoCard>


      <Lista className={clsx(
        visBox && 'opaco'
      )}>
        <AddItem onClick={toggleBox}> + Adicionar pessoa à fila </AddItem>

        <Itens>
          <div>
            <AddItem>Alexandre Shyjada Sousa</AddItem>

            <ItensBody>
              <p>Total de pães: <span>50 pães</span></p>
              <p>Total a pagar: <span>R$ 25,00</span></p>
            </ItensBody>
          </div>

          <Image src={iconTrash} alt="." />
        </Itens>
      </Lista>



    {visBox &&
      (<Stickyness>
        <AddBox>
          <div>
            <AddHead>Adicionar pessoa à fila</AddHead>
            <AddForm id='form-add'>
              <AddInput type='text' placeholder='Nome completo do cliente' />
              <AddInput type='number' placeholder='Total de pães' />
            </AddForm>
          </div>

          <div style={{display: `flex`, justifyContent: `space-between`}}>
            <AddButton form='form-add' type='submit'>
              Enviar
            </AddButton>
            <AddButton className='cancelar' onClick={toggleBox}>
              Cancelar
            </AddButton>
          </div>
        </AddBox>
      </Stickyness>)
    }
    </Main>
  );
}
