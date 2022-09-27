import AdSense from 'react-adsense';
import { BrowserRouter as Router, Link } from "react-router-dom";

function Menu() {
    return (
        <header>
            <h1>Meus Mapas</h1>
            <h2>Mapas mentais feitos para ajudar nos meus estudos da faculdade.</h2>
            <AdSense.Google
                client='ca-pub-4481078020462017'
                slot='5215784884'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
            />
            <hr></hr>
            <div className="materias">
                {/*<Link to="/cake">cake</Link>*/}
                <Link to="/complexidade"><h3>Complexidade de Algoritmos</h3></Link>
                <Link to="/banco"><h3>Sistema de Banco de Dados</h3></Link>
                <Link to="/projeto"><h3>Projeto Interdisciplinar de Computação</h3></Link>
                <Link to="/so_ii"><h3>Sistemas Operacionais II</h3></Link>
                <Link to="/arquitetura"><h3>Arquitetura e Organização de Computadores</h3></Link>
                <Link to="/grafos"><h3>Teoria dos Grafos</h3></Link>
                <Link to="/circuitos"><h3>Circuitos Eletrônicos</h3></Link>
            </div>
            <hr></hr>
        </header>
    );
}

export default Menu;