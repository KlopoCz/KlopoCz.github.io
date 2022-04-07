import TicTacToeCell from "../components/TicTacToeCell";
import styles from "../styles/Game.module.scss";
import { useState, useEffect } from "react";
import { determineWinner } from "../components/DetermineWinner";
import Alert from "../components/Alert";
export default function Game() {
  const [initialGameState, setInitialGameState] = useState([]);
  const [gameState, setGameState] = useState([]);
  //also required to change in game.module.css
  const [gameSize, setGameSize] = useState(15);
  // ----
  const [gameStatus, setGameStatus] = useState(false);
  const [player, setPlayer] = useState(true);

  const initialazeGameState = () => {
    //create a 2D array where a game state will be stored
    let arr = [];
    for (let x = 0; x < gameSize; x++) {
      let arrRow = [];
      for (let y = 0; y < gameSize; y++) {
        arrRow = [...arrRow, 0];
      }
      arr = [...arr, arrRow];
    }

    return arr;
  };

  const gameRestart = () => {
    setGameStatus(false);
    setGameState(initialazeGameState());
    setPlayer(true);
  };

  useEffect(() => {
    gameRestart();
  }, []);

  const updateState = (index) => {
    let gameStateCopy = gameState;
    gameStateCopy[index[0]][index[1]] = player ? 1 : 2;
    setGameState(gameStateCopy);
  };

  const handleOnCellClick = (index) => {
    if (!gameStatus) {
      setPlayer(!player);
      updateState(index);
      setGameStatus(determineWinner(index, gameState, player));
    }
  };
  return (
    <div>
      <h1 className={styles.titel}>TicTacToe</h1>
      <div className={styles.gameContainer}>
        {gameState.map((elementColumn, indexColumn) => {
          return (
            <div className={styles.gameContainerRow} key={indexColumn}>
              {gameState[indexColumn].map((elementRow, indexRow) => {
                return (
                  <TicTacToeCell
                    player={player}
                    handleOnCellClick={handleOnCellClick}
                    key={`${indexColumn}-${indexRow}`}
                    index={[indexColumn, indexRow]}
                    gameStatus={gameStatus}
                    gameState={gameState}
                  ></TicTacToeCell>
                );
              })}
            </div>
          );
        })}
      </div>
      {gameStatus ? <Alert gameRestart={gameRestart}></Alert> : ""}
    </div>
  );
}
