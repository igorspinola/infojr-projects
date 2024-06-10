import React from 'react';
import styled from 'styled-components';


// -- TYPEs
interface AHProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


//-- STYLED COMPONENTs
const AddHeadSC = styled.p`
  font-weight: 700;
  margin-bottom: 1.5rem;
`;


//-- FUNCTION
export default function AddHead({
  id,
  className,
  children
}: AHProps) {
  return (
    <AddHeadSC id={id} className={className}>

      {children}
      
    </AddHeadSC>
  )
}
