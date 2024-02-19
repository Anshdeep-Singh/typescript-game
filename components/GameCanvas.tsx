"use client";
import { animate, setupControls } from '@/utils/Levels';
import React, { useEffect, useRef } from 'react';


const GameCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        setupControls();
      }, []);


    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (canvas && ctx) {
            canvas.width = 1024;
            canvas.height = 576;
            ctx.fillStyle = 'black';
            animate(ctx , canvas.width, canvas.height);
        }
    }, []);

    return (
        <>
            <canvas ref={canvasRef} id='gameCanvas bg-black'></canvas>
        </>
    );
};

export default GameCanvas;
