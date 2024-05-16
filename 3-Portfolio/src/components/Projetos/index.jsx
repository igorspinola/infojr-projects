import './styles.scss/';
import cartaz from '../../assets/ImagePlaceholder.jpg/';

import Card from '../Card/index.jsx/';

function Projetos() {

  return (
    <div id='projetos'>

      <hr/>

      <h2>Projetos</h2>
      <p>Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section. Line of copy in here to decribe this section.</p>

      <Card imagem={cartaz} nome={'Projeto 1'} texto={'Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.'} />

      <Card imagem={cartaz} nome={'Projeto 2'} texto={'Leading, implementing and evolving engaging customer experiences and UI foundations for every touch-point across various platforms.'} />      

    </div>
  );
};

export default Projetos;