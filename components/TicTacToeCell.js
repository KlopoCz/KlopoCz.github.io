import styles from "../styles/TicTacToeCell.module.scss";
import { useState } from "react";
export default function TicTacToeCell({ index, player, handleOnCellClick }) {
  const [played, setPlayed] = useState(false);
  const [className, setClassName] = useState(styles.playerNone);
  const setColor = () => {
    setClassName(player ? styles.playerBlue : styles.playerRed);
    setPlayed(true);
  };
  return (
    <div
      className={className}
      onClick={() => {
        if (!played) {
          handleOnCellClick(index);
          setColor();
        }
      }}
    ></div>
  );
}
