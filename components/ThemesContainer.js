import { ThemeContext } from "./Theams";
import { useContext, useEffect } from "react";
import ThemeButton from "./ThemeButton";
import styles from "../styles/ThemesContainer.module.scss";
export default function ThemesContainer() {
  const { themesState, setThemesState } = useContext(ThemeContext);
  const changeTheme = (choice) => {
    if (choice !== themesState.currentTheme)
      setThemesState({
        ...themesState,
        currentTheme: choice,
      });
  };
  useEffect(() => {
    let root = document.documentElement;

    root.style.setProperty("--primary", themesState.themes[themesState.currentTheme].colors.primary);
    root.style.setProperty("--secondary", themesState.themes[themesState.currentTheme].colors.secondary);
    root.style.setProperty("--shadow", themesState.themes[themesState.currentTheme].colors.shadow);
    root.style.setProperty("--font-color", themesState.themes[themesState.currentTheme].colors.fontColor);
    root.style.setProperty("--font-color-2", themesState.themes[themesState.currentTheme].colors.fontColor2);
    root.style.setProperty("--font-color-alert", themesState.themes[themesState.currentTheme].colors.fontColorAlert);
    root.style.setProperty("--button-color", themesState.themes[themesState.currentTheme].colors.buttonColor);
    root.style.setProperty("--button-color-text", themesState.themes[themesState.currentTheme].colors.buttonColorText);
    root.style.setProperty("--alert-background", themesState.themes[themesState.currentTheme].colors.alertBackground);
    root.style.setProperty("--input-underline", themesState.themes[themesState.currentTheme].colors.inputUnderline);
    root.style.setProperty("--home-button", themesState.themes[themesState.currentTheme].colors.homeButton);
    root.style.setProperty("--home-button-text", themesState.themes[themesState.currentTheme].colors.homeButtonText);
    root.style.setProperty("--home-input", themesState.themes[themesState.currentTheme].colors.homeInput);
    root.style.setProperty("--X", themesState.themes[themesState.currentTheme].colors.X);
    root.style.setProperty("--O", themesState.themes[themesState.currentTheme].colors.O);
  }, [themesState.currentTheme]);
  return (
    <div className={styles.Cont}>
      <ThemeButton
        changeTheme={changeTheme}
        border={themesState.currentTheme === "classic" ? "4px solid #FFFFFF " : "none"}
        color="linear-gradient(to right bottom, rgb(66,211,182) 50%, rgb(4,41,46) 50%) "
        text="classic"
      ></ThemeButton>

      <ThemeButton
        changeTheme={changeTheme}
        border={themesState.currentTheme === "light" ? "4px solid #212121 " : "none"}
        color="linear-gradient(to right bottom, rgba(36,75,94,1) 50%, rgba(255,255,255,1) 50%)"
        text="light"
      ></ThemeButton>
      <ThemeButton
        changeTheme={changeTheme}
        border={themesState.currentTheme === "dark" ? "4px solid #FFFFFF " : "none"}
        color="linear-gradient(56deg, rgba(33,33,33,1) 50%, rgba(33,33,33,1) 50%)"
        text="dark"
      ></ThemeButton>
    </div>
  );
}
