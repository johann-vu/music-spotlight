const DARK_MODE_CLASS = "dark-mode";
const DARK_MODE_ON = "dark";

import { Config } from "../config";

export function ToggleDarkMode() {
    let state = document.body.classList.contains(DARK_MODE_CLASS)
    SetDarkMode(!state)
}

export function StartListeningForDarkMode() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    SetDarkMode(true)
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newColorScheme = e.matches ? "dark" : "light";
      console.log("detected change: " + newColorScheme);
      SetDarkMode(newColorScheme === DARK_MODE_ON);
    });
}

function SetDarkMode(darkModeOn) {
    if (Config.EnableDarkMode) {
      darkModeOn ? turnOnDarkMode() : turnOffDarkMode();
    } else if (darkModeOn) {
      console.log("Dark mode is disabled.");
    }
  }

function turnOnDarkMode() {
  if (!document.body.classList.contains(DARK_MODE_CLASS)) {
    document.body.classList.add(DARK_MODE_CLASS);
  }
}

function turnOffDarkMode() {
  if (document.body.classList.contains(DARK_MODE_CLASS)) {
    document.body.classList.remove(DARK_MODE_CLASS);
  }
}
