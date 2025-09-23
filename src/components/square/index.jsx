import style from './Square.module.css'
//componente que define o html e as funções dos campos de jogada.
function Square({ value, onSquareClick }) {
    return (
      <button className={style.square} onClick={onSquareClick}>
        {value}
      </button>
    );
  }

export default Square