import React from 'react';
import styled from 'styled-components';


// -- TYPEs
interface ABProps {
  id?: string,
  className?: string,
  children: React.ReactNode,
};


//-- STYLED COMPONENTs
const AddBoxSC = styled.div`
  display: flex;
  position: sticky;
  top: 5rem;
  justify-self: center;
  flex-direction: column;
  justify-content: space-between;
  width: 24rem;
  height: 24rem;
  padding: 1rem 1.5rem;
  gap: 3.75rem;
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px hsla(0, 0%, 0%, 0.1), 0 4px 6px -4px hsla(0, 0%, 0%, 0.1);
  color: hsl(31, 90%, 20%);
`;


//-- FUNCTION
export default function AddBox({
  id,
  className,
  children
}: ABProps) {
  return (
    <AddBoxSC id={id} className={className}>

      {children}

    </AddBoxSC>
  )
};