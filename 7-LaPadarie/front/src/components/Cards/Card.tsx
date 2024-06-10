import React from 'react';
import styled from 'styled-components';


// -- TYPEs
interface CdProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


//-- STYLED COMPONENTs
const CardSC = styled.div`
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


//-- FUNCTION
export default function Card({
  id,
  className,
  children
}: CdProps) {

  return (
    <CardSC id={id} className={className}>

      {children}
      
    </CardSC>
  )
};