import TicTacToeCell from "../components/TicTacToeCell";
import styles from "../styles/Game.module.scss";
import { useState, useEffect, useCallback } from "react";
import { determineWinner } from "../components/DetermineWinner";
import Alert from "../components/Alert";
import { AnimatePresence } from "framer-motion";

export default function Game() {
  const [gameState, setGameState] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [gameStatus, setGameStatus] = useState(false);
  const [player, setPlayer] = useState(false);
  const [uttermostCordinents, setUttermostCordinents] = useState([]);
  const gameRestart = () => {
    setGameStatus(false);
    setGameState((gameState) => {
      gameState = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];
      return gameState;
    });
    setPlayer(false);
  };

  useEffect(() => {
    gameRestart();
  }, []);

  const changePlayer = useCallback((indexRow, indexColumn) => {
    setPlayer((player) => {
      player = !player;

      setGameState((gameState) => {
        gameState[indexColumn][indexRow] = player ? 1 : 2;
        let result = determineWinner([indexColumn, indexRow], gameState, player);
        setGameStatus(result.status);
        setUttermostCordinents(result.uttermost);
        return gameState;
      });
      return player;
    });
  }, []);

  return (
    <div>
      <h1 className={styles.titel}>TicTacToe</h1>
      <div className={styles.container}>
        {gameStatus ? (
          <div className={styles.svgCont}>
            <svg className={styles.svg} viewBox="0 0 820 820" xmlns="http://www.w3.org/2000/svg">
              <line
                className={styles.svgLine}
                x1={uttermostCordinents[0][1] * 50 + (uttermostCordinents[0][1] - 1) * 5 + 30}
                y1={uttermostCordinents[0][0] * 50 + (uttermostCordinents[0][0] - 1) * 5 + 30}
                x2={uttermostCordinents[1][1] * 50 + (uttermostCordinents[1][1] - 1) * 5 + 30}
                y2={uttermostCordinents[1][0] * 50 + (uttermostCordinents[1][0] - 1) * 5 + 30}
                stroke="black"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
        <div className={styles.gameContainer}>
          {gameState.map((elementColumn, indexColumn) => {
            return (
              <div className={styles.gameContainerRow} key={indexColumn}>
                {gameState[indexColumn].map((elementRow, indexRow) => {
                  return (
                    <TicTacToeCell
                      indexRow={indexRow}
                      indexColumn={indexColumn}
                      key={indexRow}
                      elementRow={elementRow}
                      changePlayer={elementRow === 0 ? changePlayer : undefined}
                    ></TicTacToeCell>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <AnimatePresence>{gameStatus ? <Alert gameRestart={gameRestart}></Alert> : ""}</AnimatePresence>
    </div>
  );
}
