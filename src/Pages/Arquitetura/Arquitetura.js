import "../../style.css";

import arquitetura_ii_mapa_1 from "../../imgs/arquitetura/Padronização de Termos.png";
import arquitetura_ii_mapa_2 from "../../imgs/arquitetura/CPU.png";
import arquitetura_ii_mapa_3 from "../../imgs/arquitetura/Interação entre componentes internos.png";
import arquitetura_ii_mapa_4 from "../../imgs/arquitetura/Etapas execução instrução.png";
import arquitetura_ii_mapa_5 from "../../imgs/arquitetura/Arquitetura de Von Neumann.png";
import arquitetura_ii_mapa_6 from "../../imgs/arquitetura/Controlador.png";

import AdSense from 'react-adsense';

function Arquitetura() {
    return (
        <div>
            <article>
                <div className="complexidade">
                    <div>
                        <h2 className="nome-materia">Padronização de Termos</h2>
                        <img src={arquitetura_ii_mapa_1} alt="Mapa 1 de Arquitetura e Organização de Computadores" />
                    </div>
                    <div>
                        <h2 className="nome-materia">CPU</h2>
                        <img src={arquitetura_ii_mapa_2} alt="Mapa 2 de Arquitetura e Organização de Computadore" />
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
                        <h2 className="nome-materia">Interação entre componentes internos</h2>
                        <img src={arquitetura_ii_mapa_3} alt="Mapa 3 de Arquitetura e Organização de Computadore" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Etapas execução instrução</h2>
                        <img src={arquitetura_ii_mapa_4} alt="Mapa 4 de Arquitetura e Organização de Computadore" />
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
                        <h2 className="nome-materia">Arquitetura de Von Neumann</h2>
                        <img src={arquitetura_ii_mapa_5} alt="Mapa 5 de Arquitetura e Organização de Computadore" />
                    </div>
                    <div>
                        <h2 className="nome-materia">Controlador</h2>
                        <img src={arquitetura_ii_mapa_6} alt="Mapa 6 de Arquitetura e Organização de Computadore" />
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Arquitetura;