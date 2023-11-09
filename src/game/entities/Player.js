import { Entity, game, Body, input, Sprite, Vector2d } from "melonjs";
import { PhysicsEntity } from "./PhysicsEntity";

class PlayerEntity extends PhysicsEntity {


    /**
     * constructor
     */
    constructor(x, y, settings) {
        // call the parent constructor
        super(x, y , settings);

        game.viewport.follow(this.pos, game.viewport.AXIS.BOTH);

        this.alwaysUpdate = true;

        console.log(settings)

        this.renderable = new Sprite(0, 0, {
            image : "playerSpriteSheet",
            framewidth : settings.framewidth,
            frameheight : settings.frameheight,
        });
        this.renderable.scale(1, 1);
        this.anchorPoint.set(-1, 0);
        
        /* @ts-ignore */
        this.renderable.addAnimation("idle",  [12, 13, 14, 15]);
        this.renderable.addAnimation("run", [36, 37, 38, 39, 40])
        this.renderable.setCurrentAnimation("idle");
    }

    /**
     * update the entity
     */
    update(dt) {
        let isRunning = false;
        if (input.isKeyPressed("left")) {
            this.renderable.flipX(true);
            this.moveX(-2)
            console.log("left")
            isRunning = true;
        } if (input.isKeyPressed("right")) {
            this.renderable.flipX(false);
            this.moveX(2);
            console.log("right")
            isRunning = true;
        } if (input.isKeyPressed("up")) {
            this.moveY(-2);
            console.log("up")
            isRunning = true;
        } if (input.isKeyPressed("down")) {
            this.moveY(2);
            console.log("down")
            isRunning = true;
        }

        if (isRunning) {
            this.renderable.setCurrentAnimation("run");
        } else {
            this.renderable.setCurrentAnimation("idle");
        }

        return super.update(dt);
    }

   /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision(response, other) {
        // Make all other objects solid
        return true;
    }
};

export default PlayerEntity;
