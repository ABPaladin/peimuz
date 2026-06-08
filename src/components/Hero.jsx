const BADGES = ['📍 Republica Moldova', '🎶 Educație Muzicală', '📍 România'];

export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="hero-bg-deco relative min-h-screen pt-750px flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #F5EDD6 0%, #F5EDD6 50%, #EAF0FA 100%)',
        borderBottom: '4px solid var(--gold)',
      }}
    >
      <div className="folk-diamonds" />

      <div className="hero-rise text-center px-8 py-8 relative z-2 max-w-2000px mx-auto w-full">
        <p
          className="hero-fade-1 font-['IM_Fell_English'] italic text-[2rem] tracking-[0.2em] mb-4"
          style={{ color: '#6A4420' }}
        >
          Parteneriat Educațional Internațional · 2025–2026
        </p>

        <div
          className="hero-fade-0 text-[2.5rem] tracking-[1rem] mb-4 opacity-60"
          style={{ color: 'var(--gold)' }}
        >
          ✦ ◆ ✦
        </div>

        <h1
          className="hero-fade-2 font-['Playfair_Display'] leading-[1.15] mb-2"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
            color: '#3A2410',
            textShadow: '0 1px 8px rgba(27,58,107,0.1)',
          }}
        >
          Cunoașterea și bunele practici<br />
          privind compozitorii și capodoperile<br />
          muzicale de pe ambele maluri ale Prutului
        </h1>

        <p
          className="hero-fade-3 font-['Crimson_Text'] text-[1.35rem] max-w-600px mx-auto mt-4"
          style={{ color: '#6A4420' }}
        >
          O călătorie muzicală și culturală între INSTITUȚIA PUBLICĂ GIMNAZIUL „Dumitru Matcovschi",<br />
          Republica Moldova orașul Chișinău și Școala Gimnazială „Mihail Kogălniceanu",
          Dorohoi, județul Botoșani, România
        </p>

        <div className="hero-fade-4 flex items-center gap-4 mx-auto my-8 max-w-100">
          <div className="flex-1 h-px opacity-60" style={{ background: 'var(--gold)' }} />
          <span className="text-[1.5rem]" style={{ color: 'var(--gold)' }}>❧</span>
          <div className="flex-1 h-px opacity-60" style={{ background: 'var(--gold)' }} />
        </div>

        <div className="hero-fade-5 flex gap-6 justify-center flex-wrap">
          {BADGES.map(badge => (
            <span
              key={badge}
              className="px-[1.2rem] py-[0.4rem] text-[0.9rem] tracking-0.1em font-['Crimson_Text']"
              style={{
                background: 'rgba(27,58,107,0.08)',
                border: '1px solid rgba(27,58,107,0.3)',
                color: 'var(--brown)',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="hero-bounce absolute bottom-8 text-[1.5rem] opacity-45 cursor-pointer border-none bg-transparent"
        style={{ color: 'var(--brown)' }}
      >
        ↓
      </button>
    </section>
  );
}
