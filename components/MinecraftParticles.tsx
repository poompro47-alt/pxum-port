"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

export default function MinecraftParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from(
      { length: 28 },
      (_, index): Particle => ({
        id: index,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.floor(Math.random() * 6) + 3,
        duration: Math.random() * 10 + 12,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.35 + 0.08,
      }),
    );

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-[#F39306]"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 12, -8, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}