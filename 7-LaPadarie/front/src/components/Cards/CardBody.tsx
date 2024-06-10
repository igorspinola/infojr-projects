import React from 'react';
import styled from 'styled-components';


// -- TYPEs
interface CBProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


//-- STYLED COMPONENTs
const CardBodySC = styled.div`
  font-size: 2.25rem;
  line-height: 2.75rem;
`;

//-- FUNCTION
export default function CardBody({
  id,
  className,
  children
}: CBProps) {

  return (
    <CardBodySC id={id} className={className}>

      {children}
      
    </CardBodySC>
  )
};