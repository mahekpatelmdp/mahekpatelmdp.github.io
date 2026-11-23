import { useState } from 'react';
import './EducationAndExperience.css';
import { FiMapPin } from 'react-icons/fi';
import Reveal from '../UI/Reveal';

const COURSES_SHOWN = 3;

const EXPERIENCE = [
  {
    when: '2026 to now · Remote',
    role: 'Healthcare LLM Evaluator',
    org: 'Outlier',
    text: 'Writing answers to medical and public health questions, and rating AI responses for accuracy, misinformation and health equity.',
  },
  {
    when: 'Jan 2025 to Oct 2025 · Springfield, IL',
    role: 'Research Coordinator',
    org: 'University of Illinois Springfield',
    text: 'Ran data collection, analysis and database work for demographic studies, and helped faculty present the findings.',
  },
  {
    when: 'Sep 2023 to Nov 2024 · Seattle, WA',
    role: 'Clinical Coordinator',
    org: 'Smileworks Dental Clinic',
    text: 'Coordinated patient care with multidisciplinary teams, and handled scheduling, resource planning and reporting.',
  },
  {
    when: 'Aug 2022 to Sep 2023 · India',
    role: 'Dentist',
    org: 'Vinayak Dental Clinic',
    text: 'Performed restorations, extractions, scaling, root canals and prosthetic fittings, and used ClareDent for charting and scheduling.',
  },
];

const EDUCATION = [
  {
    when: '2024 to 2026 · Springfield, IL',
    role: 'M.S. Healthcare Informatics',
    org: 'University of Illinois Springfield',
    gpa: '3.85',
    courses: [
      'Healthcare Analytics',
      'Business Analysis',
      'Survey of U.S. Healthcare System',
      'Managing Healthcare Operations',
      'Introduction to Healthcare Informatics',
      'Database Concepts for Healthcare Management',
      'Healthcare System Analysis and Design',
      'Health Information Exchange and Interoperability',
      'Project Management in Healthcare',
      'Fundamentals of Data Communications',
      'Data Mining in Healthcare',
      'Healthcare Information Systems Security and Privacy',
    ],
  },
  {
    when: 'Jun 2018 to Aug 2023 · Nadiad, India',
    role: 'Bachelor of Dental Surgery (BDS)',
    org: 'Dharmsinh Desai University',
    courses: [
      'General Human Anatomy',
      'General Human Physiology & Biochemistry',
      'Dental Anatomy & Oral Histology',
      'General Pathology & Microbiology',
      'Dental Materials',
      'Pharmacology & Therapeutics',
      'General Medicine',
      'General Surgery',
      'Oral Pathology & Oral Microbiology',
      'Periodontics',
      'Conservative Dentistry & Endodontics',
      'Prosthodontics',
      'Oral Medicine & Radiology',
      'Oral & Maxillofacial Surgery',
      'Orthodontics & Dentofacial Orthopedics',
      'Pedodontics & Preventive Dentistry',
      'Public Health Dentistry',
      'Forensic Odontology & Jurisprudence',
    ],
  },
];

// First few courses as chips; the rest open with a "+ N more" toggle.
const Courses = ({ courses }) => {
  const [open, setOpen] = useState(false);
  const hidden = courses.length - COURSES_SHOWN;
  const visible = open ? courses : courses.slice(0, COURSES_SHOWN);

  return (
    <div className="entry-courses">
      <span className="entry-courses-label">Coursework</span>
      <ul className="course-list">
        {visible.map((course, idx) => (
          <li key={course} className="course" style={{ '--i': idx }}>
            {course}
          </li>
        ))}
        {hidden > 0 && (
          <li>
            <button
              type="button"
              className="course-toggle"
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? 'Show less' : `+ ${hidden} more`}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

// "Jan 2025 to Oct 2025 · Springfield, IL" -> date and place shown separately
const When = ({ value, isNow }) => {
  const [date, place] = value.split(' · ');
  return (
    <div className="entry-when">
      <span className="entry-date">{date}</span>
      {isNow && <span className="now-badge">Current</span>}
      {place && (
        <span className="entry-place">
          <FiMapPin aria-hidden="true" /> {place}
        </span>
      )}
    </div>
  );
};

const EducationAndExperience = () => {
  return (
    <div className="edu-exp">
      <div>
        <Reveal as="h3" className="col-heading">Experience</Reveal>
        <ol className="timeline">
          {EXPERIENCE.map((item, idx) => {
            const isNow = item.when.includes('now');
            return (
              <Reveal as="li" key={item.role} delay={idx * 90} className={`tl-item ${isNow ? 'is-now' : ''}`}>
                <span className="tl-dot" aria-hidden="true" />
                <div className="card tl-card">
                  <When value={item.when} isNow={isNow} />
                  <h4 className="entry-role">{item.role}</h4>
                  <p className="entry-org">{item.org}</p>
                  <p className="entry-text">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>

      <div>
        <Reveal as="h3" className="col-heading">Education</Reveal>
        <ul className="edu-list">
          {EDUCATION.map((item, idx) => (
            <Reveal as="li" key={item.role} delay={idx * 120} className="card edu-card">
              <When value={item.when} />
              <h4 className="entry-role">{item.role}</h4>
              <p className="entry-org">{item.org}</p>
              {item.gpa && <span className="gpa-badge">GPA {item.gpa}</span>}
              {item.courses && <Courses courses={item.courses} />}
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationAndExperience;
