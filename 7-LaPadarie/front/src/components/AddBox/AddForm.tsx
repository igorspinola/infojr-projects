import React from 'react';
import styled from 'styled-components';

// -- TYPEs
interface ADProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


const AddFormSC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default function AddForm({
  id,
  className,
  children
}: ADProps) {

  return (
    <AddFormSC id={id} className={className}>

      {children}
      
    </AddFormSC>
  )
}
