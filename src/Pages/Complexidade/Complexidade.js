import "../../style.css";

import complexidade_mapa_1 from "../../imgs/complexidade/Análise de Algorimo.png";
import complexidade_mapa_2 from "../../imgs/complexidade/Algoritmos Gulosos.png";
import complexidade_mapa_3 from "../../imgs/complexidade/Divisão e Conquista.png";
import complexidade_mapa_4 from "../../imgs/complexidade/Programação Dinâmica.png";
import complexidade_mapa_5 from "../../imgs/complexidade/Backtracking.png";
import complexidade_mapa_6 from "../../imgs/complexidade/Branch and Bound.png";

import Mapa from "../../Components/Mapa/Mapa";

function Complexidade() {
    return (
        <article>
            <div className="complexidade">
                <Mapa
                    titulo="Análise de Algorimo"
                    image={complexidade_mapa_1}
                    alt="Mapa 1 de Complexidade de Algortimos"
                />
                <Mapa
                    titulo="Algoritmos Gulosos"
                    image={complexidade_mapa_2}
                    alt="Mapa 2 de Complexidade de Algortimos"
                />
                <Mapa
                    titulo="Divisão e Conquista"
                    image={complexidade_mapa_3}
                    alt="Mapa 3 de Complexidade de Algortimos"
                />
                <Mapa
                    titulo="Programação Dinâmica"
                    image={complexidade_mapa_4}
                    alt="Mapa 4 de Complexidade de Algortimos"
                />
                <Mapa
                    titulo="Backtracking"
                    image={complexidade_mapa_5}
                    alt="Mapa 5 de Complexidade de Algortimos"
                />
                <Mapa
                    titulo="Branch and Bound"
                    image={complexidade_mapa_6}
                    alt="Mapa 6 de Complexidade de Algortimos"
                />
            </div>
        </article>
    );
}

export default Complexidade;