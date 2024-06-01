import './App.css'
import Header from './components/header'
import Subtitulo from './components/subtitulo'
import Predator from './components/predator'
import Novidades from './components/novidades'
import Jogos from './components/jogos'
import Filmes from './components/filmes'
import Series from './components/series'
import Inferior from './components/inferior'

function App() {

  return (
    <>
    <div className='pagina'>
     <Header/>
     <Subtitulo/>
     <Predator/>
     <Novidades/>
     <Jogos/>
     <Filmes/>
    <Series/>
    <Inferior/>
     </div>
    </>
  )
}

export default App
