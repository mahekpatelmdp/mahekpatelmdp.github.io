import './HeroBanner.css';
import portrait from '../../assets/hero-photo.jpg';
import Reveal from '../UI/Reveal';

// One heartbeat (PQRST) segment, 240 units wide, returning to the baseline.
const BEAT = 'l 70 0 l 8 -6 l 8 6 l 12 0 l 5 8 l 9 -58 l 9 66 l 6 -16 l 15 0 l 14 -10 l 14 10 l 70 0';
const ECG_PATH = `M 0 70 ${Array(7).fill(BEAT).join(' ')}`;

const HeroBanner = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <Reveal as="p" className="hero-greeting">
            Hi, I&apos;m
          </Reveal>

          <Reveal as="h1" delay={120} className="hero-title">
            Mahek Patel
          </Reveal>

          <div className="hero-intro">
            <Reveal as="p" delay={260}>
              I&apos;m a dentist by training with a master&apos;s in Healthcare Informatics. My background
              sits between two worlds: the clinic, where I worked directly with patients, and the data and
              systems that support their care.
            </Reveal>
            <Reveal as="p" delay={360}>
              Whether I&apos;m treating a patient, coordinating a busy clinic schedule or organizing research
              data, I care about the same things: accurate information, clear communication and respect for
              patient privacy.
            </Reveal>
            <Reveal as="p" delay={460}>
              I&apos;m based in Vancouver, and I enjoy work where patient care and health data meet.
            </Reveal>
          </div>

          <Reveal delay={560} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View projects <span className="link-arrow" aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className="btn btn-quiet">
              Contact me <span className="link-arrow" aria-hidden="true">→</span>
            </a>
          </Reveal>
        </div>

        <figure className="hero-portrait">
          <img src={portrait} alt="Portrait of Mahek Patel" />
        </figure>
      </div>

      <svg className="ecg" viewBox="0 0 1680 120" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path className="ecg-line" d={ECG_PATH} pathLength="1000" />
      </svg>
    </section>
  );
};

export default HeroBanner;
