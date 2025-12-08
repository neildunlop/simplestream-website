interface IllustrationProps {
  className?: string;
}

export function StreamingIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      {/* Camera body */}
      <rect x="25" y="35" width="70" height="50" rx="8" fill="#1F2937" />
      <rect x="30" y="40" width="50" height="35" rx="4" fill="#374151" />

      {/* Lens */}
      <circle cx="55" cy="57" r="15" fill="#111827" />
      <circle cx="55" cy="57" r="10" fill="#1E40AF" />
      <circle cx="55" cy="57" r="5" fill="#3B82F6" />
      <circle cx="52" cy="54" r="2" fill="white" fillOpacity="0.4" />

      {/* Record light */}
      <circle cx="85" cy="45" r="4" fill="#EF4444" />

      {/* Broadcast waves */}
      <path d="M95 45 Q105 45 105 60" stroke="url(#streamGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M98 38 Q115 38 115 60" stroke="url(#streamGrad)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M101 31 Q125 31 125 60" stroke="url(#streamGrad)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />

      {/* HD badge */}
      <rect x="25" y="75" width="25" height="14" rx="3" fill="#3B82F6" />
      <text x="30" y="85" fontSize="8" fill="white" fontWeight="bold" fontFamily="system-ui">HD</text>
    </svg>
  );
}

export function ShopifyIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="shopifyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#95BF47" />
          <stop offset="100%" stopColor="#5E8E3E" />
        </linearGradient>
      </defs>

      {/* Shopping bag */}
      <path d="M30 45 L35 95 L85 95 L90 45 Z" fill="url(#shopifyGrad)" />
      <path d="M30 45 L90 45" stroke="#5E8E3E" strokeWidth="3" />

      {/* Bag handles */}
      <path d="M45 45 L45 35 Q60 20 75 35 L75 45" stroke="#5E8E3E" strokeWidth="4" fill="none" />

      {/* Sync arrows */}
      <circle cx="60" cy="70" r="15" fill="white" fillOpacity="0.3" />
      <path d="M52 65 L60 57 L68 65" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M68 75 L60 83 L52 75" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="60" y1="57" x2="60" y2="75" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="65" x2="60" y2="83" stroke="white" strokeWidth="2.5" strokeLinecap="round" />

      {/* Checkmark */}
      <circle cx="85" cy="35" r="12" fill="#10B981" />
      <path d="M80 35 L83 38 L90 31" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AnalyticsIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="analyticsGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Chart background */}
      <rect x="20" y="25" width="80" height="70" rx="4" fill="#F9FAFB" />

      {/* Grid lines */}
      <line x1="20" y1="45" x2="100" y2="45" stroke="#E5E7EB" strokeWidth="1" />
      <line x1="20" y1="65" x2="100" y2="65" stroke="#E5E7EB" strokeWidth="1" />

      {/* Area chart */}
      <path d="M25 85 L35 75 L50 70 L65 55 L80 45 L95 35 L95 85 Z" fill="url(#analyticsGrad)" />
      <path d="M25 85 L35 75 L50 70 L65 55 L80 45 L95 35" stroke="#8B5CF6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Data points */}
      <circle cx="35" cy="75" r="4" fill="#8B5CF6" />
      <circle cx="50" cy="70" r="4" fill="#8B5CF6" />
      <circle cx="65" cy="55" r="4" fill="#8B5CF6" />
      <circle cx="80" cy="45" r="4" fill="#8B5CF6" />
      <circle cx="95" cy="35" r="4" fill="#8B5CF6" />

      {/* Trending up arrow */}
      <circle cx="95" cy="35" r="10" fill="#10B981" />
      <path d="M90 38 L95 33 L100 38" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
      <line x1="95" y1="33" x2="95" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="chatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>

      {/* Main chat bubble */}
      <path d="M20 30 L95 30 Q100 30 100 35 L100 70 Q100 75 95 75 L50 75 L35 90 L35 75 L25 75 Q20 75 20 70 L20 35 Q20 30 25 30 Z" fill="url(#chatGrad)" />

      {/* Message lines */}
      <rect x="30" y="42" width="50" height="6" rx="3" fill="white" fillOpacity="0.8" />
      <rect x="30" y="54" width="35" height="6" rx="3" fill="white" fillOpacity="0.6" />

      {/* Secondary bubble */}
      <rect x="55" y="80" width="45" height="25" rx="5" fill="#E5E7EB" />
      <rect x="62" y="88" width="30" height="4" rx="2" fill="#9CA3AF" />

      {/* Typing indicator */}
      <circle cx="70" cy="95" r="3" fill="#6B7280" />
      <circle cx="80" cy="95" r="3" fill="#6B7280" opacity="0.7" />
      <circle cx="90" cy="95" r="3" fill="#6B7280" opacity="0.4" />

      {/* Heart reaction */}
      <circle cx="105" cy="55" r="12" fill="#FEE2E2" />
      <path d="M105 52 Q102 48 99 52 Q99 56 105 61 Q111 56 111 52 Q108 48 105 52 Z" fill="#EF4444" />
    </svg>
  );
}

export function MobileIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
      </defs>

      {/* Phone */}
      <rect x="35" y="10" width="50" height="100" rx="8" fill="#1F2937" />
      <rect x="39" y="20" width="42" height="75" rx="4" fill="url(#mobileGrad)" />

      {/* Notch */}
      <rect x="50" y="12" width="20" height="6" rx="3" fill="#111827" />

      {/* Video player on screen */}
      <rect x="43" y="28" width="34" height="45" rx="2" fill="#111827" />

      {/* Play button */}
      <circle cx="60" cy="50" r="10" fill="white" fillOpacity="0.3" />
      <path d="M57 45 L66 50 L57 55 Z" fill="white" />

      {/* Product card on screen */}
      <rect x="43" y="78" width="34" height="14" rx="2" fill="white" />
      <rect x="46" y="81" width="10" height="8" rx="1" fill="#E5E7EB" />
      <rect x="59" y="82" width="15" height="3" rx="1" fill="#374151" />
      <rect x="59" y="87" width="10" height="3" rx="1" fill="#3B82F6" />

      {/* Home indicator */}
      <rect x="50" y="100" width="20" height="4" rx="2" fill="#374151" />

      {/* Wifi waves */}
      <path d="M15 50 Q25 40 25 60" stroke="#E5E7EB" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M10 50 Q25 35 25 65" stroke="#E5E7EB" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* Cloud */}
      <ellipse cx="100" cy="30" rx="12" ry="8" fill="#E5E7EB" />
      <ellipse cx="95" cy="35" rx="8" ry="6" fill="#E5E7EB" />
      <ellipse cx="105" cy="35" rx="8" ry="6" fill="#E5E7EB" />
    </svg>
  );
}

export function SecurityIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#4338CA" />
        </linearGradient>
      </defs>

      {/* Shield */}
      <path d="M60 15 L95 30 L95 60 Q95 90 60 105 Q25 90 25 60 L25 30 Z" fill="url(#shieldGrad)" />

      {/* Inner shield */}
      <path d="M60 25 L85 37 L85 58 Q85 82 60 94 Q35 82 35 58 L35 37 Z" fill="white" fillOpacity="0.2" />

      {/* Checkmark */}
      <path d="M45 58 L55 68 L78 45" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Lock icon */}
      <rect x="90" y="75" width="20" height="16" rx="3" fill="#1F2937" />
      <path d="M94 75 L94 70 Q100 62 106 70 L106 75" stroke="#1F2937" strokeWidth="3" fill="none" />
      <circle cx="100" cy="83" r="2" fill="#FCD34D" />

      {/* Stars/sparkles */}
      <circle cx="20" cy="45" r="3" fill="#FCD34D" />
      <circle cx="105" cy="25" r="2" fill="#FCD34D" />
      <circle cx="15" cy="80" r="2" fill="#FCD34D" />
    </svg>
  );
}

export function ProductOverlayIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="overlayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      {/* Video screen background */}
      <rect x="15" y="20" width="90" height="60" rx="6" fill="#1F2937" />

      {/* Play button in video */}
      <circle cx="60" cy="50" r="12" fill="white" fillOpacity="0.2" />
      <path d="M56 44 L68 50 L56 56 Z" fill="white" fillOpacity="0.6" />

      {/* Product overlay card */}
      <g transform="translate(55, 55)">
        <rect x="0" y="0" width="55" height="45" rx="6" fill="white" filter="url(#overlayDropShadow)" />

        {/* Product image placeholder */}
        <rect x="5" y="5" width="20" height="20" rx="3" fill="#E5E7EB" />
        <circle cx="15" cy="15" r="5" fill="#9CA3AF" />

        {/* Product text */}
        <rect x="28" y="7" width="22" height="4" rx="2" fill="#374151" />
        <rect x="28" y="14" width="16" height="3" rx="1.5" fill="#9CA3AF" />

        {/* Price */}
        <rect x="28" y="20" width="14" height="4" rx="2" fill="url(#overlayGrad)" />

        {/* Add to cart button */}
        <rect x="5" y="30" width="45" height="10" rx="3" fill="url(#overlayGrad)" />
        <rect x="15" y="33" width="25" height="4" rx="2" fill="white" fillOpacity="0.8" />
      </g>

      {/* Hotkey indicator */}
      <rect x="15" y="85" width="24" height="20" rx="4" fill="#374151" />
      <text x="22" y="99" fontSize="10" fill="white" fontWeight="bold" fontFamily="system-ui">1-9</text>

      {/* Arrow pointing to overlay */}
      <path d="M42 95 L52 85" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" markerEnd="url(#arrowhead)" />

      <defs>
        <filter id="overlayDropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.15" />
        </filter>
      </defs>
    </svg>
  );
}
