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
        <div className='p-8 rounded-lg bg-gray-400'>
            <h1 className='w-full text-center text-3xl p-2 '>Endless Timepass Game</h1>
            <canvas ref={canvasRef} id='gameCanvas'></canvas>
        </div>
        </>
    );
};

export default GameCanvas;
