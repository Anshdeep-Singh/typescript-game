export class CollisionBlock {
    position: { x: number; y: number };
    width: number = 64;
    height: number = 64;

    constructor({ position }: { position: { x: number; y: number } }) {
        this.position = position;
    }

    draw(c: CanvasRenderingContext2D) {
        c.fillStyle = 'rgba(255, 0, 0, 0.5)';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
