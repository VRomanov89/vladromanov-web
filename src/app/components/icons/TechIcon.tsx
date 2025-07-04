export default function TechIcon({className}:{className?:string}) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="10" width="16" height="16" rx="4" stroke="#1a1a1a" strokeWidth="2" fill="#f8fafc"/>
      <path d="M18 10v-3M18 26v3M10 18h-3M26 18h3" stroke="#0070f3" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="18" cy="18" r="3" fill="#0070f3"/>
    </svg>
  );
} 