import "../../style.css";

import so_ii_mapa_1 from "../../imgs/so_ii/Processo Tradicional.png";
import so_ii_mapa_2 from "../../imgs/so_ii/Processo Thread.png";
import so_ii_mapa_3 from "../../imgs/so_ii/Memória I.png";
import so_ii_mapa_4 from "../../imgs/so_ii/Memória II.png";

import AdSense from 'react-adsense';

function SO_II() {
    return (
        <div>
            <article>
                <div className="complexidade">
                    <div>
                        <h2 className="nome-materia">Processo Tradicional</h2>
                        <img src={so_ii_mapa_1} alt="Mapa 1 de Sistemas Operacionais II" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Processo Thread</h2>
                        <img src={so_ii_mapa_2} alt="Mapa 2 de Sistemas Operacionais II" />
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
                        <h2 className="nome-materia">Memória I</h2>
                        <img src={so_ii_mapa_3} alt="Mapa 3 de Sistemas Operacionais II" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Memória II</h2>
                        <img src={so_ii_mapa_4} alt="Mapa 4 de Sistemas Operacionais II" />
                    </div>
                    <AdSense.Google
                        client='ca-pub-4481078020462017'
                        slot='5215784884'
                        style={{ display: 'block' }}
                        format='auto'
                        responsive='true'
                        layoutKey='-gw-1+2a-9x+5c'
                    />
                </div>
            </article>
        </div>
    );
}

export default SO_II;