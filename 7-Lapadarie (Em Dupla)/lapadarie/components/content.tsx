import Image from 'next/image'
import Lixo from '../img/Lixo.png'

export default function content(){
    return(
        <div>
        

        <div className="Lista">
            <div className="Cliente">
            <div className="Cliente1">
                <h5>Alexandre Shyjada Sousa</h5>
                <div className="InformacaoInferior">
                    <h6>Total de pães:</h6>
                    <h6>Total a pagar:</h6>
                </div>
            </div>
            <Image src={Lixo} alt=""></Image>
            </div>

            <div className="Cliente">
            <div className="Cliente1">
                <h5>Matheus Novais</h5>
                <div className="InformacaoInferior">
                    <h6>Total de pães:</h6>
                    <h6>Total a pagar:</h6>
                </div>
            </div>
            <Image src={Lixo} alt=""></Image>
            </div>

            <div className="Cliente">
            <div className="Cliente1">
                <h5>Victor Peixoto</h5>
                <div className="InformacaoInferior">
                    <h6>Total de pães:</h6>
                    <h6>Total a pagar:</h6>
                </div>
            </div>
            <Image src={Lixo} alt=""></Image>
            </div>

            <div className="Cliente">
            <div className="Cliente1">
                <h5>Kennedy Anderson</h5>
                <div className="InformacaoInferior">
                    <h6>Total de pães:</h6>
                    <h6>Total a pagar:</h6>
                </div>
            </div>
            <Image src={Lixo} alt=""></Image>
            </div>

            <div className="Cliente">
            <div className="Cliente1">
                <h5>João Victor</h5>
                <div className="InformacaoInferior">
                    <h6>Total de pães:</h6>
                    <h6>Total a pagar:</h6>
                </div>
            </div>
            <Image src={Lixo} alt=""></Image>
            </div>

            <div className="Cliente">
            <div className="Cliente1">
                <h5>Thales Brito</h5>
                <div className="InformacaoInferior">
                    <h6>Total de pães:</h6>
                    <h6>Total a pagar:</h6>
                </div>
            </div>
            <Image src={Lixo} alt=""></Image>
            </div>

            <div className="Cliente">
            <div className="Cliente1">
                <h5>Ivens Joris</h5>
                <div className="InformacaoInferior">
                    <h6>Total de pães:</h6>
                    <h6>Total a pagar:</h6>
                </div>
            </div>
            <Image src={Lixo} alt=""></Image>
            </div>
        </div>
        </div>
    )
}