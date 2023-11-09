import { Stage, game, ColorLayer, BitmapText, level  } from "melonjs";

class PlayScreen extends Stage {
    
    /**
     *  action to perform on state change
     */
    onResetEvent() {

        level.load("Tilemap", {
            "container" : game.world,
            "onLoaded"  : ()=> {
                // set the background to black
                game.world.backgroundColor.setColor(0, 0, 0);
                // force redraw
                game.repaint();
                console.log("Tilemap loaded")
            }
        });
    }
};

export default PlayScreen;
