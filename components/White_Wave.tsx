export default function WhiteWave() {
  return (
    <div className="relative z-20 -mb-px w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="block h-[100px] w-full sm:h-[140px] md:h-[180px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M0,30
            C180,95 320,115 500,105
            C700,95 820,35 1050,45
            C1220,50 1340,60 1440,80
            L1440,180
            L0,180
            Z
          "
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}