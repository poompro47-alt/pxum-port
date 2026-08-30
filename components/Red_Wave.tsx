const RedWave = () => {
  return (
    <div className="relative h-[120px] w-full overflow-hidden sm:h-[180px] md:h-[220px]">
      <svg
        className="absolute bottom-0 left-0 h-full w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#5a0815"
          d="
            M0,192
            C180,120 320,280 540,210
            C760,140 850,70 1080,150
            C1260,210 1360,170 1440,130
            L1440,320
            L0,320
            Z
          "
        />
      </svg>
    </div>
  );
};

export default RedWave;