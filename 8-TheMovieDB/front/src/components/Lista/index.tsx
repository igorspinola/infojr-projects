import './styles.css';
import React from 'react';
//-- COMPONENTS
import Cards from '../Cards';
//-- ASSETS
import adelman from '../../assets/adelman.jpg';
import lavitaebella from '../../assets/lavitaebella.jpg';
import encanto from '../../assets/encanto.jpeg';
import freierfall from '../../assets/freierfall.jpg';
import espanhol from '../../assets/espanhol.svg';
import italiano from '../../assets/italiano.svg';
import frances from '../../assets/frances.svg';
import alemao from '../../assets/alemao.svg';

export default function Lista() {
  return (
    <section className='lista'>
      <Cards poster={adelman} titulo="Ms. et Mme Adelman" genero="Comédia" idioma={frances} />

      <Cards poster={lavitaebella} titulo="La vita è Bella" genero="Drama" idioma={italiano} />

      <Cards poster={encanto} titulo="Encanto" genero="Aventura" idioma={espanhol} />

      <Cards poster={freierfall} titulo="Freier Fall" genero="Drama" idioma={alemao} />
    </section>
  )
}
