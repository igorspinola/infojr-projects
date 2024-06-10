import React from 'react';
import styled from 'styled-components';


//-- TYPEs
interface IBProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


//-- STYLED COMPONENTs
const ItemBodySC = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: hsl(31, 90%, 20%);
  font-weight: 700;
  span {
    font-weight: 500;
  }
`;


//-- FUNCTION
export default function ItemBody({
  id,
  className,
  children
}: IBProps) {

  return (
    <ItemBodySC id={id} className={className}>

      {children}

    </ItemBodySC>
  )
};