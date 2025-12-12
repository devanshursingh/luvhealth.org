import { logoPaths } from '../assets/logoPaths';

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

/**
 * Logo component with icon and optional text
 * Uses shared logo paths from logoPaths.ts - update that file to change logo everywhere
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
        viewBox={logoPaths.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform hover:scale-110"
        role="img"
        aria-label="Luv Health logo"
      >
        <title>Luv Health</title>
        <path
          d={logoPaths.heart}
          fill="var(--color-ui-accent)"
        />
        <g
          fill="white"
          fillRule="evenodd"
          stroke="var(--color-ui-accent)"
          strokeWidth="2"
          transform={logoPaths.transform}
        >
          <path d={logoPaths.letterL}/>
          <g>
            <path d={logoPaths.letterU}/>
            <path d={logoPaths.letterV} fill="var(--color-ui-accent)" fillRule="evenodd" stroke="none"/>
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


