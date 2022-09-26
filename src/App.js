import "./style.css"

import complexidade_mapa_1 from "./imgs/Análise de Algorimo.png";
import complexidade_mapa_2 from "./imgs/Algoritmos Gulosos.png";
import complexidade_mapa_3 from "./imgs/Divisão e Conquista.png";
import complexidade_mapa_4 from "./imgs/Programação Dinâmica.png";
import complexidade_mapa_5 from "./imgs/Backtracking.png";
import complexidade_mapa_6 from "./imgs/Branch and Bound.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meus Mapas</h1>
        <h2>Mapas mentais feitos para ajudar nos meus estudos da faculdade.</h2>
      </header>
      <hr></hr>
      <div className="materias">
        <h3>Complexidade de Algoritmos</h3>
        <h3>Sistema de Banco de Dados</h3>
        <h3>Projeto Interdisciplinar de Computação</h3>
        <h3>Sistemas Operacionais II</h3>
        <h3>Arquitetura e Organização de Computadores</h3>
        <h3>Teoria dos Grafos</h3>
        <h3>Circuitos Eletrônicos</h3>
      </div>
      <hr></hr>
      <article>
        <div className="complexidade">
          <div>
            <h2 className="nome-materia">Análise de Algorimo</h2>
            <img src={complexidade_mapa_1} alt="Mapa 1 de Complexidade de Algortimos" />
          </div>
          <div>
            <h2 className="nome-materia">Algoritmos Gulosos</h2>
            <img src={complexidade_mapa_2} alt="Mapa 1 de Complexidade de Algortimos" />
          </div>
          <div>
            <h2 className="nome-materia">Divisão e Conquista</h2>
            <img src={complexidade_mapa_3} alt="Mapa 1 de Complexidade de Algortimos" />
          </div>
          <div>
            <h2 className="nome-materia">Programação Dinâmica</h2>
            <img src={complexidade_mapa_4} alt="Mapa 1 de Complexidade de Algortimos" />
          </div>
          <div>
            <h2 className="nome-materia">Backtracking</h2>
            <img src={complexidade_mapa_5} alt="Mapa 1 de Complexidade de Algortimos" />
          </div>
          <div>
            <h2 className="nome-materia">Branch and Bound</h2>
            <img src={complexidade_mapa_6} alt="Mapa 1 de Complexidade de Algortimos" />
          </div>
        </div>
      </article>
      <footer>
        <p>&copy; 2022 Gabriel Cossare Bragion</p>
      </footer>
    </div>
  );
}

export default App;
