// Personal mark (same drawing as public/favicon.svg, without the tile): a person inside an arch
// with a small dot. Colored with currentColor so CSS controls it.
const Mark = ({ className = '' }) => (
  <svg className={className} viewBox="120 96 312 368" aria-hidden="true" focusable="false">
    <defs>
      <clipPath id="mark-arch">
        <path d="M 140 448 L 140 248 A 116 116 0 0 1 372 248 L 372 448 Z" />
      </clipPath>
    </defs>
    <g clipPath="url(#mark-arch)" fill="currentColor" className="mark-person">
      <circle cx="256" cy="252" r="58" />
      <path d="M 128 470 C 140 296 372 296 384 470 Z" />
    </g>
    <path
      className="mark-arch"
      d="M 140 448 L 140 248 A 116 116 0 0 1 372 248 L 372 448"
      fill="none"
      stroke="currentColor"
      strokeWidth="18"
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength="1"
    />
    <circle className="mark-dot" cx="392" cy="132" r="28" fill="currentColor" />
  </svg>
);

export default Mark;
