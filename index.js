import { z } from "zod";
var windowMessage = document.getElementById("windowMessage");
var id = Math.random().toString(36).substring(7);
var otherWindowId;
var WindowDetails = z.object({
    x: z.number(),
    y: z.number(),
    screenHeight: z.number(),
    screenWidth: z.number(),
    width: z.number(),
    height: z.number(),
    id: z.string(),
    updated: z.number(),
});
setInterval(function () {
    console.log("interval runnign");
    var windowEntry = {
        x: window.screenX,
        y: window.screenY,
        screenWidth: window.screen.availWidth,
        screenHeight: window.screen.availHeight,
        width: window.outerWidth,
        height: window.outerHeight,
        updated: Date.now(),
    };
    window.localStorage.setItem(id, JSON.stringify(windowEntry));
    var storage = Object.entries(window.localStorage);
    for (var _i = 0, storage_1 = storage; _i < storage_1.length; _i++) {
        var entry = storage_1[_i];
        if (entry[0] != id && (!otherWindowId || entry[0] == otherWindowId)) {
            try {
                var otherWindow = WindowDetails.parse(entry);
                if (!otherWindowId) {
                    otherWindowId = entry[0];
                }
            }
            catch (ZodError) {
                continue;
            }
        }
    }
    if (otherWindowId) {
        windowMessage.innerText = "bob";
    }
}, 500);
