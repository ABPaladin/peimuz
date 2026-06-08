import { disseminationLinks } from '../data/content.js';


export default function Footer() {
  return (
    <footer
      className="text-center px-8 py-8 text-[0.9rem] leading-[1.8]"
      style={{
        background: '#3A2410',
        color: '#F5EDD6',
        borderTop: '4px solid var(--gold)',
      }}
    >
      <div
        className="font-['Playfair_Display'] text-[1.15rem] mb-2"
        style={{ color: '#C9A84C' }}
      >
        Parteneriatul Muzical al Prutului · 2025–2026
      </div>
      <p>
        IP Gimnaziul „Dumitru Matcovschi", Chișinău &nbsp;⟺&nbsp; Școala
        Gimnazială „Mihail Kogălniceanu", Dorohoi
      </p>
      <p className="mt-2 opacity-60 text-[0.85rem]">
        Coordonatori: Barbănouă Marina &amp; Botezatu Emanuela · Atestare 2025–2026
      </p>
       <div
        className="mt-5 pt-4 flex flex-wrap gap-x-6 gap-y-2 justify-center text-[0.82rem]"
        style={{ borderTop: '1px solid gold' }}
      >
        <span className="opacity-70">Diseminare:</span>
        {disseminationLinks.map(({ label, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-opacity duration-200 hover:opacity-100 opacity-85"
            style={{ color: 'var(--green-lt)' }}
          >
            {label} ↗
          </a>
        ))}
      </div>
    </footer>
  );
}
