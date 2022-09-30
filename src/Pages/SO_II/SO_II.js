import "../../style.css";

import so_ii_mapa_1 from "../../imgs/so_ii/Processo Tradicional.png";
import so_ii_mapa_2 from "../../imgs/so_ii/Processo Thread.png";
import so_ii_mapa_3 from "../../imgs/so_ii/Memória I.png";
import so_ii_mapa_4 from "../../imgs/so_ii/Memória II.png";
import so_ii_mapa_5 from "../../imgs/so_ii/Gerenciamento do Sistema de Arquivos.png";

import Mapa from "../../Components/Mapa/Mapa";
import { Link } from "react-router-dom";

function SO_II() {
    return (
        <article>
            <div className="wrap">
                <Mapa
                    titulo="Processo Tradicional"
                    image={so_ii_mapa_1}
                    alt="Mapa 1 de Sistemas Operacionais II"
                    textoExtra="Mais informações e alguns códigos:"
                    textoExtra2="GitHub - Processo Tradicional"
                    link="https://github.com/BieAnimaton/codigos_C_processos_e_filhos_tradicionais_linux"
                />
                <Mapa
                    titulo="Processo Thread"
                    image={so_ii_mapa_2}
                    alt="Mapa 2 de Sistemas Operacionais II"
                    textoExtra="Mais informações e alguns códigos:"
                    textoExtra2="GitHub - Processo Thread"
                    link="https://github.com/BieAnimaton/codigos_C_processos_e_filhos_Thread_linux"
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
                                <Mapa
                    titulo="Gerenciamento do Sistema de Arquivos"
                    image={so_ii_mapa_5}
                    alt="Mapa 1 de Sistemas Operacionais II"
                    textoExtra="Mais informações e alguns códigos:"
                    textoExtra2="GitHub - Segmento-de-Memoria-Compartilhada"
                    link="https://github.com/BieAnimaton/Segmento-de-Memoria-Compartilhada"
                />
            </div>
        </article>
    );
}

export default SO_II;