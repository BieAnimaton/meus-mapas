import "../../style.css";

import complexidade_mapa_1 from "../../imgs/complexidade/Análise de Algorimo.png";
import complexidade_mapa_2 from "../../imgs/complexidade/Algoritmos Gulosos.png";
import complexidade_mapa_3 from "../../imgs/complexidade/Divisão e Conquista.png";
import complexidade_mapa_4 from "../../imgs/complexidade/Programação Dinâmica.png";
import complexidade_mapa_5 from "../../imgs/complexidade/Backtracking.png";
import complexidade_mapa_6 from "../../imgs/complexidade/Branch and Bound.png";

function Complexidade() {
    return (
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
    );
}

export default Complexidade;