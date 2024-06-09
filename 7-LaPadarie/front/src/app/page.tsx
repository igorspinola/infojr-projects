"use client"

import Image from "next/image";
import styled from "styled-components";
//-- ASSETs
import iconC1 from "@/assets/iconC1.svg";
import iconC2 from '@/assets/iconC2.svg';
import iconC3 from '@/assets/iconC3.svg';
import iconTrash from '@/assets/iconTrash.svg';


//-- MAIN
const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  width: full;
  align-items: center;
  justify-content: space-between;
  
  p {
    font-family: "Poppins";
    font-size: 1rem;
    line-height: 1.5rem;
  }
`


//-- CARDs
const GrupoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

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
  gap: 1.5rem;
  color: hsl(31, 90%, 20%);
  font-weight: 700;
`;
const Itens
 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: full;
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
const AddBox = styled.div`
  display: hidden;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 350px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  color: hsl(31, 90%, 20%);
`
const AddHead = styled.p`
  font-weight: 700;
`
const AddInput = styled.input`
  width: full;
  height: 50px;
`
const AddButton = styled.button`
  display: flex;
  place-content: center;
  width: 260px;
  height: 60px;
  background-color: hsl(31, 69%, 35%);
  color: hsl(0, 0%, 100%);

  &.cancelar{
    background-color: transparent;
    border: 1px solid hsl(0, 76%, 49%);
    color: hsl(0, 76%, 49%);
  }
`


//-- PÁGINA HOME
export default function Home() {
  return (
    <main className="flex flex-col w-5/6 gap-20">

      <GrupoCard>
        <Card>
          <CardHead>
            <p>Pessoas na fila</p>
            <Image src={iconC1} alt="." />
          </CardHead>

          <CardBody>7</CardBody>
        </Card>

        <Card>
          <CardHead>
            <p>Pães vendidos</p>
            <Image src={iconC2} alt="." />
          </CardHead>

          <CardBody>350</CardBody>
        </Card>

        <Card style={{backgroundColor: `hsl(31, 90%, 20%)`, color: `hsl(0, 0%, 100%)`}}>
          <CardHead>
            <p>Entrada</p>
            <Image src={iconC3} alt="." />
          </CardHead>

          <CardBody>R$ 175,00</CardBody>
        </Card>
      </GrupoCard>


      <Lista>
        <p> + Adicionar pessoa à fila </p>

        <Itens>
          <div>
            <p>Alexandre Shyjada Sousa</p>

            <ItensBody>
              <p>Total de pães: <span>50 pães</span></p>
              <p>Total a pagar: <span>R$ 25,00</span></p>
            </ItensBody>
          </div>

          <Image src={iconTrash} alt="." />
        </Itens>
      </Lista>





      <AddBox>

      <div>
        <AddHead>Adicionar pessoa à fila</AddHead>
        <form id='form-add'>
          <AddInput type='text' placeholder='Nome completo do cliente' />
          <AddInput type='number' placeholder='Total de pães:' />
        </form>
      </div>

      <div className='flex justify-between'>
        <AddButton form='form-add' type='submit'>
          Enviar
        </AddButton>
        <AddButton form='form-add' className='cancelar' type='submit'>
          Cancelar
        </AddButton>
      </div>
      
    </AddBox>

    </main>
  );
}
