import { Entity, game, Body, input } from "melonjs";

class PlayerEntity extends Entity {

    getBody() {
        return this.body as unknown as Body;
    }

    /**
     * constructor
     */
    constructor(x: number, y: number, settings: any) {
        // call the parent constructor
        super(x, y , settings);

        this.getBody().setMaxVelocity(3, 15);
        this.getBody().setFriction(0.4, 0);

        game.viewport.follow(this.pos, game.viewport.AXIS.BOTH);

        this.alwaysUpdate = true;
    }

    /**
     * update the entity
     */
    update(dt: number) {
        if (input.isKeyPressed("left")) {
            this.flipX(true);
            this.getBody().force.x = -this.getBody().maxVel.x;
        } else if (input.isKeyPressed("right")) {
            this.flipX(false);
            this.getBody().force.x = this.getBody().maxVel.x;
        } else if (input.isKeyPressed("up")) {
            this.getBody().force.y = -this.getBody().maxVel.y;
        } else if (input.isKeyPressed("down")) {
            this.getBody().force.y = this.getBody().maxVel.y;
        }

        return super.update(dt);
    }

   /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision(response: any, other: any) {
        // Make all other objects solid
        return true;
    }
};

export default PlayerEntity;
