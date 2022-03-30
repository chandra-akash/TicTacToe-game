import React from "react";
import styles from "./css/index.module.css";

const Square = ({ value, onClick }) =>
{
  const style = value ? `${ styles.squares } ${ value }` : `${ styles.squares }`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
