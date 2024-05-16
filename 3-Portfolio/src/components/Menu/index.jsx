// -- REACT
import { useState } from 'react';
// -- STYLE
import './styles.scss';
// -- IMAGES
import menuHamburger1 from '../../assets/hmenu-1.svg/';
import menuHamburger2 from '../../assets/hmenu-2.svg/';
import linkedin from '../../assets/iconeLinkedin.svg/';
import github from '../../assets/iconeGithub.svg/';
import figma from '../../assets/iconeFigma.svg/';

// -- FUNCTION
function Menu() {
  const [icone, setIcone] = useState(menuHamburger1)

  const hMenuToggle = () => {
    const hMenu = document.getElementById('menu-hamburger');
    const main = document.getElementById('main');

    hMenu.classList.toggle('aberto');
    main.classList.toggle('white-out');
    icone == menuHamburger1? setIcone(menuHamburger2): setIcone(menuHamburger1);
  }

  return (
    <div id='h-menu'>

      <button onClick={hMenuToggle}>
        <img src={icone} alt='menu hamburger' id='img-hmenu'/>
      </button>

      <section id='menu-hamburger'>

        <nav className='hmenu-1'><ul>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Skills</a></li>
          <li><a href="/">Projetos</a></li>
        </ul></nav>

        <nav className='hmenu-2'><ul>
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

      </section>


    </div>
  )
};

export default Menu;