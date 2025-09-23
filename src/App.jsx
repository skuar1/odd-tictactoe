import Board from "./components/board";
import Game from "./components/game";
import Square from "./components/square";
import calculateWinner from "./utils/calculateWinner";
import { useState } from 'react'

export default function app(){
  return(
    <>
     <Game />
    </>
  )
}