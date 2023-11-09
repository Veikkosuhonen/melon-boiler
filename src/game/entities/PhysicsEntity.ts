import { Entity, Vector2d } from "melonjs";

export class PhysicsEntity extends Entity {
    vel = new Vector2d(0, 0);
    friction = 0.8;

    constructor(x, y, settings) {
        super(x, y, settings);
    }

    moveX(speed) {
        this.vel.x = speed;
    }

    moveY(speed) {
        this.vel.y = speed;
    }

    update(dt: number) {
        super.update(dt);
        this.pos.add(this.vel);
        this.vel.x *= this.friction;
        this.vel.y *= this.friction;
        return true
    }
}