import { ThemeContext } from "../components/Theams";
import "../styles/globals.css";
import { useState } from "react";
const colors = {
  green: "#2ec2a0",
  darkBlue: "#04292e",
  transparentGray: "rgba(32, 32, 33, 0.25)",
  mutedWhite: "#dddddd",
  lightMutedWhite: "#eeeeee",
  mutedBlack: "#212121",
  red: "#D43A30",
  white: "#F8FDFC",
  lightBlue: "#244B5E",
  grey: "#989FA5",
  black: "#1A1A1A",
  blue: "#167AE0",
};
const {
  green,
  darkBlue,
  transparentGray,
  mutedWhite,
  lightMutedWhite,
  mutedBlack,
  red,
  white,
  lightBlue,
  grey,
  black,
  blue,
} = colors;
const themes = {
  classic: {
    colors: {
      primary: green,
      secondary: darkBlue,
      shadow: transparentGray,
      alertBackground: mutedWhite,
      fontColor: mutedBlack,
      fontColor2: mutedWhite,
      fontColorAlert: mutedBlack,
      buttonColor: green,
      buttonColorText: mutedBlack,
      X: red,
      O: white,
    },
    font: "",
  },
  light: {
    colors: {
      primary: lightMutedWhite,
      secondary: lightBlue,
      shadow: transparentGray,
      alertBackground: lightMutedWhite,
      fontColor: mutedBlack,
      fontColor2: mutedWhite,
      fontColorAlert: mutedBlack,
      buttonColor: lightBlue,
      buttonColorText: mutedWhite,
      X: red,
      O: grey,
    },
    font: "",
  },
  dark: {
    colors: {
      primary: mutedBlack,
      secondary: mutedWhite,
      shadow: transparentGray,
      alertBackground: lightMutedWhite,
      fontColor: mutedWhite,
      fontColor2: mutedBlack,
      fontColorAlert: mutedBlack,
      buttonColor: mutedBlack,
      buttonColorText: mutedWhite,
      X: red,
      O: blue,
    },
    font: "",
  },
};
function MyApp({ Component, pageProps }) {
  const [themesState, setThemesState] = useState({ themes, currentTheme: "classic" });
  return (
    <ThemeContext.Provider value={{ themesState, setThemesState }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
