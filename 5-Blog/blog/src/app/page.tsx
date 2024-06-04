import './page.module.css'
import Header from '../components/header'
import Informacao1 from '../components/informacao1'
import Center from '../components/center'
import MaisAcessados from '../components/maisAcessadas'
import Inferior from '../components/inferior'
import { createClient } from '../prismicio'

export default function Home() {
  const prismic = createClient()

  const blogg = prismic.getByID('blogg',)

  console.log(blogg)
  return (
   <div>
   <Header/>
   <Informacao1/>
   <Center/>
    <MaisAcessados/>
    <Inferior/>
   </div>
  );
}
