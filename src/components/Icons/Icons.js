// Centralized icon library — all icons share the same 48x48 viewBox
// Usage: <IconFootball color="var(--ink)" size={44} />

const defaults = { color: "var(--ink)", size: 44 };

export function IconFootball({ color = defaults.color, size = defaults.size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="19" stroke={color} strokeWidth="2.5" />
      <polygon points="24,17 29,21 27,27 21,27 19,21" stroke={color} strokeWidth="2" fill={color} />
      <line x1="24" y1="17" x2="24" y2="5"  stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="29" y1="21" x2="41" y2="16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="27" y1="27" x2="36" y2="38" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="21" y1="27" x2="12" y2="38" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="19" y1="21" x2="7"  y2="16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconBook({ color = defaults.color, size = defaults.size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6,10 Q6,8 8,8 L24,8 L24,40 L8,40 Q6,40 6,38 Z" stroke={color} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <path d="M42,10 Q42,8 40,8 L24,8 L24,40 L40,40 Q42,40 42,38 Z" stroke={color} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
      <line x1="24" y1="8"  x2="24" y2="40" stroke={color} strokeWidth="2.5" />
      <line x1="10" y1="16" x2="21" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="21" x2="21" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="26" x2="18" y2="26" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="27" y1="16" x2="38" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="27" y1="21" x2="38" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="27" y1="26" x2="35" y2="26" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCamera({ color = defaults.color, size = defaults.size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="15" width="30" height="22" rx="3" stroke={color} strokeWidth="2.5" />
      <circle cx="20" cy="26" r="7" stroke={color} strokeWidth="2.5" />
      <circle cx="20" cy="26" r="3" stroke={color} strokeWidth="1.5" />
      <path d="M10,15 L10,11 Q10,9 12,9 L18,9 Q20,9 20,11 L20,15" stroke={color} strokeWidth="2.5" fill="none" />
      <circle cx="31" cy="20" r="2" fill={color} />
      <path d="M36,20 L43,24 L36,28 Z" stroke={color} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPlane({ color = defaults.color, size = defaults.size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6,24 L34,10 Q41,7 41,15 Q41,21 34,22 L24,24 L34,38 L27,38 L19,26 L12,29 L12,34 L7,34 L10,24 L6,24 Z"
        stroke={color} strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHandshake({ color = defaults.color, size = defaults.size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4,30 Q8,26 13,25 L20,24 L24,27" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M44,30 Q40,26 35,25 L28,24 L24,27" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M18,22 Q19,18 22,18 Q24,18 24,21 Q26,18 28,19 Q30,20 28,23 L24,27 L20,24 Z"
        stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M30,22 Q29,18 26,18 Q24,18 24,21 Q22,18 20,19 Q18,20 20,23 L24,27 L28,24 Z"
        stroke={color} strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M24,14 L25,11 M28,16 L31,14 M20,16 L17,14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconPencil({ color = defaults.color, size = defaults.size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,38 L34,14 M30,10 L38,18 M32,8 L40,16 L36,20 L28,12 Z"
        stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8,40 L10,38 L14,40 L10,43 Z" fill={color} />
    </svg>
  );
}

export function IconLock({ color = defaults.color, size = defaults.size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="22" width="28" height="20" rx="3" stroke={color} strokeWidth="2.5" />
      <path d="M16,22 L16,15 Q16,8 24,8 Q32,8 32,15 L32,22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="32" r="3" fill={color} />
    </svg>
  );
}
