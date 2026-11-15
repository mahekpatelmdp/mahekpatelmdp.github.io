import './Skills.css';
import Reveal from '../UI/Reveal';

// Procedures like extractions and root canals are listed under the Dentist role, so they are not repeated here.
const CLINICAL = [
  'Restorations',
  'Treatment Planning',
  'Infection Control',
  'Patient Education',
  'Patient Scheduling',
];

const TOOLS = [
  'SQL',
  'Python',
  'R',
  'Excel (VBA)',
  'BigQuery',
  'Snowflake',
  'SAP',
  'Salesforce CRM',
  'JIRA',
  'Tableau',
  'Power BI',
  'Looker Studio',
  'LLM tools (Claude)',
];

const METHODS = [
  'Business Analysis',
  'EDA',
  'Segmentation / Clustering',
  'Cohort Analysis',
  'Linear & Logistic Regression',
  'A/B Testing',
  'ANOVA',
  'Root Cause Analysis',
  'Data Modeling',
  'ETL',
  'Data Validation',
  'Data Mining (SAS)',
];

const HEALTHCARE = [
  'EHR / EMR Systems (ClareDent)',
  'HL7, FHIR & HIE',
  'HIPAA & Patient Data Privacy',
  'Telehealth / Digital Health Platforms',
  'Clinical Data Management',
  'Healthcare Compliance',
  'Clinical Documentation & Records',
];

const HEALTHCARE_AI = [
  'LLM Evaluation',
  'Medical Content Review',
  'Quality Assurance',
  'AI Ethics & Health Equity Review',
];

const GROUPS = [
  { label: 'Clinical', items: CLINICAL },
  { label: 'Healthcare & health IT', items: HEALTHCARE },
  { label: 'Data & reporting tools', items: TOOLS },
  { label: 'Analysis & methods', items: METHODS },
  { label: 'Healthcare AI', items: HEALTHCARE_AI },
];

const Skills = () => {
  return (
    <Reveal className="toolkit">
      <h3 className="edu-exp-heading">Toolkit</h3>
      <dl className="toolkit-list">
        {GROUPS.map((group) => (
          <div key={group.label} className="toolkit-row">
            <dt>{group.label}</dt>
            <dd>{group.items.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
};

export default Skills;
