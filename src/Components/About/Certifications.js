import './Certifications.css';
import Reveal from '../UI/Reveal';

const CERTIFICATIONS = [
  { issuer: 'Illinois Tech', title: 'AI Integration in Healthcare Patient Data', type: 'Course' },
  { issuer: 'Illinois Tech', title: 'Healthcare Data Management and Interfaces', type: 'Course' },
  { issuer: 'Google', title: 'Foundations of Business Intelligence', type: 'Course' },
  { issuer: 'Microsoft', title: 'Fundamentals of UI/UX Design', type: 'Course' },
  { issuer: 'Google', title: 'Agile Project Management', type: 'Course' },
  { issuer: 'Google', title: 'Foundations of Project Management', type: 'Course' },
  { issuer: 'IBM', title: 'Cybersecurity Architecture', type: 'Course' },
  { issuer: 'Salesforce', title: 'Sales and CRM Overview', type: 'Course' },
  { issuer: 'Novartis', title: 'Clinical Trials: Good Clinical Practice', type: 'Specialization', courses: 3, issued: 'Jun 2026', credentialId: '2O5YCS07YIC2' },
  { issuer: 'Johns Hopkins University', title: 'Healthcare IT Support', type: 'Specialization', courses: 4 },
  { issuer: 'Microsoft', title: 'Business Analysis Fundamentals', type: 'Course', issued: 'Aug 2024', credentialId: 'GX5F5J77XF3Z' },
  { issuer: 'CVS Health', title: 'Introduction to Customer Service', type: 'Course' },
  { issuer: 'Northeastern University', title: 'Analytics in Healthcare Management and Administration (with Honors)', type: 'Course' },
  { issuer: 'Johns Hopkins University', title: 'The Social and Technical Context of Health Informatics', type: 'Course' },
];

const Certifications = () => {
  return (
    <Reveal className="certs">
      <h3 className="edu-exp-heading">Certifications</h3>
      <ul className="certs-list" tabIndex={0} aria-label="Certifications, scrollable">
        {CERTIFICATIONS.map((cert) => (
          <li key={cert.title} className="cert">
            <span className="cert-title">{cert.title}</span>
            <span className="cert-from">
              <span className="cert-issuer">{cert.issuer}</span>
              {cert.credentialId && (
                <span className="cert-meta">Issued {cert.issued} · ID {cert.credentialId}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
};

export default Certifications;
