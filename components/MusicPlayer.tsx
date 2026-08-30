"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  // Auto play when website loads
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;

    const playMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        // Browser blocked autoplay
        setIsPlaying(false);
      }
    };

    playMusic();

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log("Audio playback blocked:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/background.mp3"
        loop
        preload="auto"
      />

      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? "Turn music off" : "Turn music on"}
        className="
          fixed
          bottom-6
          left-1/2
          z-[100]
          flex
          h-14
          min-w-[56px]
          -translate-x-1/2
          items-center
          justify-center
          gap-3
          rounded-full
          border
          border-white/10
          bg-black/60
          px-5
          text-white
          shadow-2xl
          backdrop-blur-xl
          transition-colors
          hover:bg-black/80
        "
      >
        {isPlaying ? (
          <>
            <motion.div
              animate={{
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Volume2 className="h-5 w-5 text-[#F39306]" />
            </motion.div>

            <span className="hidden text-sm font-medium sm:block">
              Music On
            </span>
          </>
        ) : (
          <>
            <VolumeX className="h-5 w-5 text-neutral-400" />

            <span className="hidden text-sm font-medium sm:block">
              Music Off
            </span>
          </>
        )}

        <motion.span
          animate={
            isPlaying
              ? {
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                }
              : {}
          }
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className={`
            h-2
            w-2
            rounded-full
            ${isPlaying ? "bg-[#F39306]" : "bg-neutral-600"}
          `}
        />
      </motion.button>
    </>
  );
}