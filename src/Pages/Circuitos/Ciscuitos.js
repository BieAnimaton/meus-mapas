import "../../style.css";

import circuitos_mapa_1 from "../../imgs/circuitos/Física.png";

import Mapa from "../../Components/Mapa/Mapa";

function Circuitos() {
    return (
        <article>
            <div className="banco">
                <Mapa
                    titulo="Fórmulas gerais e conversões"
                    image={circuitos_mapa_1}
                    alt="Mapa 1 de Circuitos Eletrônicos"
                />
            </div>
        </article>
    );
}

export default Circuitos;