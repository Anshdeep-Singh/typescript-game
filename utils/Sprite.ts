
export default class Sprite {
    position: { x: number; y: number };
    image: HTMLImageElement | null = null;
    width: number = 20;
    height: number = 20;
    loaded: boolean;
    frameRate: number;
    currentFrame: number;
    elapsedFrames: number;
    frameBuffer: number;
    animations: {
        [key: string]: {
          imageSrc: string;
          image: HTMLImageElement;
          onComplete?: () => void;
          isActive?: boolean;
          frameRate: number; // Add the frameRate property
          frameBuffer: number;
          loop: boolean;
        };
      };    
    loop: boolean;
    autoplay: boolean;
    currentAnimation?: { imageSrc: string; image: HTMLImageElement; onComplete?: () => void; isActive?: boolean };

    constructor({
        position,
        imageSrc,
        frameRate,
        animations,
        frameBuffer = 1,
        loop = true,
        autoplay = true,
        width,
        height,
    }: {
        position: { x: number; y: number };
        imageSrc: string;
        frameRate: number;
        width: number;
        height: number;
        animations?: {
            [key: string]: {
                imageSrc: string;
                image: HTMLImageElement;
                onComplete?: () => void;
                isActive?: boolean;
                frameRate: number; // Add the frameRate property
                frameBuffer: number;
                loop: boolean;
            };
        };
        frameBuffer?: number;
        loop?: boolean;
        autoplay?: boolean;
    }) {
        this.position = position;
        if (typeof document !== 'undefined'){
            this.image = document.createElement('img') 
            this.image.onload = () => {
                this.loaded = true;
                this.width = width / this.frameRate;
                this.height = height;
            };
            this.image.src = imageSrc;
          } else {
            // Do something else 
          }
        this.loaded = false;
        this.frameRate = frameRate;
        this.currentFrame = 0;
        this.elapsedFrames = 0;
        this.frameBuffer = frameBuffer;
        this.animations = animations || {};
        this.loop = loop;
        this.autoplay = autoplay;
        this.currentAnimation;
    
        if (this.animations) {
            for (const key in this.animations) {
                if (Object.prototype.hasOwnProperty.call(this.animations, key)) {
                    if (typeof document !== 'undefined') {
                        const image = document.createElement('img');
                        image.src = this.animations[key].imageSrc;
                        this.animations[key].image = image;
                    }
                }
            }
        }
    }

    draw(c: CanvasRenderingContext2D) {
        if (!this.loaded) return;
        const cropbox = {
            position: {
                x: this.width * this.currentFrame,
                y: 0,
            },
            width: this.width,
            height: this.height,
        };
        
        c.drawImage(
            this.image!,
            cropbox.position.x,
            cropbox.position.y,
            cropbox.width,
            cropbox.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );

        this.updateFrames();
    }

    play() {
        this.autoplay = true;
    }

    updateFrames() {
        if (!this.autoplay) return;

        this.elapsedFrames++;

        if (this.elapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate - 1) this.currentFrame++;
            else if (this.loop) this.currentFrame = 0;
        }

        if (this.currentAnimation?.onComplete) {
            if (
                this.currentFrame === this.frameRate - 1 &&
                !this.currentAnimation.isActive
            ) {
                this.currentAnimation.onComplete();
                this.currentAnimation.isActive = true;
            }
        }
    }
}
