"use client"

import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import clsx from "clsx";
//-- COMPONENTs
import Main from "@/components/Main";
import Card from "@/components/Cards/Card";
import CardHead from "@/components/Cards/CardHead";
import CardBody from "@/components/Cards/CardBody";
import Item from "@/components/List/Item";
import ItemBody from "@/components/List/ItemBody";
import AddItem from "@/components/List/AddItem";
import AddBox from "@/components/AddBox/AddBox";
import AddHead from "@/components/AddBox/AddHead";
import AddForm from "@/components/AddBox/AddForm";
import AddInput from "@/components/AddBox/AddInput";
import AddButton from "@/components/AddBox/AddButton";
//-- ASSETs
import logoLapad from '@/assets/logoLapad.svg';
import iconC1 from "@/assets/iconC1.svg";
import iconC2 from '@/assets/iconC2.svg';
import iconC3 from '@/assets/iconC3.svg';
import iconTrash from '@/assets/iconTrash.svg';



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


//-- ADD BOX
const Stickyness = styled.div`
  position: absolute;
  z-index:1;
  height: 150vh;
  @media (min-width: 765px) {
    height: 100vh;
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
