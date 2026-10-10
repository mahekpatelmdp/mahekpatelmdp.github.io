import './AboutMe.css';
import Reveal from '../UI/Reveal';

const AboutMe = () => {
  return (
    <section id="about" className="page-section">
      <div className="about-grid">
        <Reveal className="about-head">
          <span className="eyebrow">About</span>
          <h2 className="section-title">About me</h2>
        </Reveal>

        <Reveal delay={120} className="about-copy">
          <p>
            Healthcare professional with expertise in dentistry, health informatics, healthcare AI, and
            compliance. I apply clinical knowledge to data and technology, with a strong focus on
            accuracy, ethics, privacy, and patient care.
          </p>
          <p>
            I value precision, evidence-based thinking, and clear communication across clinical,
            technical, and regulatory teams.
          </p>
          <p>
            Outside of work, I keep up with where medicine is heading, and I am open to volunteering for
            causes in health, medical research, workforce development, and science and technology.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
