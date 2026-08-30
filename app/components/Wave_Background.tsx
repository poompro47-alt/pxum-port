// components/BackgroundCurve.tsx
const BackgroundCurve = () => {
  return (
    <svg
      className="absolute inset-0 z-[1] h-full w-full opacity-40"
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="curveGradient" x1="0" y1="0" x2="1440" y2="800">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
      </defs>

      <path
        d="M-100 450 C200 200 300 650 550 400 S900 200 1100 500 S1400 600 1600 250"
        stroke="url(#curveGradient)"
        strokeWidth="2"
      />

      <path
        d="M-100 480 C200 230 300 680 550 430 S900 230 1100 530 S1400 630 1600 280"
        stroke="url(#curveGradient)"
        strokeWidth="1"
        opacity="0.6"
      />

      <path
        d="M-100 510 C200 260 300 710 550 460 S900 260 1100 560 S1400 660 1600 310"
        stroke="url(#curveGradient)"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
};

export default BackgroundCurve;