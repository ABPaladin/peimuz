// --- Galerie foto (src/assets/images/galerie) ---
import photoOnline from '../assets/images/galerie/sesiune-online.jpg';
import desenEnescu from '../assets/images/galerie/concurs-desen-enescu.jpg';
import desenDoga from '../assets/images/galerie/concurs-desen-doga.jpg';
import turEnescu from '../assets/images/galerie/tur-virtual-enescu.jpg';
import pliantEnescu from '../assets/images/pliant/PliantEnescu.jpg';
import pliantDoga from '../assets/images/pliant/PliantDoga.jpg';
import elpoz1 from '../assets/images/PozeElevi/PozaElevi01.jpg';
import elpoz2 from '../assets/images/PozeElevi/PozaElevi02.jpg';
import elpoz3 from '../assets/images/PozeElevi/PozaElevi03.jpg';
import elpoz4 from '../assets/images/PozeElevi/PozaElevi04.jpg';
import elpoz5 from '../assets/images/PozeElevi/PozaElevi05.jpg';
import elpoz6 from '../assets/images/PozeElevi/PozaElevi06.jpg';
import diploma1 from '../assets/images/Diplome/010.jpg';
import diploma2 from '../assets/images/Diplome/011.jpg';
import diploma3 from '../assets/images/Diplome/012.jpg';
import diploma4 from '../assets/images/Diplome/013.jpg';
import diploma5 from '../assets/images/Diplome/014.jpg';
import diploma6 from '../assets/images/Diplome/015.jpg';
import diploma7 from '../assets/images/Diplome/016.jpg';
import diploma8 from '../assets/images/Diplome/017.jpg';
// Pentru a adăuga mai multe poze, pune-le în images/galerie/ și importă-le aici.

// --- Cartea digitală: pagini cu note muzicale (src/assets/images/partituri) ---
import gwPage1 from '../assets/images/partituri/gramofon-waltz/page-1.jpg';
import gwPage2 from '../assets/images/partituri/gramofon-waltz/page-2.jpg';
import gwPage3 from '../assets/images/partituri/gramofon-waltz/page-3.jpg';
import rrPage1 from '../assets/images/partituri/rapsodia-romana-1/page-1.jpg';
import rrPage2 from '../assets/images/partituri/rapsodia-romana-1/page-2.jpg';
import rrPage3 from '../assets/images/partituri/rapsodia-romana-1/page-3.jpg';
import rrPage4 from '../assets/images/partituri/rapsodia-romana-1/page-4.jpg';
import rrPage5 from '../assets/images/partituri/rapsodia-romana-1/page-5.jpg';

// --- Cartea digitală: piese audio (src/assets/audio) ---
import gwAudio from '../assets/audio/gramofon-waltz.mp3';
import rrAudio from '../assets/audio/rapsodia-romana-1.mp3';

export const aboutCards = [
  {
    icon: '🎼',
    title: 'Scopul Proiectului',
    text: 'Cultivarea dragostei elevilor față de cunoașterea compozitorilor și operelor lor din ambele maluri ale Prutului — valorificând patrimoniul cultural muzical românesc.',
  },
  {
    icon: '💡',
    title: 'Motivație',
    text: 'Elevii sunt dornici să învețe tehnici noi și să se implice în activități în care să se simtă importanți. Platforma digitală creează oportunitatea ideală pentru această conexiune.',
  },
  {
    icon: '🖥️',
    title: 'Instrumente Digitale',
    text: 'Google Meet, Zoom, Kahoot, Google Sites și diverse platforme educaționale online au stat la baza colaborării virtuale dintre cei 110 elevi implicați.',
  },
  {
    icon: '🤝',
    title: 'Parteneriat Binațional',
    text: 'Protocolul de colaborare a fost semnat pe 19 februarie 2025, unind două instituții din Republica Moldova și România într-un proiect comun pe 3 ani.',
  },
];

export const stages = [
  {
    num: 'I',
    period: 'Septembrie 2025',
    desc: 'Lansarea proiectului, poster, reguli de navigare sigură',
  },
  {
    num: 'II',
    period: 'Octombrie 2025',
    desc: 'Tur virtual Casa Memorială George Enescu, concurs desene/postere, masă rotundă online',
  },
  {
    num: 'III',
    period: 'Noiembrie–Decembrie 2025',
    desc: 'Joc Kahoot, carte digitală „Compoziția preferată", pliant „Istoria vieții Compozitorului"',
  },
  {
    num: 'IV',
    period: 'Ianuarie–Februarie 2026',
    desc: 'Concurs cu diplome, prezentarea proiectelor de cercetare pe platforme educaționale',
  },
  {
    num: 'V',
    period: 'Martie 2026',
    desc: 'Realizarea unui site Google Sites — expoziție virtuală cu toate produsele proiectului',
  },
];

export const galleryItems = [
  {
    cat: 'online',
    title: 'Sesiune Online — Lansarea Proiectului',
    stage: 'Etapa I · Septembrie 2025',
    desc: 'Cei 110 elevi din ambele echipe s-au conectat prin Google Meet pentru lansarea oficială a proiectului. Au discutat obiectivele, au creat posterul echipei și au explorat regulile de navigare sigură pe internet.',
    caption: '110 elevi conectați din Moldova și România pentru primul pas comun',
    tag: 'Online · Lansare',
    // Add as many images as you like — they become a slider in the lightbox:
    images: [photoOnline],
    photoLabel: 'Sesiune video online\nGoogle Meet',
  },
  {
    cat: 'activitati',
    title: 'Concurs de Desene și Postere',
    stage: 'Etapa II · Octombrie 2025',
    desc: 'Elevii au participat cu entuziasm la concursul de desene și postere cu tema „Compozițiile lui Enescu și Doga" — o ocazie de a explora arta vizuală în conexiune cu muzica clasică.',
    caption: 'Concurs de desene, postere „Compozițiile lui Enescu și Doga”',
    tag: 'Activitate · Concurs',
    images: [elpoz1, elpoz2, elpoz3, desenDoga, elpoz4, elpoz5, elpoz6, desenEnescu],
    photoLabel: 'Elevii lucrează la postere\nEnescu & Doga',
  },
  
  {
    cat: 'lansare',
    title: 'Tur Virtual — Casa Memorială George Enescu',
    stage: 'Etapa II · Octombrie 2025',
    desc: 'Elevii au explorat virtual Casa Memorială George Enescu din Botoșani, descoperind locul de naștere al marelui compozitor și vioara sa legată de copilărie. A fost un moment emoționant de conexiune culturală.',
    caption: 'Explorarea digitală a locului natal al lui George Enescu, Botoșani',
    tag: 'Lansare · Cultural',
    photoLabel: 'Tur virtual\nCasa Memorială Enescu',
    // Coperta cardului (imaginea cu drona); la click se deschide turul 360° de mai jos.
    images: [turEnescu],
    // Tur 360° Google Street View încorporat (link din Google Maps → Partajează → „Încorporează o hartă").
    embed:
      'https://www.google.com/maps/embed?pb=!4v1780875167148!6m8!1m7!1sCAoSFENJSE0wb2dLRUlDQWdJRDZzSmtV!2m2!1d48.04383142225272!2d26.47870197117722!3f238.21!4f-1.6899999999999977!5f0.5970117501821992',
    embedTitle: 'Tur virtual 360° — Casa Memorială George Enescu, Liveni',
  },
  {
    cat: 'lansare',
    title: 'Pliant ”Istoria vieții compozitorului”',
    desc: 'Pliant informativ despre viața și opera lui George Enescu și Eugen Doga, realizat de elevi. La final, îți poți testa cunoștințele cu jocul Kahoot dedicat celor doi compozitori.',
    stage: 'Etapa II · Decembrie 2025',
    caption: 'Pliant informativ cu date despre viața și opera lui Enescu și Doga',
    tag: 'Expoziție',
    images: [pliantEnescu, pliantDoga],
    // `fit: 'contain'` => imaginea se vede ÎNTREAGĂ (nu se taie). Util la pliante/documente cu text.
    fit: 'contain',
    // Buton „Kahoot" afișat sub descriere în Lightbox (vezi item.link în Lightbox.jsx).
    link: 'https://create.kahoot.it/share/kahoot-eugen-doga-si-george-enescu/ef89d857-6275-434c-9978-a00815f2458b',
    linkLabel: '🎮 Joacă Kahoot — Enescu & Doga ↗',
    photoLabel: 'Expoziție postere\nEnescu · Doga',
  },
  {
    cat: 'activitati',
    title: 'Cartea Digitală „Compoziția Preferată"',
    stage: 'Etapa III · Noiembrie–Decembrie 2025',
    desc: 'Portofoliu digital realizat de elevi: partiturile compozițiilor preferate, însoțite de înregistrarea audio a fiecărei piese. Răsfoiește paginile cu note muzicale, iar sub fiecare partitură poți asculta piesa corespunzătoare.',
    caption: 'Partituri și piese audio adunate de elevi în cartea digitală',
    tag: 'Activitate · Digital',
    photoLabel: 'Portofolii digitale\nCarte digitală',
    // Carte digitală: fiecare compoziție are paginile ei cu note + piesa audio.
    // Pentru a adăuga încă o piesă: importă paginile și fișierul .mp3 sus,
    // apoi adaugă un obiect nou { title, composer, audio, pages: [...] } aici.
    book: [
      {
        title: 'Vals „Gramofon"',
        composer: 'Eugen Doga',
        audio: gwAudio,
        pages: [gwPage1, gwPage2, gwPage3, rrPage1],
      },
      {
        title: 'Rapsodia Română nr. 1',
        composer: 'George Enescu',
        audio: rrAudio,
        pages: [rrPage2, rrPage3, rrPage4, rrPage5],
      },
    ],
  },
  {
    cat: 'concurs',
    title: 'Decernarea Diplomei de Excelență',
    stage: 'Etapa IV · Februarie 2026',
    caption: 'Concurs!!! Oferirea de diplome',
    tag: 'Concurs · Expoziție',
    images: [diploma1, diploma2, diploma3, diploma4, diploma5, diploma6, diploma7, diploma8],
    // Diplomele sunt verticale (A4) — `fit: 'contain'` le afișează întregi, fără tăiere.
    fit: 'contain',
    photoLabel: 'Expoziție diplome\nConcurs de Excelență',
  },
];

export const impactStats = [
  { num: '110', label: 'Elevi implicați\nactiv' },
  { num: '2',   label: 'Țări partenere\nMoldova & România' },
  { num: '5',   label: 'Etape de\nactivitate' },
  { num: '3',   label: 'Ani de\ncolaborare' },
];

export const teamMembers = [
  {
    initials: 'BM',
    //img
    name: 'Barbănouă Marina',
    role: 'Profesor de Educație Muzicală · Grad Didactic II',
    school: 'IP Gimnaziul „Dumitru Matcovschi"',
    location: 'Chișinău, Republica Moldova',
  },
  {
    initials: 'BE',
    name: 'Botezatu Emanuela',
    role: 'Profesor · Grad Didactic I',
    school: 'Școala Gimnazială „Mihail Kogălniceanu"',
    location: 'Dorohoi, jud. Botoșani, România',
  },
];

export const durabilityItems = [
  { icon: '📅', text: 'Vom continua proiectul în fiecare an cu activități noi și relevante' },
  { icon: '📚', text: 'Îmbogățirea continuă a bibliotecii digitale create de elevi' },
  { icon: '💻', text: 'Dezvoltarea competențelor digitale la nivel avansat' },
  { icon: '🌐', text: 'Noi proiecte educaționale cu mai mulți elevi și profesori pe parcursul a 5 ani' },
  { icon: '🏆', text: 'Participare activă în obținerea de performanțe la concursuri' },
  { icon: '🤝', text: 'Noi acorduri de parteneriat cu instituții din țară și din afara ei' },
];

export const disseminationLinks = [
  { label: 'Gimnaziul „Dumitru Matcovschi"', url: 'https://dumitrumatcovschichisinau.educ.md/' },
  { label: 'Orizont', url: 'https://orizont.org/ro/' },
  { label: 'Școala Dorohoi', url: 'http://www.scoala8dorohoi.ro/' },
];

// Întoarce lista de imagini a unui item (suportă `book` cu pagini, `images` sau `img`).
export function getItemImages(item) {
  if (item.book?.length) return item.book.flatMap((comp) => comp.pages);
  if (item.images?.length) return item.images;
  if (item.img) return [item.img];
  return [];
}
