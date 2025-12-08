interface IllustrationProps {
  className?: string;
}

export function CollectablesIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>

      {/* Trading cards stack */}
      <rect x="20" y="25" width="60" height="85" rx="4" fill="#E5E7EB" transform="rotate(-8 50 67)" />
      <rect x="30" y="20" width="60" height="85" rx="4" fill="url(#cardGrad1)" transform="rotate(-3 60 62)" />
      <rect x="40" y="15" width="60" height="85" rx="4" fill="url(#cardGrad2)" />

      {/* Card details */}
      <rect x="48" y="23" width="44" height="50" rx="2" fill="white" fillOpacity="0.3" />
      <rect x="48" y="78" width="30" height="6" rx="1" fill="white" fillOpacity="0.5" />
      <rect x="48" y="88" width="20" height="4" rx="1" fill="white" fillOpacity="0.3" />

      {/* Grading case */}
      <rect x="115" y="20" width="65" height="90" rx="4" fill="#1F2937" />
      <rect x="120" y="25" width="55" height="70" rx="2" fill="#374151" />
      <rect x="125" y="30" width="45" height="55" rx="2" fill="white" fillOpacity="0.1" />

      {/* Grade badge */}
      <rect x="130" y="78" width="35" height="12" rx="2" fill="#10B981" />
      <text x="137" y="87" fontSize="8" fill="white" fontWeight="bold" fontFamily="system-ui">PSA 10</text>

      {/* Sparkles */}
      <circle cx="90" cy="25" r="3" fill="#FCD34D" />
      <circle cx="170" cy="35" r="2" fill="#FCD34D" />
      <circle cx="25" cy="50" r="2" fill="#FCD34D" />
    </svg>
  );
}

export function FashionIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="dressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
      </defs>

      {/* Clothing rack */}
      <rect x="30" y="15" width="140" height="4" rx="2" fill="#9CA3AF" />
      <rect x="40" y="19" width="4" height="90" fill="#9CA3AF" />
      <rect x="156" y="19" width="4" height="90" fill="#9CA3AF" />

      {/* Hanger 1 - Dress */}
      <path d="M70 19 L70 25 L55 35 L70 35 L85 35 L70 25" stroke="#6B7280" strokeWidth="2" fill="none" />
      <path d="M55 35 Q50 60 55 100 L85 100 Q90 60 85 35 Z" fill="url(#dressGrad)" />

      {/* Hanger 2 - Shirt */}
      <path d="M110 19 L110 25 L95 35 L110 35 L125 35 L110 25" stroke="#6B7280" strokeWidth="2" fill="none" />
      <rect x="97" y="35" width="26" height="45" rx="2" fill="#3B82F6" />
      <rect x="100" y="35" width="8" height="12" fill="#1D4ED8" />
      <rect x="112" y="35" width="8" height="12" fill="#1D4ED8" />

      {/* Hanger 3 - Jacket */}
      <path d="M150 19 L150 25 L135 35 L150 35 L165 35 L150 25" stroke="#6B7280" strokeWidth="2" fill="none" />
      <path d="M135 35 L133 80 L145 80 L145 50 L155 50 L155 80 L167 80 L165 35 Z" fill="#1F2937" />

      {/* Price tags */}
      <circle cx="85" cy="70" r="12" fill="white" stroke="#E5E7EB" strokeWidth="1" />
      <text x="79" y="74" fontSize="8" fill="#111827" fontWeight="bold" fontFamily="system-ui">£89</text>

      {/* Sparkle */}
      <circle cx="45" cy="30" r="3" fill="#F472B6" />
    </svg>
  );
}

export function BeautyIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="lipstickGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
        <linearGradient id="palettGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>

      {/* Makeup palette */}
      <rect x="20" y="30" width="80" height="70" rx="8" fill="#1F2937" />
      <rect x="28" y="38" width="64" height="54" rx="4" fill="#374151" />

      {/* Eyeshadow pans */}
      <circle cx="44" cy="54" r="10" fill="#F472B6" />
      <circle cx="68" cy="54" r="10" fill="#A78BFA" />
      <circle cx="44" cy="76" r="10" fill="#FB923C" />
      <circle cx="68" cy="76" r="10" fill="#34D399" />

      {/* Lipstick */}
      <rect x="115" y="50" width="20" height="55" rx="3" fill="#374151" />
      <rect x="115" y="20" width="20" height="35" rx="2" fill="url(#lipstickGrad)" />
      <ellipse cx="125" cy="20" rx="10" ry="3" fill="#EF4444" />

      {/* Mascara */}
      <rect x="150" y="35" width="14" height="70" rx="4" fill="#111827" />
      <rect x="152" y="25" width="10" height="15" rx="2" fill="#374151" />

      {/* Brush */}
      <rect x="175" y="60" width="8" height="45" rx="2" fill="#D4A574" />
      <ellipse cx="179" cy="55" rx="8" ry="12" fill="#F9A8D4" />

      {/* Sparkles */}
      <circle cx="95" cy="25" r="3" fill="#F472B6" />
      <circle cx="170" cy="30" r="2" fill="#A78BFA" />
    </svg>
  );
}

export function HomeIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="sofaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>

      {/* Wall */}
      <rect x="10" y="10" width="180" height="100" fill="#F3F4F6" />

      {/* Picture frame */}
      <rect x="70" y="18" width="60" height="40" rx="2" fill="#374151" />
      <rect x="74" y="22" width="52" height="32" fill="#DBEAFE" />
      <circle cx="100" cy="38" r="10" fill="#93C5FD" />
      <path d="M80 50 L90 40 L105 48 L115 38 L122 50 Z" fill="#86EFAC" />

      {/* Sofa */}
      <rect x="30" y="70" width="100" height="35" rx="6" fill="url(#sofaGrad)" />
      <rect x="25" y="75" width="15" height="30" rx="4" fill="url(#sofaGrad)" />
      <rect x="120" y="75" width="15" height="30" rx="4" fill="url(#sofaGrad)" />
      <rect x="40" y="68" width="35" height="10" rx="3" fill="#10B981" />
      <rect x="85" y="68" width="35" height="10" rx="3" fill="#10B981" />

      {/* Side table */}
      <rect x="145" y="80" width="35" height="25" rx="2" fill="#92400E" />
      <rect x="147" y="78" width="31" height="4" rx="1" fill="#B45309" />

      {/* Lamp */}
      <rect x="158" y="55" width="6" height="23" fill="#D4A574" />
      <path d="M150 55 L176 55 L168 35 L158 35 Z" fill="#FEF3C7" />
      <ellipse cx="163" cy="35" rx="8" ry="3" fill="#FCD34D" />

      {/* Plant */}
      <rect x="20" y="85" width="12" height="20" rx="2" fill="#B45309" />
      <ellipse cx="26" cy="80" rx="12" ry="15" fill="#22C55E" />
      <ellipse cx="22" cy="75" rx="8" ry="10" fill="#16A34A" />
    </svg>
  );
}

export function JewelryIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="gemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
        <linearGradient id="rubyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#BE123C" />
        </linearGradient>
      </defs>

      {/* Ring */}
      <ellipse cx="50" cy="80" rx="25" ry="8" fill="none" stroke="url(#goldGrad)" strokeWidth="6" />
      <ellipse cx="50" cy="68" rx="8" ry="8" fill="url(#gemGrad)" />
      <ellipse cx="50" cy="66" rx="4" ry="3" fill="white" fillOpacity="0.4" />

      {/* Necklace */}
      <path d="M90 20 Q100 10 150 20 Q160 25 160 40 Q160 60 150 70 L140 85"
            stroke="url(#goldGrad)" strokeWidth="3" fill="none" />
      <path d="M90 20 Q80 25 80 40 Q80 60 90 70 L100 85"
            stroke="url(#goldGrad)" strokeWidth="3" fill="none" />
      <path d="M100 85 L120 100 L140 85" stroke="url(#goldGrad)" strokeWidth="3" fill="none" />
      <circle cx="120" cy="100" r="10" fill="url(#rubyGrad)" />
      <ellipse cx="118" cy="97" rx="4" ry="3" fill="white" fillOpacity="0.4" />

      {/* Earrings */}
      <circle cx="175" cy="35" r="4" fill="url(#goldGrad)" />
      <line x1="175" y1="39" x2="175" y2="55" stroke="url(#goldGrad)" strokeWidth="2" />
      <circle cx="175" cy="60" r="8" fill="url(#gemGrad)" />

      <circle cx="175" cy="80" r="4" fill="url(#goldGrad)" />
      <line x1="175" y1="84" x2="175" y2="95" stroke="url(#goldGrad)" strokeWidth="2" />
      <circle cx="175" cy="100" r="6" fill="url(#rubyGrad)" />

      {/* Sparkles */}
      <circle cx="65" cy="55" r="2" fill="#FCD34D" />
      <circle cx="35" cy="70" r="2" fill="#FCD34D" />
      <circle cx="130" cy="50" r="3" fill="#FCD34D" />
      <circle cx="155" cy="75" r="2" fill="#FCD34D" />
    </svg>
  );
}

export function ElectronicsIllustration({ className = '' }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="screenGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>

      {/* Smartphone */}
      <rect x="20" y="15" width="50" height="90" rx="8" fill="#1F2937" />
      <rect x="24" y="25" width="42" height="70" rx="4" fill="url(#screenGrad2)" />
      <circle cx="45" cy="20" r="2" fill="#374151" />
      <rect x="35" y="100" width="20" height="3" rx="1" fill="#374151" />

      {/* App icons on phone */}
      <rect x="28" y="30" width="10" height="10" rx="2" fill="#EF4444" />
      <rect x="42" y="30" width="10" height="10" rx="2" fill="#22C55E" />
      <rect x="56" y="30" width="6" height="10" rx="2" fill="#3B82F6" />
      <rect x="28" y="44" width="10" height="10" rx="2" fill="#F59E0B" />
      <rect x="42" y="44" width="10" height="10" rx="2" fill="#8B5CF6" />

      {/* Smartwatch */}
      <rect x="85" y="40" width="35" height="45" rx="8" fill="#374151" />
      <rect x="89" y="46" width="27" height="33" rx="4" fill="#111827" />
      <rect x="95" y="35" width="15" height="8" rx="2" fill="#4B5563" />
      <rect x="95" y="82" width="15" height="8" rx="2" fill="#4B5563" />

      {/* Watch face */}
      <circle cx="102.5" cy="62.5" r="12" fill="none" stroke="#3B82F6" strokeWidth="2" />
      <line x1="102.5" y1="62.5" x2="102.5" y2="54" stroke="#3B82F6" strokeWidth="2" />
      <line x1="102.5" y1="62.5" x2="108" y2="62.5" stroke="#3B82F6" strokeWidth="1.5" />

      {/* Headphones */}
      <path d="M140 55 Q140 30 165 30 Q190 30 190 55" stroke="#1F2937" strokeWidth="6" fill="none" />
      <ellipse cx="140" cy="65" rx="12" ry="15" fill="#1F2937" />
      <ellipse cx="140" cy="65" rx="8" ry="10" fill="#374151" />
      <ellipse cx="190" cy="65" rx="12" ry="15" fill="#1F2937" />
      <ellipse cx="190" cy="65" rx="8" ry="10" fill="#374151" />

      {/* Box / packaging */}
      <rect x="130" y="85" width="55" height="30" rx="2" fill="#F3F4F6" />
      <rect x="130" y="85" width="55" height="8" fill="#E5E7EB" />
      <rect x="150" y="93" width="15" height="18" rx="1" fill="#DBEAFE" />

      {/* Lightning bolt (charging) */}
      <path d="M70 60 L75 52 L72 52 L77 42 L72 50 L75 50 Z" fill="#FCD34D" />
    </svg>
  );
}
