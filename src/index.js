import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// component
const AppGame = () => {
  /**
   * Game Title
   */
  const title = (
    <div className="title">
      <img src="assets/imgs/game-zone.png" alt="Game Zone" className="logo" />
      <h1>Jogo do Chute</h1>
      <h4>Escolha um número de 0 até 300!</h4>
    </div>
  );

  /**
   * ENTRADA, RODANDO, FIM
   */

  const [estado, setEstado] = useState("Entrada");

  /**
   * Palpites
   */
  const [palpite, setPalpite] = useState();
  const [numPalpites, setnumPalpites] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  /**
   * Iniciar Jogo
   */
  const iniciarJogo = () => {
    setEstado("Rodando");
    setMin(0);
    setMax(300);
    setnumPalpites(1);
    setPalpite(Math.floor(Math.random() * 300 + 1));
  };
  if (estado === "Entrada") {
    return (
      <div className="game">
        {title}
        <button onClick={iniciarJogo}>Iniciar Jogo!</button>
      </div>
    );
  }

  /**
   * Set min
   */
  const menor = () => {
    setnumPalpites(numPalpites + 1);
    setMax(palpite);
    setPalpite(parseInt((palpite - min) / 2) + min);
  };

  /**
   * Set min
   */
  const maior = () => {
    setnumPalpites(numPalpites + 1);
    setMin(palpite);
    setPalpite(parseInt((max - palpite) / 2) + palpite);
  };

  /**
   * Acertou
   */
  const acertou = () => {
    setEstado("Fim");
  };
  if (estado === "Fim") {
    return (
      <div className="game">
        {title}
        <p>
          Acertei depois de <strong> {numPalpites}</strong> chute(s).
        </p>
        <button onClick={iniciarJogo}>Jogar Novamente!</button>
      </div>
    );
  }

  return (
    <div className="game">
      {title}
      <p className="result">
        Vamos chutar este: <strong>{palpite}</strong> é o seu número?
      </p>

      <button onClick={menor}>Errou, é menor.</button>
      <button onClick={acertou}>Acertou Miseravi!</button>
      <button onClick={maior}>Errou, é maior.</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<AppGame />, rootElement);
