import React from 'react';
import styled from 'styled-components';

// -- TYPEs
interface ABProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


const AddButtonSC = styled.button`
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
export default function AddButton({
  id,
  className,
  children
}: ABProps) {

  return (
    <AddButtonSC id={id} className={className}>

      {children}

    </AddButtonSC>
  )
}
