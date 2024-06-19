import React from 'react';
import Image from 'next/image';
//-- ASSETS
import espanhol from '../assets/espanhol.svg';
import italiano from '../assets/italiano.svg';
import frances from '../assets/frances.svg';
import alemao from '../assets/alemao.svg';

export default function Idiomas() {
  

  return (
    <form id='movie-gender'>

        <input id='adventure' name='gender' value='adventure' type="radio" defaultChecked />
        <label htmlFor='adventure' className="adventure">
            Aventura
        </label>
      
        <input id='comedy' name='gender' value='comedy' type="radio"/>
        <label htmlFor='comedy' className="comedy">
            Comédia
        </label>

        <input id='drama' name='gender' value='drama' type="radio"/>
        <label htmlFor='drama' className="drama">
          Drama
        </label>   

        <input id='thriller' name='gender' value='thriller' type="radio"/>
        <label htmlFor='thriller' className="thriller">
            Suspense
        </label>

        <div className='indicador-genero'></div>

    </form>
  )
}
