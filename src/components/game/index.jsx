import Board from "../board/index.jsx";
import { useState } from 'react'

//função que executa a lógica do jogo
function Game() {
  //constantes que definem o histórico, quem joga, quem jogará e define a volta no tempo
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  //função que administra as jogadas, conta as jogadas e adiciona momentos ao hitórico
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  //função que administra as viajens no tempo, é ativa quando algum botão do hitórico é pressionado
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  //define o html do histórico de jogadas
  const moves = history.map((squares, move) => {
    let description;
    //se a quantidade de movimentos for maior que zero, ele coloca o número do movimento no html
    //se for diferente de maior a 0, o html se torna "go to game start"
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    //se algum dos botões do histórico for pressionado, a função de viajem no tempo é chamada
    //e se inputa o valor do movimento
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    //html do board e do histórico
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game