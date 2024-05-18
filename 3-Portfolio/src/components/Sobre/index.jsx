// -- STYLES
import './styles.scss';
// -- ASSETS
import checked from '../../assets/checked.svg';
import curriculo from '../../assets/Curriculo-PedroTeles.pdf'
// -- COMPONENTS
import PseudoBtn from '../../components/PseudoBtn/index';

// -- FUNCTION
function Sobre() {

  return (
    <div id='sobre'>

      <hr/>

      <div>
        <p>
          Graduando de Administração, cofundador e atual presidente da Liga Acadêmica Transdisciplinar de Tecnologia e Inovação (LATTI) da UFBA. 
          <br/>
          <br/>
          Possuo experiência em Gestão de Produto e em Liderança sem Autoridade Formal dentro da LATTI, assim como experiência ministrando oficinas e workshops introdutórios de Análise de Dados (Python, SQL e Excel), UX/UI Design e Desenvolvimento Front-End (HTML, CSS e JavaScript) - áreas pelas quais me interesso.
          <br/>
          <br/>
          Além das áreas acima, também me interesso e pesquiso sobre temas como Gamificação, Cidades Criativas e Economia Solidária.
        </p>
      </div>

      <PseudoBtn texto='Baixe aqui o meu ' link={curriculo} clique='curriculo em PDF' />

    </div>
  );
};

export default Sobre;