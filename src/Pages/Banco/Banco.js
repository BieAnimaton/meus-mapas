import "../../style.css";

import banco_mapa_1 from "../../imgs/banco/Engenharia de Banco de Dados.png";
import banco_mapa_2 from "../../imgs/banco/Projeto Conceitual 1.png";
import banco_mapa_3 from "../../imgs/banco/Projeto Conceitual 2.png";
import banco_mapa_4 from "../../imgs/banco/Requisitos e Regras de Negócio.png";
import banco_mapa_5 from "../../imgs/banco/Projeto Lógico Relacional I.png";
import banco_mapa_6 from "../../imgs/banco/Projeto Lógico Relacional II.png";

import Mapa from "../../Components/Mapa/Mapa";

function Banco() {
    return (
        <article>
            <div className="banco">
                <Mapa
                    titulo="Engenharia de Banco de Dados"
                    image={banco_mapa_1}
                    alt="Mapa 1 de Banco de Dados"
                />
                <Mapa
                    titulo="Projeto Conceitual 1"
                    image={banco_mapa_2}
                    alt="Mapa 2 de Banco de Dados"
                />
                <Mapa
                    titulo="Projeto Conceitual 2"
                    image={banco_mapa_3}
                    alt="Mapa 3 de Banco de Dados"
                />
                <Mapa
                    titulo="Requisitos e Regras de Negócio"
                    image={banco_mapa_4}
                    alt="Mapa 4 de Banco de Dados"
                />
                <Mapa
                    titulo="Projeto Lógico Relacional I"
                    image={banco_mapa_5}
                    alt="Mapa 5 de Banco de Dados"
                />
                <Mapa
                    titulo="Projeto Lógico Relacional II"
                    image={banco_mapa_6}
                    alt="Mapa 6 de Banco de Dados"
                />
            </div>
        </article>
    );
}

export default Banco;