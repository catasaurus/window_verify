import { PathMe } from "./path";

const windowMessage = document.getElementById("windowMessage");

interface WindowDetails {
  status: "no_window" | "window",
  x: number,
  y: number,
  screenHeight: number,
  screenWidth: number,
  width: number,
  height: number,
  updated: number,
}

setInterval(() => {
  const storage = Object.entries(window.localStorage);
}, 500);
