"use client"
import { collisionsLevel1, collisionsLevel2, collisionsLevel3, collisionsLevel4, collisionsLevel5 } from "./Collisions"
import { parse2D, createObjectsFrom2D } from "@/helper/ArrayTransformer";
import { Player } from "@/utils/Player";
import gsap from "gsap";
import  Sprite  from "./Sprite";




let parsedCollisions:any = null;
let collisionBlocks : any = null;
let background : Sprite = new Sprite({
    position: {
      x: 0,
      y: 0,
    },
    imageSrc: '',
    width: 1024,
    height: 576,
    frameRate:1,
    });;

let doors: Sprite[] = [
    new Sprite({
      position: {
        x: 767,
        y: 270,
      },
      width: 64,
      height: 64,
      imageSrc: '',
      frameRate: 5,
      frameBuffer: 5,
      loop: false,
      autoplay: false,
        }),
  ];

const overlay = {
    opacity: 0,
  }

let level: number = 1

let player = new Player({
    imageSrc: './img/king/idle.png',
    frameRate: 11,
    height: 116,
    width: 1716,
    animations: {
      jump: {
        frameRate: 11,
        frameBuffer:2,
        loop: true,
        imageSrc: './img/king/Jump.png',
      },
        idleRight: {
            frameRate: 11,
            frameBuffer:2,
            loop: true,
            imageSrc: './img/king/idle.png',
          },
          idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: './img/king/idleLeft.png',
          },
          runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './img/king/runRight.png',
          },
          runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './img/king/runLeft.png',
          },
      enterDoor: {
        frameRate: 8,
        frameBuffer: 4,
        loop: false,
        imageSrc: './img/king/enterDoor.png',
        onComplete: () => {
          console.log('completed animation')
          gsap.to(overlay, {
            opacity: 1,
            onComplete: () => {
              level++
  
              if (level === 6) level = 1
              levels[level].init()
              player.switchSprite('idleRight')
              player.preventInput = false
              gsap.to(overlay, {
                opacity: 0,
              })
            },
          })
        },
      },
    },
  })
  
let levels: { [key: number]: { init: () => void } } = {
    1: {
      init: () => {
        parsedCollisions = parse2D(collisionsLevel1);
        collisionBlocks = createObjectsFrom2D(parsedCollisions);
        player.collisionBlocks = collisionBlocks;
        player.position.x = 170;
        player.position.y = 240;
        if (player.currentAnimation) player.currentAnimation.isActive = false;
  
        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './img/backgroundLevel1.png',
         width: 1024,
            height: 576,
            frameRate:1,
                });
  
        doors = [
          new Sprite({
            position: {
              x: 767,
              y: 270,
            },
            imageSrc: './img/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
            width: 460,
            height: 112,
                    }),
        ];
      },
    },
    2: {
      init: () => {
        parsedCollisions = parse2D(collisionsLevel2);
        collisionBlocks = createObjectsFrom2D(parsedCollisions);
        player.collisionBlocks = collisionBlocks;
        player.position.x = 96;
        player.position.y = 140;
  
        if (player.currentAnimation) player.currentAnimation.isActive = false;
  
        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './img/backgroundLevel2.png',       
            width: 1024,
          height: 576,
          frameRate:1,

              });
  
        doors = [
          new Sprite({
            position: {
              x: 772.0,
              y: 336,
            },
            imageSrc: './img/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
            width: 460,
            height: 112,
                    }),
        ];
      },
    },
    3: {
      init: () => {
        parsedCollisions = parse2D(collisionsLevel3);
        collisionBlocks = createObjectsFrom2D(parsedCollisions);
        player.collisionBlocks = collisionBlocks;
        player.position.x = 750;
        player.position.y = 230;
        if (player.currentAnimation) player.currentAnimation.isActive = false;
  
        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './img/backgroundLevel3.png',
          width: 1024,
          height: 576,
          frameRate:1,

                });
  
        doors = [
          new Sprite({
            position: {
              x: 176.0,
              y: 335,
            },
            imageSrc: './img/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
            width: 460,
            height: 112,
                    }),
        ];
      },
    },
    4: {
      init: () => {
        parsedCollisions = parse2D(collisionsLevel4);
        collisionBlocks = createObjectsFrom2D(parsedCollisions);
        player.collisionBlocks = collisionBlocks;
        player.position.x = 750;
        player.position.y = 230;
        if (player.currentAnimation) player.currentAnimation.isActive = false;
  
        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './img/backgroundLevel4.png',
          width: 1024,
          height: 576,
          frameRate:1,

                });
  
        doors = [
          new Sprite({
            position: {
              x: 176.0,
              y: 335,
            },
            imageSrc: './img/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
            width: 460,
            height: 112,
                    }),
        ];
      },
    },
    5: {
      init: () => {
        parsedCollisions = parse2D(collisionsLevel5);
        collisionBlocks = createObjectsFrom2D(parsedCollisions);
        player.collisionBlocks = collisionBlocks;
        player.position.x = 30;
        player.position.y = 30;
        if (player.currentAnimation) player.currentAnimation.isActive = false;
  
        background = new Sprite({
          position: {
            x: 0,
            y: 0,
          },
          imageSrc: './img/backgroundLevel5.png',
          width: 1024,
          height: 576,
          frameRate:1,

                });
  
        doors = [
          new Sprite({
            position: {
              x: 830.0,
              y: 145,
            },
            imageSrc: './img/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
            width: 460,
            height: 112,
                    }),
        ];
      },
    },
  };

  const keys = {
    w: {
      pressed: false,
    },
    a: {
      pressed: false,
    },
    d: {
      pressed: false,
    },
    touchLeft: {
      pressed: false,
  },
  touchRight: {
      pressed: false,
  },
  }
  


  export function setupControls() {
    window.addEventListener('keydown', (event) => {
        if (player.preventInput) return
        switch (event.key) {
          case 'w':
          case 'ArrowUp':
            for (let i = 0; i < doors.length; i++) {
              const door = doors[i]
      
              if (
                player.hitbox.position.x + player.hitbox.width <=
                  door.position.x + door.width &&
                player.hitbox.position.x >= door.position.x &&
                player.hitbox.position.y + player.hitbox.height >= door.position.y &&
                player.hitbox.position.y <= door.position.y + door.height
              ) {
                player.velocity.x = 0
                player.velocity.y = 0
                player.preventInput = true
                player.switchSprite('enterDoor')
                door.play()
                return
              }
            }
            if (player.velocity.y === 0) {
              player.velocity.y = -16
            }
      
            break
            case 'ArrowDown':  
            event.preventDefault();
            break;
          case 'a':
            case 'ArrowLeft': 

            // move player to the left
            keys.a.pressed = true
            break
          case 'd':
            case 'ArrowRight': 

            // move player to the right
            keys.d.pressed = true
            break
        }
      })
      
      window.addEventListener('keyup', (event) => {
        switch (event.key) {
          case 'a':
            case 'ArrowLeft': 

            // move player to the left
            keys.a.pressed = false
      
            break
          case 'd':
            case 'ArrowRight': 

            // move player to the right
            keys.d.pressed = false
      
            break
        }
      })

  }


export function animateGame(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
    window.requestAnimationFrame(() => animateGame(ctx, canvasWidth, canvasHeight));

    
    const canvas = ctx.canvas;

    background.draw(ctx);

    // collisionBlocks.forEach((collisionBlock) => {
    //   collisionBlock.draw()
    // })
  
    doors.forEach((door) => {
      door.draw(ctx);
    });

    player.draw(ctx);
    player.handleInput(keys);
    player.update();
  
    ctx.save();
    ctx.globalAlpha = overlay.opacity;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.restore();
  }
  

  export function animate(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
    levels[level].init()
    animateGame(ctx, canvasWidth, canvasHeight)
  }

  
