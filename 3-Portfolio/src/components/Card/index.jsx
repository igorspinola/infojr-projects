import './styles.scss/';



function Card(props) {
  if (props.tipo == 'reverso') {
    document.getElementById('card').classList.add('reverso')
  };

  return (
    <section id='card'>

      <img className='imagem-projeto' src={props.imagem} alt='/'/>

      <div>
        <h4>{props.nome}</h4>
        <p>{props.texto}</p>
        <button className='button'>Mais</button>
      </div>

    </section>
  );
};

export default Card;