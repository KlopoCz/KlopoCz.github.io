import styles from "../styles/TicTacToeCell.module.scss";
import { useState, memo, useEffect, useContext } from "react";
import { ThemeContext } from "./Theams";

function TicTacToeCell({ indexRow, indexColumn, elementRow, changePlayer }) {
  const [played, setPlayed] = useState(false);
  const { themesState, setThemesState } = useContext(ThemeContext);

  useEffect(() => {
    if (elementRow === 0) setPlayed(false);
  }, [elementRow]);

  return (
    <div
      className={styles.playerNone}
      onClick={() => {
        if (!played) {
          setPlayed(true);

          changePlayer(indexRow, indexColumn);
        }
      }}
    >
      {played ? (
        elementRow === 1 ? (
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
                <rect width="100" height="100" fill={themesState.themes[themesState.currentTheme].colors.primary} />
                <g id="reg">
                  <rect
                    className={styles.reg1}
                    x="22"
                    y="28.364"
                    width="9"
                    height="69"
                    rx="4.5"
                    transform="rotate(-45 22 28.364)"
                    fill={themesState.themes[themesState.currentTheme].colors.X}
                  />
                  <rect
                    className={styles.reg2}
                    x="70.7903"
                    y="22"
                    width="9"
                    height="69"
                    rx="4.5"
                    transform="rotate(45 70.7903 22)"
                    fill={themesState.themes[themesState.currentTheme].colors.X}
                  />
                </g>
              </g>
            </svg>
          </div>
        ) : (
          <div>
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" fill={themesState.themes[themesState.currentTheme].colors.primary}></rect>
              <circle
                className={styles.circle}
                cx="50"
                cy="50"
                r="27"
                stroke={themesState.themes[themesState.currentTheme].colors.O}
                strokeWidth="9"
                fillOpacity="0"
              />
            </svg>
          </div>
        )
      ) : (
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="noneCont">
            <rect width="100" height="100" fill={themesState.themes[themesState.currentTheme].colors.primary} />
          </g>
        </svg>
      )}
    </div>
  );
}

export default memo(TicTacToeCell);
