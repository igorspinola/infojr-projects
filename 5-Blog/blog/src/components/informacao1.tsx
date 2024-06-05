import '../app/page.module.css'
import Image from 'next/image'
import Robo from './img/Robo.jpeg'
import { PrismicNextImage } from '@prismicio/next'
import { createClient } from '../prismicio'
import { PrismicRichText } from '@prismicio/react'

async function informacao1() {
  const prismic = createClient()

  const blogg = prismic.getByID('blogg',"gabriel")

  console.log(blogg)

  return (
    <>
    <div className='Titulo1'>
   <PrismicRichText field={gabriel.data.Titulo} />
   </div>
    <div className='Informacao1'>
   <div className='Paragrafo1'>
    <PrismicRichText field={gabriel.data.Subtiulo} />
    <PrismicRichText field={gabriel.data.Paragrafo} />
   </div>
   <div className='Imagem'>
    <PrismicNextImage field={gabriel.data.ImagemRobo} />
   </div>
   </div>
   <div>
   </div>

    </>
  )
}

export default informacao1