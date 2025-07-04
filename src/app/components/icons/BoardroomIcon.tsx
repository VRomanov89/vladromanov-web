export default function BoardroomIcon({className}:{className?:string}) {
  return (
    <svg className={className} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="18" cy="18" r="8" stroke="#1a1a1a" strokeWidth="2" fill="#f8fafc"/>
      <circle cx="18" cy="10" r="2" fill="#0070f3"/>
      <circle cx="24" cy="22" r="2" fill="#0070f3"/>
      <circle cx="12" cy="22" r="2" fill="#0070f3"/>
      <path d="M18 12v4m0 0l-4 6m4-6l4 6" stroke="#0070f3" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
} 