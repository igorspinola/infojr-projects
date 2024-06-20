import './styles.css';
import React from 'react';


export default function NavBar() {

  return (
    <div className='navbar'>
      <a className='botao-login' href='/signup'> Login </a>
      <a className='botao-signup' href='login'> Sign Up </a>
    </div>
  )
};