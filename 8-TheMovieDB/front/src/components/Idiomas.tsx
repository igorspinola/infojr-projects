import React from 'react';
import Image from 'next/image';
//-- ASSETS
import espanhol from '../assets/espanhol.svg';
import italiano from '../assets/italiano.svg';
import frances from '../assets/frances.svg';
import alemao from '../assets/alemao.svg';

export default function Idiomas() {


  return (
    <form id='movie-language'>

        <input id='spanish' name='language' value='spanish' type="radio" defaultChecked />
        <label htmlFor='spanish' className="spanish">
          <h2>Espanhol</h2>
          <span>
            <Image src={espanhol} width={32} height={32} alt={"."} />
          </span>
        </label>
      
        <input id='italian' name='language' value='italian' type="radio"/>
        <label htmlFor='italian' className="italian">
          <h2>Italiano</h2>
          <span>
            <Image src={italiano} width={32} height={32} alt={"."} />
          </span>
        </label>

        <input id='french' name='language' value='french' type="radio"/>
        <label htmlFor='french' className="french">
          <h2>Francês</h2>
          <span>
            <Image src={frances} width={32} height={32} alt={"."} />
          </span>
        </label>   

        <input id='german' name='language' value='german' type="radio"/>
        <label htmlFor='german' className="german">
          <h2>Alemão</h2>
          <span>
            <Image src={alemao} width={32} height={32} alt={"."} />
          </span>
        </label>

        <div className='indicador-idioma'></div>

    </form>
  )
}
