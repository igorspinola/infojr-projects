import React from 'react'
import styled from 'styled-components';


//-- TYPEs
interface MnProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


//-- STYLED COMPONENTs
const MainSC = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5rem 2rem;
  gap: 5rem;
  align-items: center;
  justify-content: space-between;
  transition: opacity 1s ease;

  &.opaco {
    background-color: hsla(0, 0%, 100%, 0.5);
  };
`;


//-- FUNCTION
export default function Main({
  id,
  className,
  children
  }: MnProps) {

  return (
    <MainSC id={id} className={className}>

      {children}

    </MainSC>
  )
};