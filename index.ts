import { PathMe } from "./path";
import { ZodError, z } from "zod";

const windowMessage = document.getElementById("windowMessage");
const id = Math.random().toString(36).substring(7);
let otherWindowId: string;

interface WindowEntry {
  x: number,
  y: number,
  screenHeight: number,
  screenWidth: number,
  width: number,
  height: number, 
  updated: number,
}

const WindowDetails = z.object({
  x: z.number(),
  y: z.number(),
  screenHeight: z.number(),
  screenWidth: z.number(),
  width: z.number(),
  height: z.number(), 
  id: z.string(),
  updated: z.number(),
});
type WindowDetails = z.infer<typeof WindowDetails>;

setInterval(() => {
  console.log("interval runnign")
  const windowEntry: WindowEntry = {
    x: window.screenX,
    y: window.screenY,
    screenWidth: window.screen.availWidth,
    screenHeight: window.screen.availHeight,
    width: window.outerWidth,
    height: window.outerHeight,
    updated: Date.now(),
  }
  window.localStorage.setItem(id, JSON.stringify(windowEntry));

  const storage = Object.entries(window.localStorage);
  for (const entry of storage) {
    if (entry[0] != id && (!otherWindowId || entry[0] == otherWindowId)) {
      try {
        const otherWindow: WindowDetails = WindowDetails.parse(entry);
        if (!otherWindowId) {
          otherWindowId = entry[0];
        }
      }
      catch (ZodError) {
        continue
      }
    } 
  }
 
  if (otherWindowId) {
    windowMessage!.innerText = "bob";
  }
}, 500);
