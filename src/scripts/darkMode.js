const DARK_MODE_CLASS = "dark-mode";
const DARK_MODE_ON = "dark";
const DARK_MODE_OFF = "light";
const DARK_MODE_KEY = "dark-mode";

export function ToggleDarkMode() {
  let state = document.body.classList.contains(DARK_MODE_CLASS);
  SetDarkMode(!state);
}

export function StartListeningForDarkMode() {
  var savedValue = localStorage.getItem(DARK_MODE_KEY)
  if (savedValue) {
    SetDarkMode(savedValue == DARK_MODE_ON)
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    SetDarkMode(true);
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
  localStorage.setItem(DARK_MODE_KEY, darkModeOn ? DARK_MODE_ON : DARK_MODE_OFF)
  darkModeOn ? turnOnDarkMode() : turnOffDarkMode();
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
