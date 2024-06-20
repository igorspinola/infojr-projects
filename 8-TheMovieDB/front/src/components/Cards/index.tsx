import './styles.css';
import React from 'react';
import Image from 'next/image';
//-- ASSETS
import { FaRegHeart } from "react-icons/fa";

interface CdProps {
  poster: any;
  titulo: string;
  genero: string;
  idioma: any;
}
export default function Cards({poster, titulo, genero, idioma}: CdProps) {

  return (
    <div className='cards'>
      <div>
        <Image src={poster} alt='Espanhol' width={100} height={100} />
        <h2 className='self-center font-bold my-1'>{titulo}</h2>
      </div>

      <div>
        <div className='flex justify-between text-xs'>
          <p>{genero}</p>
          <Image src={idioma} alt='.' width={20} height={20} />
        </div>

        <p>⭐⭐⭐⭐</p>
        
        <div className='flex justify-between text-xs'>
          <button>Detalhes</button>
          <button> <FaRegHeart /> </button>
        </div>
      </div>

    </div>
  )
}
