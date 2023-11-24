import { PathMe } from "./path";
import { ZodError, z } from "zod";

const windowMessage = document.getElementById("windowMessage");
// human will never open two windows at the same time
const id = String(Date.now());
let otherWindowId: boolean | string = false;

const WindowDetails = z.object({
  x: z.number(),
  y: z.number(),
  screenHeight: z.number(),
  screenWidth: z.number(),
  width: z.number(),
  height: z.number(),  
  updated: z.number(),
});
type WindowDetails = z.infer<typeof WindowDetails>;

setInterval(() => {
  // console.log("test")
  const windowEntry: WindowDetails = {
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
        const otherWindow: WindowDetails = WindowDetails.parse(JSON.parse(entry[1]));
        if (!otherWindowId) {
          otherWindowId = entry[0];
        }
      }
      catch (error) {
        console.log(error)
      }
    } 
  }
 
  if (otherWindowId) {
    windowMessage!.innerText = "";
  }

  
}, 500);