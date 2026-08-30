"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ClickEffect = {
  id: number;
  x: number;
  y: number;
};

export default function MinecraftClickEffect() {
  const [clicks, setClicks] = useState<ClickEffect[]>([]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const id = Date.now() + Math.random();

      setClicks((previous) => [
        ...previous,
        {
          id,
          x: event.clientX,
          y: event.clientY,
        },
      ]);

      setTimeout(() => {
        setClicks((previous) =>
          previous.filter((click) => click.id !== id),
        );
      }, 700);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <AnimatePresence>
        {clicks.map((click) => (
          <PixelBurst
            key={click.id}
            x={click.x}
            y={click.y}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

type PixelBurstProps = {
  x: number;
  y: number;
};

function PixelBurst({ x, y }: PixelBurstProps) {
  const pixels = [
    { x: -20, y: -20 },
    { x: 20, y: -20 },
    { x: -25, y: 0 },
    { x: 25, y: 0 },
    { x: -18, y: 18 },
    { x: 18, y: 18 },
    { x: 0, y: -28 },
    { x: 0, y: 28 },
  ];

  return (
    <>
      {/* Center Pixel */}
      <motion.div
        initial={{
          opacity: 0.8,
          scale: 0,
        }}
        animate={{
          opacity: 0,
          scale: 3,
        }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="fixed h-3 w-3 bg-[#F39306]"
        style={{
          left: x - 6,
          top: y - 6,
        }}
      />

      {/* Pixel Burst */}
      {pixels.map((pixel, index) => (
        <motion.div
          key={index}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: pixel.x,
            y: pixel.y,
            opacity: 0,
            scale: 0.4,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="fixed h-2 w-2 bg-[#F39306]"
          style={{
            left: x - 4,
            top: y - 4,
          }}
        />
      ))}
    </>
  );
}