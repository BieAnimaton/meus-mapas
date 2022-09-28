import "../../style.css";

import so_ii_mapa_1 from "../../imgs/so_ii/Processo Tradicional.png";
import so_ii_mapa_2 from "../../imgs/so_ii/Processo Thread.png";
import so_ii_mapa_3 from "../../imgs/so_ii/Memória I.png";
import so_ii_mapa_4 from "../../imgs/so_ii/Memória II.png";

import Mapa from "../../Components/Mapa/Mapa";

function SO_II() {
    return (
        <article>
            <div className="so_ii">
                <Mapa
                    titulo="Processo Tradicional"
                    image={so_ii_mapa_1}
                    alt="Mapa 1 de Sistemas Operacionais II"
                />
                <Mapa
                    titulo="Processo Thread"
                    image={so_ii_mapa_2}
                    alt="Mapa 2 de Sistemas Operacionais II"
                />
                <Mapa
                    titulo="Memória I"
                    image={so_ii_mapa_3}
                    alt="Mapa 3 de Sistemas Operacionais II"
                />
                <Mapa
                    titulo="Memória II"
                    image={so_ii_mapa_4}
                    alt="Mapa 4 de Sistemas Operacionais II"
                />
            </div>
        </article>
    );
}

export default SO_II;