import { useState } from 'react';
import './EducationAndExperience.css';
import Reveal from '../UI/Reveal';

const COURSES_SHOWN = 5;

const EXPERIENCE = [
  {
    when: '2026 to now · Remote',
    role: 'Healthcare LLM Evaluator',
    org: 'Outlier',
    text: 'Writing step-by-step answers to public health and medical questions, and evaluating model outputs for accuracy, misinformation and health equity.',
  },
  {
    when: 'Jan 2025 to Oct 2025 · Springfield, IL',
    role: 'Research Coordinator',
    org: 'University of Illinois Springfield',
    text: 'Ran data collection, analysis and database management for ongoing demographic studies, and worked with faculty to present the findings.',
  },
  {
    when: 'Sep 2023 to Nov 2024 · Seattle, WA',
    role: 'Clinical Coordinator',
    org: 'Smileworks Dental Clinic',
    text: 'Coordinated patient care across local facilities with multidisciplinary teams, and handled scheduling, resource planning and reporting.',
  },
  {
    when: 'Aug 2022 to Sep 2023 · India',
    role: 'Dentist',
    org: 'Vinayak Dental Clinic',
    text: 'Performed restorations, extractions, scaling, root canals and prosthetic fittings, using ClareDent for scheduling, charting and treatment plans.',
  },
];

const EDUCATION = [
  {
    when: '2024 to 2026 · Springfield, IL',
    role: 'M.S. Healthcare Informatics',
    org: 'University of Illinois Springfield',
    text: 'GPA 3.85.',
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
          <li
            key={course}
            className="course"
            style={{ animationDelay: idx >= COURSES_SHOWN ? `${(idx - COURSES_SHOWN) * 35}ms` : '0ms' }}
          >
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
              {open ? '− Show less' : `+ ${hidden} more`}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

const Entry = ({ item }) => (
  <Reveal as="li" className="entry">
    <p className="entry-when">{item.when}</p>
    <h4 className="entry-role">
      {item.role} <span className="entry-org">· {item.org}</span>
    </h4>
    {item.text && <p className="entry-text">{item.text}</p>}
    {item.courses && <Courses courses={item.courses} />}
  </Reveal>
);

const EducationAndExperience = () => {
  return (
    <div className="edu-exp">
      <div>
        <h3 className="edu-exp-heading">Experience</h3>
        <ul className="entry-list">
          {EXPERIENCE.map((item) => <Entry key={item.role} item={item} />)}
        </ul>
      </div>
      <div>
        <h3 className="edu-exp-heading">Education</h3>
        <ul className="entry-list">
          {EDUCATION.map((item) => <Entry key={item.role} item={item} />)}
        </ul>
      </div>
    </div>
  );
};

export default EducationAndExperience;
