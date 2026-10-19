import { profile } from "../data/content";

// photo frame used by Hero and About; initials show when profile.photo is null.
// loop=true (Hero only) adds a faint DEV <-> QA infinity loop behind the photo with a dot that passes behind it
const ProfilePhoto = ({ className = "", loop = false }) => {
  return (
    <div className={`relative ${className}`}>
      {loop && (
        <svg
          viewBox="0 0 460 240"
          fill="none"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[210%] h-auto max-w-none pointer-events-none"
        >
          <path
            id="sdet-loop"
            d="M230,120 C205,40 55,40 55,120 C55,200 205,200 230,120 C255,40 405,40 405,120 C405,200 255,200 230,120 Z"
            stroke="#c9a85c"
            strokeOpacity="0.28"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            className="loop-dash"
          />
          <circle r="4" fill="#c9a85c" className="loop-dot">
            <animateMotion dur="10s" repeatCount="indefinite">
              <mpath href="#sdet-loop" />
            </animateMotion>
          </circle>
          <g
            fill="#8e9bb8"
            fontSize="9"
            letterSpacing="3"
            fontFamily="system-ui, sans-serif"
          >
            <text x="38" y="124" textAnchor="end">
              DEV
            </text>
            <text x="422" y="124">
              QA
            </text>
          </g>
        </svg>
      )}

      <div className="relative z-10 h-full w-full rounded-[80px] border border-gold/40 bg-navyLight overflow-hidden flex items-center justify-center shadow-[0_35px_70px_-25px_rgba(201,168,92,0.45)]">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full object-cover object-top scale-[1.35] origin-[52%_22%]"
          />
        ) : (
          <span className="text-gold font-heading font-bold text-6xl">
            {profile.initials}
          </span>
        )}
      </div>

      {loop && (
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-navy/70 backdrop-blur px-3 py-1 text-[11px] tracking-widest text-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
          SDET · BUILDS IT, PROVES IT
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;
