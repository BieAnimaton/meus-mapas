import "../../style.css";

import banco_mapa_1 from "../../imgs/banco/Engenharia de Banco de Dados.png";
import banco_mapa_2 from "../../imgs/banco/Projeto Conceitual 1.png";
import banco_mapa_3 from "../../imgs/banco/Projeto Conceitual 2.png";
import banco_mapa_4 from "../../imgs/banco/Requisitos e Regras de Negócio.png";
import banco_mapa_5 from "../../imgs/banco/Projeto Lógico Relacional I.png";
import banco_mapa_6 from "../../imgs/banco/Projeto Lógico Relacional II.png";

import AdSense from 'react-adsense';
import Footer from "../../Components/Footer/Footer";

function Banco() {
    return (
        <div>
            <AdSense.Google
                client='ca-pub-4481078020462017'
                slot='5215784884'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
            />
            <article>
                <div className="complexidade">
                    <div>
                        <h2 className="nome-materia">Engenharia de Banco de Dados</h2>
                        <img src={banco_mapa_1} alt="Mapa 1 de Banco de Dados" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Projeto Conceitual 1</h2>
                        <img src={banco_mapa_2} alt="Mapa 2 de Banco de Dados" />
                    </div>
                    <AdSense.Google
                        client='ca-pub-4481078020462017'
                        slot='5215784884'
                        style={{ display: 'block' }}
                        format='auto'
                        responsive='true'
                        layoutKey='-gw-1+2a-9x+5c'
                    />
                    <div>
                        <h2 className="nome-materia">Projeto Conceitual 2</h2>
                        <img src={banco_mapa_3} alt="Mapa 3 de Banco de Dados" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Requisitos e Regras de Negócio</h2>
                        <img src={banco_mapa_4} alt="Mapa 4 de Banco de Dados" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Projeto Lógico Relacional I</h2>
                        <img src={banco_mapa_5} alt="Mapa 5 de Banco de Dados" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Projeto Lógico Relacional II</h2>
                        <img src={banco_mapa_6} alt="Mapa 6 de Banco de Dados" />
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Banco;