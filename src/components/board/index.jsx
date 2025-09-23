import Square from "../square/index.jsx";
import calculateWinner from "../../utils/calculateWinner.js";
import style from "./Board.module.css";

//função que administra o html do tabuleiro e quem joga quando
function Board({ xIsNext, squares, onPlay }) {

    //esta função alterna entre os jogadores e sempre inputa os cliques a função 'calcWinner' para ver se alguém ganhou
    function handleClick(i) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      onPlay(nextSquares);
    }
  
    //define o html que faz o display de quem é a vez ou se alguém venceu
    //salva o input feito a uma função dentro de uma constante, se esta existir, o vencedor é anunciado no display.
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = 'Vencedor: ' + winner;
    } else {
      status = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O');
    }
  
    //html do tabuleiro
    return (
      <>
        <div className={style.status}>{status}</div>
        <div className={style.boardRow}>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className={style.boardRow}>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className={style.boardRow}>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    );
}

export default Board