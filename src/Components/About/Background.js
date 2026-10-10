import './Background.css';
import Reveal from '../UI/Reveal';
import EducationAndExperience from './EducationAndExperience';
import Certifications from './Certifications';
import Skills from '../Projects/Skills';

const Background = () => {
  return (
    <section id="experience" className="page-section">
      <Reveal>
        <span className="eyebrow">Background</span>
        <h2 className="section-title">Experience and education</h2>
      </Reveal>

      <EducationAndExperience />

      <div className="background-extras">
        <Certifications />
        <Skills />
      </div>
    </section>
  );
};

export default Background;
