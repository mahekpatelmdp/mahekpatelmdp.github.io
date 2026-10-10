import './Skills.css';
import Reveal from '../UI/Reveal';

const CLINICAL = [
  'Restorations',
  'Extractions',
  'Scaling & Root Planing',
  'Root Canal Treatment',
  'Prosthetic Fittings',
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
  'Google Sheets',
  'BigQuery',
  'Snowflake',
  'SAP',
  'VS Code',
  'Salesforce CRM',
  'JIRA',
  'Tableau',
  'Power BI',
  'Looker Studio',
  'LLM Tools',
  'Claude',
];

const METHODS = [
  'Business Analysis',
  'EDA',
  'Segmentation / Clustering',
  'Cohort Analysis',
  'Linear Regression',
  'Logistic Regression',
  'A/B Testing',
  'ANOVA & Post-Hoc T-Test',
  'Statistical Analysis',
  'Root Cause Analysis',
  'Data Modeling',
  'ETL',
  'Data Validation',
  'Data Mining (SAS Enterprise Miner)',
];

const HEALTHCARE = [
  'EHR / EMR Systems (ClareDent)',
  'HL7 & FHIR Interoperability',
  'Health Information Exchange (HIE)',
  'HIPAA & Patient Data Privacy',
  'Healthcare System Analysis & Design',
  'Telehealth / Digital Health Platforms',
  'Clinical Data Management',
  'Healthcare Compliance',
  'Records Management',
  'Clinical Documentation',
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
