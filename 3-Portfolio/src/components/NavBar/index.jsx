import './styles.scss/';

function NavBar(props) {
  const lista = props.lista;

  return (
    <div id="navbar">

      <nav><ul>
        
        {lista.map(
          (item) => 
            <li key={lista.key}>
              <a href={lista.link}>{lista.nome}</a>
            </li>
        )}

      </ul></nav>

    </div>
  );
};

export default NavBar;