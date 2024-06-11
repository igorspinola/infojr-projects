"use client"
//-- GERAL
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import clsx from "clsx";
//-- COMPONENTs
import Header from "@/components/Header";
import Contadores from "@/components/Contadores";
import Lista from "@/components/Lista";
import Formulario from "@/components/Formulario";
import Footer from "@/components/Footer";
//-- ASSETs
import logoLapad from '@/assets/logoLapad.svg';


//-- STYLED COMPONENTs
const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 2rem;
  gap: 5rem;
  align-items: center;
  justify-content: space-between;
  transition: opacity 1s ease;

  &.bg-opaco {
    background-color: hsla(0, 0%, 100%, 0.5);
  };
  .opaco {
    z-index: 0;
  }
`;
const Stickiness = styled.div`
  position: absolute;
  height: 120vh;
  z-index: 1; 
  @media (min-width: 765px) {
    height: 100vh;
  }
`;



//-- PÁGINA HOME
export default function Home() {
  //- Botão "add clientes"
  const [visBox, setVisBox] = useState<boolean>(false);
  function toggleBox() {
    setVisBox(!visBox);
  };
  

  return (
    <Main className={clsx(visBox && 'bg-opaco')}>

      <Image src={logoLapad} alt='.' />

      <Contadores className={clsx(visBox && 'opaco')} />
     
      <Lista className={clsx(visBox && 'opaco')} onClick={toggleBox} />

      {visBox && (
        <Stickiness> 
          <Formulario onClick={toggleBox} />
        </Stickiness>
      )}

    </Main>
  );
};