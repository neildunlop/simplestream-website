export function HeroIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background gradient */}
      <defs>
        <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1F2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="videoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Main browser window */}
      <rect x="40" y="30" width="420" height="300" rx="12" fill="white" filter="url(#shadow)" />

      {/* Browser chrome */}
      <rect x="40" y="30" width="420" height="36" rx="12" fill="#F3F4F6" />
      <rect x="40" y="54" width="420" height="12" fill="#F3F4F6" />

      {/* Browser dots */}
      <circle cx="60" cy="48" r="6" fill="#EF4444" />
      <circle cx="80" cy="48" r="6" fill="#F59E0B" />
      <circle cx="100" cy="48" r="6" fill="#10B981" />

      {/* URL bar */}
      <rect x="120" y="40" width="200" height="16" rx="4" fill="#E5E7EB" />
      <text x="135" y="52" fontSize="8" fill="#6B7280" fontFamily="system-ui">thesimplestream.com/live</text>

      {/* Video area */}
      <rect x="52" y="78" width="280" height="180" rx="8" fill="url(#screenGrad)" />

      {/* Host silhouette */}
      <ellipse cx="192" cy="200" rx="45" ry="45" fill="#374151" />
      <ellipse cx="192" cy="145" rx="28" ry="32" fill="#374151" />

      {/* Live indicator */}
      <rect x="62" y="88" width="44" height="20" rx="4" fill="#EF4444" />
      <circle cx="74" cy="98" r="4" fill="white" />
      <text x="82" y="102" fontSize="10" fill="white" fontWeight="bold" fontFamily="system-ui">LIVE</text>

      {/* Viewer count */}
      <rect x="276" y="88" width="48" height="20" rx="4" fill="rgba(0,0,0,0.5)" />
      <text x="286" y="102" fontSize="9" fill="white" fontFamily="system-ui">👁 1.2k</text>

      {/* Product overlay card */}
      <g transform="translate(250, 180)">
        <rect x="0" y="0" width="140" height="70" rx="8" fill="white" filter="url(#shadow)" />
        <rect x="8" y="8" width="50" height="54" rx="4" fill="#E5E7EB" />
        <rect x="66" y="12" width="60" height="8" rx="2" fill="#374151" />
        <rect x="66" y="26" width="40" height="6" rx="2" fill="#9CA3AF" />
        <rect x="66" y="42" width="66" height="22" rx="4" fill="#3B82F6" />
        <text x="78" y="57" fontSize="9" fill="white" fontWeight="bold" fontFamily="system-ui">Add to Cart</text>
      </g>

      {/* Chat panel */}
      <rect x="344" y="78" width="104" height="240" rx="8" fill="#F9FAFB" />
      <text x="356" y="98" fontSize="10" fill="#374151" fontWeight="bold" fontFamily="system-ui">Live Chat</text>

      {/* Chat messages */}
      <rect x="352" y="108" width="88" height="24" rx="6" fill="#E5E7EB" />
      <rect x="352" y="138" width="72" height="24" rx="6" fill="#E5E7EB" />
      <rect x="352" y="168" width="80" height="24" rx="6" fill="#DBEAFE" />
      <rect x="352" y="198" width="68" height="24" rx="6" fill="#E5E7EB" />
      <rect x="352" y="228" width="84" height="24" rx="6" fill="#E5E7EB" />

      {/* Chat input */}
      <rect x="352" y="284" width="88" height="26" rx="6" fill="white" stroke="#E5E7EB" strokeWidth="1" />

      {/* Floating stats card - left */}
      <g transform="translate(0, 260)">
        <rect x="0" y="0" width="120" height="70" rx="10" fill="white" filter="url(#shadow)" />
        <circle cx="30" cy="35" r="18" fill="#DCFCE7" />
        <path d="M24 38 L30 32 L36 38" stroke="#16A34A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <line x1="30" y1="32" x2="30" y2="42" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
        <text x="56" y="30" fontSize="18" fill="#111827" fontWeight="bold" fontFamily="system-ui">3x</text>
        <text x="56" y="46" fontSize="9" fill="#6B7280" fontFamily="system-ui">Conversion</text>
      </g>

      {/* Floating stats card - right */}
      <g transform="translate(480, 60)">
        <rect x="0" y="0" width="110" height="70" rx="10" fill="white" filter="url(#shadow)" />
        <circle cx="28" cy="35" r="18" fill="#DBEAFE" />
        <text x="22" y="40" fontSize="14" fill="#2563EB">👥</text>
        <text x="54" y="30" fontSize="16" fill="#111827" fontWeight="bold" fontFamily="system-ui">847</text>
        <text x="54" y="46" fontSize="9" fill="#6B7280" fontFamily="system-ui">Watching</text>
      </g>

      {/* Floating notification */}
      <g transform="translate(470, 200)">
        <rect x="0" y="0" width="120" height="50" rx="8" fill="white" filter="url(#shadow)" />
        <circle cx="20" cy="25" r="12" fill="#FEF3C7" />
        <text x="14" y="30" fontSize="12">🛒</text>
        <text x="38" y="22" fontSize="8" fill="#374151" fontWeight="bold" fontFamily="system-ui">New Order!</text>
        <text x="38" y="34" fontSize="7" fill="#6B7280" fontFamily="system-ui">Sarah just bought...</text>
      </g>

      {/* Shadow filter */}
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1" />
        </filter>
      </defs>
    </svg>
  );
}
