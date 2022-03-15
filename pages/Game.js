import TicTacToeCell from "../components/TicTacToeCell";
import styles from "../styles/Game.module.scss";
import { useState, useEffect } from "react";
import { determineWinner } from "../components/DetermineWinner";
export default function Game() {
  const [gameState, setGameState] = useState([]);
  const [gameSize, setGameSize] = useState(15);
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
    console.table(arr);
    setGameState(arr);
  };

  useEffect(() => {
    initialazeGameState();
  }, []);

  const updateState = (index) => {
    let cordinents = index.split("-");
    let gameStateCopy = gameState;
    gameStateCopy[cordinents[0]][cordinents[1]] = player ? 1 : 2;
    setGameState(gameStateCopy);
    console.table(gameState);
  };

  const handleOnCellClick = (index) => {
    setPlayer(!player);
    updateState(index);
    determineWinner(index);
  };
  return (
    <div>
      <h1>hello it is game time</h1>
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
                    index={`${indexColumn}-${indexRow}`}
                  ></TicTacToeCell>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
