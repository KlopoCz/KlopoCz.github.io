import styles from "../styles/TicTacToeCell.module.scss";
import { useState, useEffect } from "react";

export default function TicTacToeCell({ index, player, handleOnCellClick, gameStatus, gameState }) {
  const [played, setPlayed] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState();
  const setColor = () => {
    setPlayed(true);
    setCurrentPlayer(player);
  };
  useEffect(() => {
    if (gameState[index[0]][index[1]] === 0) setPlayed(false);
  }, [gameState]);
  return (
    <div
      className={styles.playerNone}
      onClick={() => {
        if (!played && !gameStatus) {
          handleOnCellClick(index);
          setColor();
        }
      }}
    >
      {played ? (
        currentPlayer ? (
          <div>
            <svg
              className={styles.svgReg}
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="regCont">
                <rect width="100" height="100" fill="#2ec2a0" />
                <g id="reg">
                  <rect
                    className={styles.reg1}
                    x="22"
                    y="28.364"
                    width="9"
                    height="69"
                    rx="4.5"
                    transform="rotate(-45 22 28.364)"
                    fill="#D43A30"
                  />
                  <rect
                    className={styles.reg2}
                    x="70.7903"
                    y="22"
                    width="9"
                    height="69"
                    rx="4.5"
                    transform="rotate(45 70.7903 22)"
                    fill="#D43A30"
                  />
                </g>
              </g>
            </svg>
          </div>
        ) : (
          <div>
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill="#2ec2a0"></rect>
              <circle
                className={styles.circle}
                cx="50"
                cy="50"
                r="27"
                stroke="#F8FDFC"
                strokeWidth="9"
                fillOpacity="0"
              />
            </svg>
          </div>
        )
      ) : (
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="noneCont">
            <rect width="100" height="100" fill="#2ec2a0" />
          </g>
        </svg>
      )}
    </div>
  );
}
