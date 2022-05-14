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
  almostWhite: "#F8FDFC",
  lightBlue: "#244B5E",
  grey: "#989FA5",
  black: "#1A1A1A",
  blue: "#167AE0",
  white: "#ffffff",
  lowOpacityBlue: "rgba(36, 75, 94,0.2)",
  lowOpacityWhite: "rgba(255,255,255,0.2)",
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
  almostWhite,
  lowOpacityBlue,
  lowOpacityWhite,
} = colors;
const themes = {
  classic: {
    colors: {
      primary: green,
      secondary: darkBlue,
      shadow: transparentGray,
      alertBackground: white,
      fontColor: mutedBlack,
      fontColor2: lightMutedWhite,
      fontColorAlert: mutedBlack,
      buttonColor: green,
      buttonColorText: mutedBlack,
      inputUnderline: mutedBlack,
      homeButton: white,
      homeButtonText: mutedBlack,
      homeInput: lowOpacityWhite,
      X: red,
      O: almostWhite,
    },
    font: "",
  },
  light: {
    colors: {
      primary: white,
      secondary: lightBlue,
      shadow: transparentGray,
      alertBackground: white,
      fontColor: mutedBlack,
      fontColor2: lightMutedWhite,
      fontColorAlert: mutedBlack,
      buttonColor: lightBlue,
      buttonColorText: lightMutedWhite,
      inputUnderline: mutedBlack,
      homeButton: lightBlue,
      homeButtonText: white,
      homeInput: lowOpacityBlue,
      X: red,
      O: grey,
    },
    font: "",
  },
  dark: {
    colors: {
      primary: mutedBlack,
      secondary: lightMutedWhite,
      shadow: transparentGray,
      alertBackground: white,
      fontColor: lightMutedWhite,
      fontColor2: mutedBlack,
      fontColorAlert: mutedBlack,
      buttonColor: mutedBlack,
      buttonColorText: lightMutedWhite,
      inputUnderline: white,
      homeButton: white,
      homeButtonText: mutedBlack,
      homeInput: lowOpacityWhite,
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
