import '../App.css'
import Bolo from '../img/ImagemBolo.jpeg'
import autor1 from '../img/RuanCorreia.jpeg'

function novidades() {
    return( 
    <>
    <div className='titulo'>
    <h3>Filmes</h3>
    </div>
    <div className='Novidades'>
    <div className='JogosHades'>
        <div className='Elementos'>
        <img src={Bolo}></img>
        <h5>“Que vontade de um bolo de pote”</h5>
        <p>Designer de jogos diz que comer um bolo de pote além de manter a consistência no trabalho auxilia na concentração</p>
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
        <img src={Bolo}></img>
        <h5>“Que vontade de um bolo de pote”</h5>
        <p>Designer de jogos diz que comer um bolo de pote além de manter a consistência no trabalho auxilia na concentração</p>
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
        <img src={Bolo}></img>
        <h5>“Que vontade de um bolo de pote”</h5>
        <p>Designer de jogos diz que comer um bolo de pote além de manter a consistência no trabalho auxilia na concentração</p>
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