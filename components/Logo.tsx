interface LogoProps {
  size?: number;
  showText?: boolean;
}

export function Logo({ size = 40, showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform hover:scale-110"
      >
        {/* Your SVG paths here */}
      </svg>
      {showText && (
        <span className="text-2xl font-semibold" style={{ color: '#da2576' }}>
          luv health
        </span>
      )}
    </div>
  );
}