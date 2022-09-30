import "../../style.css";

import arquitetura_ii_mapa_1 from "../../imgs/arquitetura/Padronização de Termos.png";
import arquitetura_ii_mapa_2 from "../../imgs/arquitetura/CPU.png";
import arquitetura_ii_mapa_3 from "../../imgs/arquitetura/Interação entre componentes internos.png";
import arquitetura_ii_mapa_4 from "../../imgs/arquitetura/Etapas execução instrução.png";
import arquitetura_ii_mapa_5 from "../../imgs/arquitetura/Arquitetura de Von Neumann.png";
import arquitetura_ii_mapa_6 from "../../imgs/arquitetura/Controlador.png";

import Mapa from "../../Components/Mapa/Mapa";

function Arquitetura() {
    return (
        <article>
            <div className="wrap">
                <Mapa
                    titulo="Padronização de Termos"
                    image={arquitetura_ii_mapa_1}
                    alt="Mapa 1 de Arquitetura e Organização de Computadores"
                />
                <Mapa
                    titulo="CPU"
                    image={arquitetura_ii_mapa_2}
                    alt="Mapa 2 de Arquitetura e Organização de Computadores"
                />
                <Mapa
                    titulo="Etapas execução instrução"
                    image={arquitetura_ii_mapa_3}
                    alt="Mapa 3 de Arquitetura e Organização de Computadores"
                />
                <Mapa
                    titulo="Etapas execução instrução"
                    image={arquitetura_ii_mapa_4}
                    alt="Mapa 4 de Arquitetura e Organização de Computadores"
                />
                <Mapa
                    titulo="Arquitetura de Von Neumann"
                    image={arquitetura_ii_mapa_5}
                    alt="Mapa 5 de Arquitetura e Organização de Computadores"
                />
                <Mapa
                    titulo="Controlador"
                    image={arquitetura_ii_mapa_6}
                    alt="Mapa 6 de Arquitetura e Organização de Computadores"
                    textoExtra="Mais informações e alguns códigos:"
                    textoExtra2="GitHub - Códigos Assembly Neander, Ahmes e Daedalus"
                    link="https://github.com/BieAnimaton/codigs_Assembly_facul"
                />
            </div>
        </article>
    );
}

export default Arquitetura;