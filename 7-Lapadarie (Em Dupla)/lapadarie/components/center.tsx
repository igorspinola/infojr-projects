import IconePessoas from '../img/iconepessoas.png'
import CarrinhoCompras from '../img/carrinhoCompras.png'
import IconeDinheiro from '../img/IconeDinheiro.png'
import Image from 'next/image'

export default function center(){
    return(
        <div className="center">
            <div className="elements">
                <div className="quadros">
                <div className="NaFila">
                <h5>Pessoas na fila</h5>
                <Image src={IconePessoas} alt=""></Image>
                </div>
                <div className="paesVendidos">
                <h5>Pães vendidos</h5>
                <Image src={CarrinhoCompras} alt=""></Image>
                </div>
                <div className="entrada">
                    <h5>Entrada</h5>
                    <Image src={IconeDinheiro} alt=""></Image>
                </div>
                </div>
            </div>
        </div>
    )
}