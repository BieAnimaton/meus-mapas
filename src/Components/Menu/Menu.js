import { Link } from "react-router-dom";

function Menu() {
    return (
        <header>
            <h1><Link to="/">Meus Mapas</Link></h1>
            <h2>Mapas mentais feitos para ajudar nos meus estudos da faculdade.</h2>
            <hr></hr>
            <div className="materias">
                {/*<Link to="/cake">cake</Link>*/}
                <h3><Link to="/complexidade">Complexidade de Algoritmos</Link></h3>
                <h3><Link to="/banco">Sistema de Banco de Dados</Link></h3>
                <h3><Link to="/projeto">Projeto Interdisciplinar de Computação</Link></h3>
                <h3><Link to="/so_ii">Sistemas Operacionais II</Link></h3>
                <h3><Link to="/arquitetura">Arquitetura e Organização de Computadores</Link></h3>
                <h3><Link to="/grafos">Teoria dos Grafos</Link></h3>
                <h3><Link to="/circuitos">Circuitos Eletrônicos</Link></h3>
            </div>
            <hr></hr>
        </header>
    );
}

export default Menu;