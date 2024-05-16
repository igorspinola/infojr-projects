// -- STYLES
import './styles.scss';
// -- COMPONENTS
import NavBar from '../NavBar/index';
import Switch from '../Switch/index.jsx/';
// -- IMAGES
import linkedin from '../../assets/iconeLinkedin.svg/';
import github from '../../assets/iconeGithub.svg/';
import figma from '../../assets/iconeFigma.svg/';


// -- FUNCTION
function Header() {
  const lista = [{key: 1, link: 'Skills', nome: 'Sobre'}, {key: 2, link: 'dois', nome:'Projetos'}]

  return (
    <div id='header'>

      <section>
        <h4>Pedro Teles</h4>

        {/* <nav><ul>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Skills</a></li>
          <li><a href="/">Projetos</a></li>
        </ul></nav> */}
        <NavBar lista={lista} />
      </section>

      <section>
        <nav><ul>
          <li><a href="https://www.linkedin.com/in/teles-pedro/" target="_blank">
              <img src={linkedin} alt="icone do linkedin"/>
          </a></li>
          <li><a href="https://github.com/eusouopeu" target="_blank">
              <img src={github} alt="icone do github"/>
          </a></li>
          <li><a href="https://figma.com/@eusouopeu" target="_blank">
              <img src={figma} alt="icone do figma"/>
          </a></li>
        </ul></nav>

        <div>
          <p>Dark Mode</p>
          <Switch/>
        </div>
      </section>

    </div>
  )
};

export default Header;