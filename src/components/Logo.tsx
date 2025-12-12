interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

/**
 * Logo component with icon and optional text
 * 
 * @param size - Size of the icon in pixels (default: 40)
 * @param showText - Whether to display the text alongside the icon (default: true)
 * @param className - Additional CSS classes to apply to the container
 */
export default function Logo({ 
  size = 40, 
  showText = true,
  className = ''
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform hover:scale-110"
        role="img"
        aria-label="Luv Health logo"
      >
        <title>Luv Health</title>
        <path
          d="M50 85 L25 60 C20 55 17 48 17 42 C17 32 24 25 33 25 C38 25 43 27 46 31 L50 35 L54 31 C57 27 62 25 67 25 C76 25 83 32 83 42 C83 48 80 55 75 60 L50 85 Z"
          fill="var(--color-ui-accent)"
        />
        <g
          fill="white"
          fillRule="evenodd"
          stroke="var(--color-ui-accent)"
          strokeWidth="2"
          transform="translate(50, 55) scale(0.45) translate(-96, -97)"
        >
          <path d="m 93,166 c 0,7 6,7 6,0 l 3,-138 c 0,-8 -12,-8 -12,0 l 3,135 0,3 z"/>
          <g>
            <path d="m 100,153 c 7,4 3,15 -3,15 2,-5 3,-9 3,-15 z m 1,-40 c 10,9 4,22 -3,26 -6,3 -6,7 -6,15 -9,-10 -4,-19 4,-24 5,-4 5,-10 5,-17 z m 1,-30 c 0,11 -17,14 -17,22 0,3 1,9 6,12 0,-11 9,-12 15,-18 7,-7 7,-19 -4,-28 0,4 0,8 0,12 z M 90,77 C 80,69 76,55 80,46 c 3,-10 20,-11 20,-3 0,8 -20,3 -13,16 l 3,5 0,13 z"/>
            <path d="m 95,43 c 7,-3 -7,-3 0,0 z" fill="var(--color-ui-accent)" fillRule="evenodd" stroke="none"/>
          </g>
        </g>
      </svg>
      {showText && (
        <span className="font-sans text-2xl font-semibold text-ui-accent">
          luv health
        </span>
      )}
    </div>
  );
}


