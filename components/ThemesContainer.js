import { ThemeContext } from "./Theams";
import { useContext, useEffect } from "react";
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
    root.style.setProperty("--X", themesState.themes[themesState.currentTheme].colors.X);
    root.style.setProperty("--O", themesState.themes[themesState.currentTheme].colors.O);
  }, [themesState.currentTheme]);
  return (
    <div>
      <div onClick={() => changeTheme("classic")}>classic</div>
      <div onClick={() => changeTheme("light")}>light</div>
      <div onClick={() => changeTheme("dark")}>dark</div>
    </div>
  );
}
