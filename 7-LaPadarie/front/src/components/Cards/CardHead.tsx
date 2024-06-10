import React from 'react';
import styled from 'styled-components';


// -- TYPEs
interface CHProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


//-- STYLED COMPONENTs
const CardHeadSC = styled.div`
  display: flex;
  align-content: start;
  justify-content: space-between;
`;


//-- FUNCTION
export default function CardHead({
  id,
  className,
  children
}: CHProps) {
  
  return (
    <CardHeadSC id={id} className={className}>

      {children}

    </CardHeadSC>
  )
};