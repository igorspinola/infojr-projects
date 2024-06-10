import React from 'react';
import styled from 'styled-components';


//-- TYPEs
interface AIProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


//-- STYLED COMPONENTs
const AddItemSC = styled.button`
  display: flex;
  width: max-content;
  justify-self: start;
  background-color: transparent;
  border: hidden;

  font-size: 1.25rem;
  font-weight: 700;
  color: hsl(31, 90%, 20%);
`;


//-- FUNCTION
export default function AddItem({
  id,
  className,
  children,
}: AIProps, {...restProps}) {

  return (
    <AddItemSC id={id} className={className} {...restProps}>

      {children}

    </AddItemSC>
  )
};