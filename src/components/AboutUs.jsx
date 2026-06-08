import SectionHeader from './SectionHeader.jsx';
import { impactStats, teamMembers, durabilityItems } from '../data/content.js';

export default function AboutUs() {
  return (
    <section
      id="about-us"
      style={{ background: '#F5EDD6', borderTop: '6px solid #4A2C0A', color: '#3A2410' }}
    >
      <div className="section-inner">
        <SectionHeader tag="Echipa Noastră" title="Despre Noi" />

        {/* Impact numbers */}
        <div
          className="reveal flex flex-wrap mb-12"
          style={{ border: '1px solid rgba(201,168,76,0.4)', background: 'var(--cream)' }}
        >
          {impactStats.map((stat, i) => (
            <div
              key={i}
              className="flex-1 min-w-40 text-center px-4 py-8"
              style={{
                borderRight:
                  i < impactStats.length - 1 ? '1px solid rgba(201,168,76,0.3)' : 'none',
              }}
            >
              <span
                className="block font-['Playfair_Display'] text-[3rem] leading-none"
                style={{ color: '#4A2C0A' }}
              >
                {stat.num}
              </span>
              <div
                className="text-[0.9rem] opacity-70 mt-1 leading-[1.4] whitespace-pre-line"
                style={{ color: 'var(--ink)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team cards */}
        <div
          className="grid gap-8 mb-12"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {teamMembers.map(member => (
            <div
              key={member.name}
              className="reveal team-card-bar p-8 transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--cream)',
                border: '1px solid rgba(201,168,76,0.5)',
                boxShadow: '0 4px 16px var(--shadow)',
              }}
            >
              <div
                className="avatar-hex w-18 h-18 flex items-center justify-center font-['Playfair_Display'] text-[1.8rem] mb-4"
                style={{ background: '#4A2C0A', color: 'var(--gold)' }}
              >
                {member.initials}
              </div>
              <h3
                className="font-['Playfair_Display'] text-[1.2rem] mb-1"
                style={{ color: '#4A2C0A' }}
              >
                {member.name}
              </h3>
              <div
                className="text-[0.9rem] italic opacity-75 mb-3"
                style={{ color: 'var(--ink)' }}
              >
                {member.role}
              </div>
              <div
                className="text-[0.9rem] leading-normal pt-3"
                style={{
                  color: 'var(--ink)',
                  borderTop: '1px solid rgba(201,168,76,0.3)',
                }}
              >
                <strong className="block mb-1" style={{ color: 'var(--brown)' }}>
                  {member.school}
                </strong>
                {member.location}
                <br />
                <span className="italic text-[0.85rem]" style={{ color: 'var(--gold-lt)' }}>
                  Coordonator proiect
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div
          className="reveal text-center p-10 mb-12"
          style={{ background: 'var(--cream)', border: '1px solid rgba(201,168,76,0.5)' }}
        >
          <h3
            className="font-['Playfair_Display'] text-[1.5rem] mb-4"
            style={{ color: '#4A2C0A' }}
          >
            Misiunea Noastră
          </h3>
          <div className="flex items-center gap-4 mx-auto mb-6 max-w-75">
            <div className="flex-1 h-px opacity-50" style={{ background: 'var(--gold)' }} />
            <span style={{ color: 'var(--gold)' }}>✦</span>
            <div className="flex-1 h-px opacity-50" style={{ background: 'var(--gold)' }} />
          </div>
          <p
            className="max-w-170 mx-auto leading-[1.8] opacity-90"
            style={{ color: 'var(--ink)' }}
          >
            Cultivăm dragostea elevilor față de cunoașterea compozitorilor și operele acestora,
            valorificând identitatea culturală muzicală din spațiul românesc de pe ambele maluri ale
            Prutului. Prin comunicare și colaborare virtuală, atragem atenția asupra rolului major al
            disciplinei Educație Muzicală.
          </p>
        </div>

        {/* Durability */}
        <h3
          className="reveal font-['Playfair_Display'] text-[1.5rem] text-center mb-6"
          style={{ color: '#1B3A6B', marginTop: '3rem' }}
        >
          Asigurarea Durabilității
        </h3>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}
        >
          {durabilityItems.map((item, i) => (
            <div
              key={i}
              className="reveal flex gap-4 items-start p-4"
              style={{ background: '#ffffff', borderLeft: '3px solid var(--gold)' }}
            >
              <span className="text-[1.5rem] shrink-0">{item.icon}</span>
              <span className="text-[0.95rem] opacity-80 leading-normal" style={{ color: 'var(--ink)' }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
