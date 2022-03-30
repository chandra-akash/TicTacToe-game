import React from "react";
import Square from "./Square";
import styles from "./css/index.module.css";

const Board = ({ squares, onClick }) => (
  <div className={styles.board}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
