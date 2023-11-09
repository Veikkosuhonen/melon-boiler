import { input } from "melonjs"

export const initializeInputMap = () => {
    input.bindKey(input.KEY.LEFT, "left");
    input.bindKey(input.KEY.RIGHT, "right");
    input.bindKey(input.KEY.UP, "up");
    input.bindKey(input.KEY.DOWN, "down");
}
