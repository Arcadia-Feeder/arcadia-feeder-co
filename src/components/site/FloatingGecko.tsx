export function FloatingGecko() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-6 right-6 z-40 hidden sm:block"
    >
      <div className="gecko-float opacity-70">
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
          {/* Dubia roach silhouette */}
          <ellipse
            cx="32"
            cy="36"
            rx="16"
            ry="20"
            fill="var(--brand-brown)"
            stroke="var(--brand-forest)"
            strokeWidth="1.5"
          />
          {/* Pronotum (head shield) */}
          <ellipse
            cx="32"
            cy="20"
            rx="10"
            ry="7"
            fill="var(--brand-forest)"
            stroke="var(--brand-forest)"
            strokeWidth="1.5"
          />
          {/* Wing line down the middle */}
          <path
            d="M32 20 L32 54"
            stroke="var(--brand-forest)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* Antennae */}
          <path
            d="M28 16 C24 10, 20 8, 16 6"
            stroke="var(--brand-forest)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M36 16 C40 10, 44 8, 48 6"
            stroke="var(--brand-forest)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Legs */}
          <path
            d="M18 30 L8 26 M18 38 L6 38 M18 46 L8 52"
            stroke="var(--brand-forest)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M46 30 L56 26 M46 38 L58 38 M46 46 L56 52"
            stroke="var(--brand-forest)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
