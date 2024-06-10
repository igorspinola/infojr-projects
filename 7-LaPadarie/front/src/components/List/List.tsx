import React from 'react';
import styled from 'styled-components';


//-- TYPEs
interface LtProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


//-- STYLED COMPONENTs
const ListSC = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  &.opaco {
    opacity: 0.5;
    z-index: 0;
  }
`;


//-- FUNCTION
export default function List({
  id,
  className,
  children
}: LtProps) {

  return (
    <ListSC id={id} className={className}>

      {children}

    </ListSC>
  )
};