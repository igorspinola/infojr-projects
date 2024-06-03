import '../app/page.module.css'
import Image from 'next/image'
import Robo2 from './img/Robo2.png'
import PerfilRobo from './img/Ellipse 21.svg'

function center() {

  return (
    <>
    <div className='Titulo2'>
        <h1>Últimas postagens</h1>
    </div>
    <div className='Center'>

    <div className='Noticia'>
    <h1>Notícia muito importante</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum tempore dicta natus in accusantium numquam quia, eum enim consequuntur eius nobis corporis dignissimos impedit minus quas voluptatibus illum expedita.
    </p>
    <div className='Perfil'>
    <Image src ={PerfilRobo} alt =""></Image>
    <div className='perfilInformacoes'>
    <h6>Fulano das IAs</h6>
     <p>01/01/2024</p>
     </div>
     
    </div>
    <div className='Imagem2'>
        <Image src={Robo2} alt=""></Image>
     </div>

    </div>
    <div className='Noticia'>
    <h1>Notícia muito importante</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum tempore dicta natus in accusantium numquam quia, eum enim consequuntur eius nobis corporis dignissimos impedit minus quas voluptatibus illum expedita.
    </p>
    <div className='Perfil'>
    <Image src ={PerfilRobo} alt =""></Image>
    <div className='perfilInformacoes'>
    <h6>Fulano das IAs</h6>
     <p>01/01/2024</p>
     </div>
     
    </div>
    <div className='Imagem2'>
        <Image src={Robo2} alt=""></Image>
     </div>

    </div>
    <div className='Noticia'>
    <h1>Notícia muito importante</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum tempore dicta natus in accusantium numquam quia, eum enim consequuntur eius nobis corporis dignissimos impedit minus quas voluptatibus illum expedita.
    </p>
    <div className='Perfil'>
    <Image src ={PerfilRobo} alt =""></Image>
    <div className='perfilInformacoes'>
    <h6>Fulano das IAs</h6>
     <p>01/01/2024</p>
     </div>
     
    </div>
    <div className='Imagem2'>
        <Image src={Robo2} alt=""></Image>
     </div>

    </div>
    </div>

    </>
  )
}

export default center