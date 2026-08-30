// components/BackgroundCurve.tsx
const BackgroundCurve = () => {
  return (
    <svg
      className="absolute inset-0 z-[0] h-full w-full pointer-events-none"
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="waveGradient1" x1="0" y1="0" x2="1440" y2="600">
          <stop offset="0%" stopColor="#450a0a" />
          <stop offset="50%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#fca5a5" />
        </linearGradient>

        <linearGradient id="waveGradient2" x1="0" y1="100" x2="1440" y2="700">
          <stop offset="0%" stopColor="#7f1d1d" />
          <stop offset="50%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#f87171" />
        </linearGradient>
      </defs>

      {/* --- CURVE GROUP 1: Multiple parallel lines offset vertically --- */}
      <g opacity="0.7">
        <path d="M-100 180 C250 80 450 380 700 260 C950 140 1150 330 1540 180" stroke="url(#waveGradient1)" strokeWidth="1.5" fill="none" />
        <path d="M-100 190 C250 90 450 390 700 270 C950 150 1150 340 1540 190" stroke="url(#waveGradient1)" strokeWidth="2" fill="none" />
        <path d="M-100 200 C250 100 450 400 700 280 C950 160 1150 350 1540 200" stroke="url(#waveGradient1)" strokeWidth="3" fill="none" />
        <path d="M-100 210 C250 110 450 410 700 290 C950 170 1150 360 1540 210" stroke="url(#waveGradient1)" strokeWidth="1.5" fill="none" />
        <path d="M-100 220 C250 120 450 420 700 300 C950 180 1150 370 1540 220" stroke="url(#waveGradient1)" strokeWidth="1" fill="none" />
      </g>

      {/* --- CURVE GROUP 2: Multiple parallel lines offset vertically --- */}
      <g opacity="0.5">
        <path d="M-100 370 C300 470 500 220 800 350 C1100 470 1250 170 1540 290" stroke="url(#waveGradient2)" strokeWidth="1" fill="none" />
        <path d="M-100 385 C300 485 500 235 800 365 C1100 485 1250 185 1540 305" stroke="url(#waveGradient2)" strokeWidth="1.5" fill="none" />
        <path d="M-100 400 C300 500 500 250 800 380 C1100 500 1250 200 1540 320" stroke="url(#waveGradient2)" strokeWidth="2.5" fill="none" />
        <path d="M-100 415 C300 515 500 265 800 395 C1100 515 1250 215 1540 335" stroke="url(#waveGradient2)" strokeWidth="1.5" fill="none" />
        <path d="M-100 430 C300 530 500 280 800 410 C1100 530 1250 230 1540 350" stroke="url(#waveGradient2)" strokeWidth="1" fill="none" />
      </g>
    </svg>
  );
};

export default BackgroundCurve;