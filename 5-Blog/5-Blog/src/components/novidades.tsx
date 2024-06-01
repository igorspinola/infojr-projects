import '../App.css'
import Hades from '../img/Hades.jpeg'
import Imagem2 from '../img/imagem2.jpeg'
import Imagem3 from '../img/Imagem3.jpeg'
import autor1 from '../img/RuanCorreia.jpeg'

function novidades() {
    return( 
    <>
    <div className='titulo'>
    <h3>Novidades</h3>
    </div>
    <div className='Novidades'>
    <div className='JogosHades'>
        <div className='Elementos'>
        <img src={Hades}></img>
        <h5>Hades 2, uma continuação divina</h5>
        <p>A continuação do famoso rogue-like Hades, chega em acesso antecipado na steam, isso conta com...</p>
        </div>
        <div className='Inferior'>
        <div className='Autor'>
        <img src={autor1}></img>
        <p>Ruan Correia</p>
        </div>
        <div className='Data'>
        <p>24/05/2024</p>
        </div>
        </div>
    </div>
    <div className='Series'>
        <div className='Elementos2'>
        <img src={Imagem2}></img>
        <h5>O episódio perfeito.</h5>
        <p>Love Death and Robots abala o mundo das séries com um dos episódios mais bem produzidos</p>
        </div>
        <div className='Inferior'>
        <div className='Autor'>
        <img src={autor1}></img>
        <p>Ruan Correia</p>
        </div>
        <div className='Data'>
        <p>24/05/2024</p>
        </div>
        </div>
    </div>
    <div className='JogoMinecraft'>
        <div className='Elementos3'>
        <img src={Imagem3}></img>
        <h5 >Live action de Minecraft em produção</h5>
        <p>O maior sucesso dos video games, irá inaugurar sua aparição nas telonas, o live action conta com...</p>
        </div>
        <div className='Inferior'>
        <div className='Autor'>
        <img src={autor1}></img>
        <p>Ruan Correia</p>
        </div>
        <div className='Data'>
        <p>24/05/2024</p>
        </div>
        </div>
    </div>
    </div>
    
    </>
    )
}

export default novidades