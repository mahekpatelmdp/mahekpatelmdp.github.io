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
            On the data side, I work with SQL, Python, Tableau and Power BI, and I know my way around EHR
            systems, patient privacy rules like HIPAA, and health data standards like HL7 and FHIR.
          </p>
          <p>
            I care about getting the details right, keeping patient information private and explaining
            things clearly, whether I&apos;m talking to a patient, a clinician or a tech team.
          </p>
          <p>
            Outside work, I like keeping up with what&apos;s new in medicine, and I&apos;d be glad to
            volunteer in health, medical research, workforce development, or science and tech.
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
