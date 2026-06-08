const LINKS = [
  ['#home',     'Acasă'],
  ['#about',    'Proiect'],
  ['#gallery',  'Galerie'],
  ['#about-us', 'Despre Noi'],
];

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 h-[72px]"
      style={{
        background: 'var(--cream)',
        boxShadow: '0 3px 16px rgba(139,94,60,0.15)',
        borderBottom: '3px solid var(--gold)',
      }}
    >
      <a href="#home" className="flex items-center gap-2 no-underline">
        {/* Aceeași notă muzicală ca faviconul (din public/favicon.svg) */}
        <img src="/favicon.svg" alt="" width="34" height="34" className="block" />
        <span
          className="font-['Playfair_Display'] text-[1.1rem] tracking-wider"
          style={{ color: 'var(--gold)' }}
        >
          Muzică
        </span>
      </a>

      <ul className="flex gap-8 list-none max-sm:gap-4">
        {LINKS.map(([href, label]) => (
          <li key={href}>
            <a href={href} className="nav-link">{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
