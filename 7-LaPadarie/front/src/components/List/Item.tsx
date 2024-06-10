import React from 'react';
import styled from 'styled-components';


//-- TYPEs
interface ImProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


//-- STYLED COMPONENTs
const ItemSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
  padding: 0 1rem;
  background-color: hsla(0, 0%, 100%, 0.8);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  color: hsl(31, 90%, 20%);
  font-weight: 700;
`;


//-- FUNCTION
export default function Item({
  id,
  className,
  children
}: ImProps) {

  return (
    <ItemSC id={id} className={className}>
      
    </ItemSC >
  )
};