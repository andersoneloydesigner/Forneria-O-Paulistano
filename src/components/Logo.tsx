interface LogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
}

export default function Logo({
  variant = 'light',
  showTagline = true,
  className = '',
}: LogoProps) {
  const isLight = variant === 'light';
  const textColor = isLight ? '#f9f8ed' : '#1e1e1e';
  const redColor = '#ff4d4d';

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {showTagline && (
        <div
          className="font-size-body tracking-[0.25em] uppercase font-medium mb-1 transition-colors"
          style={{ color: textColor }}
        >
          Seu pedaço de são paulo
        </div>
      )}

      {/* Ponte Estaiada & City Skyline Symmetrical Graphic */}
      <svg
        viewBox="0 0 260 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-48 h-auto my-1 drop-shadow-sm"
        aria-label="Silhueta Ponte Estaiada e Skyline de São Paulo"
      >
        {/* Left City Skyline Silhouette */}
        <path
          d="M12 70V44H26V32H40V48H52V26H66V70H12Z"
          fill={textColor}
          opacity="0.9"
        />
        {/* Right City Skyline Silhouette */}
        <path
          d="M248 70V44H234V32H220V48H208V26H194V70H248Z"
          fill={textColor}
          opacity="0.9"
        />

        {/* Central Ponte Estaiada Arch & Cables */}
        {/* Central X-shaped Tower */}
        <path
          d="M118 70L126 14H134L142 70H135L130 38L125 70H118Z"
          fill={textColor}
        />
        {/* Roadway Deck */}
        <path
          d="M74 62C100 58 160 58 186 62L188 66C160 62 100 62 72 66L74 62Z"
          fill={textColor}
        />
        {/* Stay Cables Left */}
        <line x1="128" y1="20" x2="80" y2="62" stroke={textColor} strokeWidth="1.6" opacity="0.85" />
        <line x1="129" y1="24" x2="92" y2="62" stroke={textColor} strokeWidth="1.5" opacity="0.85" />
        <line x1="130" y1="28" x2="104" y2="62" stroke={textColor} strokeWidth="1.5" opacity="0.85" />
        <line x1="130" y1="32" x2="114" y2="62" stroke={textColor} strokeWidth="1.4" opacity="0.85" />
        {/* Stay Cables Right */}
        <line x1="132" y1="20" x2="180" y2="62" stroke={textColor} strokeWidth="1.6" opacity="0.85" />
        <line x1="131" y1="24" x2="168" y2="62" stroke={textColor} strokeWidth="1.5" opacity="0.85" />
        <line x1="130" y1="28" x2="156" y2="62" stroke={textColor} strokeWidth="1.5" opacity="0.85" />
        <line x1="130" y1="32" x2="146" y2="62" stroke={textColor} strokeWidth="1.4" opacity="0.85" />

        {/* Base Foundation */}
        <rect x="114" y="68" width="32" height="4" rx="1" fill={textColor} />
      </svg>

      {/* Main Brand Typography: O PAULISTANO with pizza slice 'O' */}
      <div className="flex items-center gap-1 mt-0.5">
        <span
          className="font-title font-size-sub font-extrabold tracking-tight"
          style={{ color: redColor }}
        >
          O PAULISTAN
        </span>
        {/* Stylized Pizza Slice for the final O */}
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 -mt-0.5 inline-block"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Triangular crust & cheese */}
          <path
            d="M3 4C11 3 19 6 21 8L12 21L3 4Z"
            fill={redColor}
          />
          {/* Cheese slice inner holes */}
          <circle cx="10" cy="9" r="1.5" fill={textColor} />
          <circle cx="15" cy="11" r="1.2" fill={textColor} />
          <circle cx="11" cy="14" r="1.1" fill={textColor} />
        </svg>
      </div>

      {/* Subtitle FORNERIA */}
      <div
        className="font-size-body tracking-[0.35em] uppercase font-semibold mt-1"
        style={{ color: textColor }}
      >
        FORNERIA
      </div>
    </div>
  );
}
