"use client"

export function NetworkAnimation() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full animate-float" xmlns="http://www.w3.org/2000/svg">
        {/* Network nodes */}
        <g className="animate-pulse-slow">
          <circle cx="50" cy="50" r="4" fill="#3b82f6" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="50" r="4" fill="#3b82f6" opacity="0.8">
            <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="100" r="6" fill="#1e40af" opacity="0.9">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="150" r="4" fill="#3b82f6" opacity="0.8">
            <animate attributeName="opacity" values="1;0.4;1" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="150" r="4" fill="#3b82f6" opacity="0.8">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.9s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="30" r="3" fill="#60a5fa" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="100" r="3" fill="#60a5fa" opacity="0.7">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.1s" repeatCount="indefinite" />
          </circle>
          <circle cx="170" cy="100" r="3" fill="#60a5fa" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="170" r="3" fill="#60a5fa" opacity="0.7">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2.6s" repeatCount="indefinite" />
          </circle>

          {/* Connection lines */}
          <line x1="50" y1="50" x2="100" y2="100" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="150" y1="50" x2="100" y2="100" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.5s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="100" x2="50" y2="150" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4">
            <animate attributeName="opacity" values="0.2;0.7;0.2" dur="1.8s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="100" x2="150" y2="150" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.9s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="30" x2="100" y2="100" stroke="#60a5fa" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.8s" repeatCount="indefinite" />
          </line>
          <line x1="30" y1="100" x2="100" y2="100" stroke="#60a5fa" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.1s" repeatCount="indefinite" />
          </line>
          <line x1="170" y1="100" x2="100" y2="100" stroke="#60a5fa" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.4s" repeatCount="indefinite" />
          </line>
          <line x1="100" y1="170" x2="100" y2="100" stroke="#60a5fa" strokeWidth="1" opacity="0.3">
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.6s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Outer ring */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#networkGradient)"
          strokeWidth="1"
          opacity="0.3"
          strokeDasharray="5,5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 100 100;360 100 100"
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Gradient definition */}
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
