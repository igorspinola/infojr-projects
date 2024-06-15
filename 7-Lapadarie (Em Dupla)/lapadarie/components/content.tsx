import Image from 'next/image'
import Lixo from '../img/Lixo.png'
import axios from 'axios'

export default async function content(){

    const people = await axios.get('http://localhost:3003/line')
    console.log(people.data)
    const arr = people.data
    const for_of = []
    for (let item of arr) {
      for_of.push(
<div className="Cliente" key={item.id}>
            <div className="Cliente1">
                <h5>{item.name}</h5>
                <div className="InformacaoInferior">
                    <h6>Total de pães: {item.bread_total} pães</h6>
                    <h6>Total a pagar: R$ {item.bread_total * 0.5}</h6>
                </div>
            </div>
            <Image src={Lixo} alt=""></Image>
            </div>
    
    );
     }

    return(
        <div>
        

        <div className="Lista">
            
            {for_of}
           
        </div>
        </div>
    )
}