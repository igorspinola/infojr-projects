import React from 'react';
import styled from 'styled-components';


// -- TYPEs
interface AIProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


const AddInputSC = styled.input`
  width: auto;
  height: 50px;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: hidden;
  background-color: hsla(0, 0%, 96%, 1);
  font-size: 1rem;
`;
export default function AddInput({
  id,
  className,
  children
}: AIProps) {

  return (
    <AddInputSC id={id} className={className}>

      {children}
      
    </AddInputSC>
  )
}
