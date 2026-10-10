import './HeroBanner.css';
import portrait from '../../assets/1781826321052.png';
import Reveal from '../UI/Reveal';

// One heartbeat (PQRST) segment, 240 units wide, returning to the baseline.
const BEAT = 'l 70 0 l 8 -6 l 8 6 l 12 0 l 5 8 l 9 -58 l 9 66 l 6 -16 l 15 0 l 14 -10 l 14 10 l 70 0';
const ECG_PATH = `M 0 70 ${Array(7).fill(BEAT).join(' ')}`;

// Headline words rise in one after another; the accent word is set in italic.
const HEADLINE = [
  { text: 'Mahek' },
  { text: 'Patel', accent: true },
];

const HeroBanner = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <Reveal as="p" className="hero-greeting">
            Hi, I&apos;m
          </Reveal>

          <h1 className="hero-title" aria-label="Hi, I'm Mahek Patel">
            {HEADLINE.map((word, idx) => (
              <span key={word.text} className="word" aria-hidden="true">
                <span
                  className={`word-inner ${word.accent ? 'accent' : ''}`}
                  style={{ animationDelay: `${150 + idx * 110}ms` }}
                >
                  {word.text}
                </span>
              </span>
            ))}
          </h1>

          <Reveal as="p" delay={400} className="hero-intro">
            Internationally trained dentist with an M.S. in Healthcare Informatics from the University of
            Illinois Springfield. My experience spans clinical dentistry, patient care coordination and
            research data management, with a consistent focus on accurate records, clear communication
            and patient safety.
          </Reveal>

          <Reveal delay={560} className="hero-actions">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href="#contact" className="btn btn-quiet">Contact me</a>
          </Reveal>
        </div>

        <figure className="hero-portrait">
          <span className="hero-portrait-outline" aria-hidden="true" />
          <div className="hero-portrait-frame">
            <img src={portrait} alt="Portrait of Mahek Patel" />
          </div>
        </figure>
      </div>

      <svg className="ecg" viewBox="0 0 1680 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path className="ecg-base" d={ECG_PATH} />
        <path className="ecg-pulse" d={ECG_PATH} pathLength="1000" />
      </svg>
    </section>
  );
};

export default HeroBanner;
