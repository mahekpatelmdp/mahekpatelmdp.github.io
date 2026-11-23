import './AboutMe.css';
import Reveal from '../UI/Reveal';
import ContactDetails from '../Contact/ContactDetails';

const AboutMe = () => {
  return (
    <section id="about" className="page-section">
      <div className="about-grid">
        <Reveal className="about-head">
          <h2 className="section-title">About me</h2>
        </Reveal>

        <Reveal delay={120} className="about-copy">
          <p>
            Having charted treatments, scheduled appointments and explained procedures to patients myself,
            I try to remember the people behind every record, report or AI answer I work on. Good health
            data starts with someone&apos;s visit to a clinic.
          </p>
          <p>
            On the technical side, I use SQL, Python, Tableau and Power BI, and I work with EHR systems,
            HIPAA privacy rules and standards like HL7 and FHIR. I keep building these skills through
            projects and coursework, one problem at a time.
          </p>
          <p>
            Outside work, I follow what&apos;s new in medicine and would be glad to volunteer in health,
            medical research, workforce development, or science and technology.
          </p>
        </Reveal>

        <Reveal delay={200} className="about-contact">
          <ContactDetails />
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
