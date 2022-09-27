import "../../style.css";

import complexidade_mapa_1 from "../../imgs/complexidade/Análise de Algorimo.png";
import complexidade_mapa_2 from "../../imgs/complexidade/Algoritmos Gulosos.png";
import complexidade_mapa_3 from "../../imgs/complexidade/Divisão e Conquista.png";
import complexidade_mapa_4 from "../../imgs/complexidade/Programação Dinâmica.png";
import complexidade_mapa_5 from "../../imgs/complexidade/Backtracking.png";
import complexidade_mapa_6 from "../../imgs/complexidade/Branch and Bound.png";

import AdSense from 'react-adsense';
import Footer from "../../Components/Footer/Footer";

function Complexidade() {
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
                        <h2 className="nome-materia">Análise de Algorimo</h2>
                        <img src={complexidade_mapa_1} alt="Mapa 1 de Complexidade de Algortimos" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Algoritmos Gulosos</h2>
                        <img src={complexidade_mapa_2} alt="Mapa 2 de Complexidade de Algortimos" />
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
                        <h2 className="nome-materia">Divisão e Conquista</h2>
                        <img src={complexidade_mapa_3} alt="Mapa 3 de Complexidade de Algortimos" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Programação Dinâmica</h2>
                        <img src={complexidade_mapa_4} alt="Mapa 4 de Complexidade de Algortimos" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Backtracking</h2>
                        <img src={complexidade_mapa_5} alt="Mapa 5 de Complexidade de Algortimos" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Branch and Bound</h2>
                        <img src={complexidade_mapa_6} alt="Mapa 6 de Complexidade de Algortimos" />
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Complexidade;