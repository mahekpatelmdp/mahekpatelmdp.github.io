import './Projects.css';
import { FaGithub } from 'react-icons/fa';
import Reveal from '../UI/Reveal';
import bannerPharma from '../../assets/01-pharma-life-sciences.svg';
import bannerHealthcare from '../../assets/02-healthcare.svg';
// import bannerRetail from '../../assets/03-retail.svg';
// import bannerBanking from '../../assets/04-banking-finance.svg';
// import bannerHR from '../../assets/05-hr-people-analytics.svg';
// import bannerMarketing from '../../assets/06-marketing.svg';
// import bannerConstruction from '../../assets/07-construction.svg';
// import constructionWorkbook from '../../assets/Construction_Profit_Dashboard.xlsx';

const PROJECTS = [
  {
    image: bannerPharma,
    tag: 'Pharma & Life Sciences',
    title: 'Pharma Inventory & Sales Analytics',
    summary: 'Transformed a raw pharmaceutical database export into structured inventory, sales, and balance-tracking dashboards for stock and sales performance.',
    tools: ['SQL', 'TypeScript', 'Data Transformation', 'Data Modeling', 'ETL', 'Data Validation'],
  },
  {
    image: bannerHealthcare,
    tag: 'Healthcare',
    title: 'Healthcare Predictive Modeling & EDA',
    summary: 'Applied predictive modeling and exploratory data analysis to healthcare datasets to surface patterns and inform further research.',
    tools: ['Python', 'R', 'EDA', 'Predictive Modeling', 'Statistical Analysis', 'Telehealth / Digital Health Platforms'],
    link: 'https://github.com/mahekpatelmdp/Predictive-Modeling-Healthcare-Data-Analysis',
  },
  {
    tag: 'Healthcare',
    title: 'Hospital Payments Data Pipeline',
    summary: 'Simulated a data engineering workflow for healthcare claims: generated and cleaned raw hospital payment data in Python, then transformed it into a dimensional model on BigQuery.',
    tools: ['Python', 'BigQuery', 'ETL', 'Dimensional Modeling', 'SQL'],
    link: 'https://github.com/mahekpatelmdp/hospital-payments-bigquery',
  },
  {
    tag: 'Healthcare',
    title: 'Hospital Payments Visualization',
    summary: 'Analyzed hospital payment patterns in Tableau to uncover trends in how hospitals charge and receive payments for medical services.',
    tools: ['Tableau', 'Data Visualization', 'Healthcare Analytics'],
    link: 'https://github.com/mahekpatelmdp/hospital-payments-viz',
  },
  {
    tag: 'Healthcare',
    title: 'Patient Readmission Predictor',
    summary: 'Built a predictive model to flag patients at elevated risk of hospital readmission from clinical and demographic features.',
    tools: ['Python', 'Jupyter Notebook', 'Predictive Modeling', 'Machine Learning'],
    link: 'https://github.com/mahekpatelmdp/patient-readmission-predictor',
  },
  {
    tag: 'Healthcare',
    title: 'EHR Adoption Analysis',
    summary: 'Analyzed EHR adoption trends through a Snowflake-based data pipeline for querying and reporting.',
    tools: ['Python', 'Snowflake', 'SQL'],
    link: 'https://github.com/mahekpatelmdp/ehr-adoption-snowflake',
  },
  // {
  //   image: bannerRetail,
  //   tag: 'Retail',
  //   title: 'Retail Sales & Customer Segmentation',
  //   problem: 'A retail transaction dataset needed to be turned into a clear view of which products and regions drove profit vs. loss.',
  //   approach: 'Cleaned transactional data in SQL/Excel and segmented customers by purchase frequency and value (RFM-style analysis).',
  //   result: 'Surfaced underperforming product categories and high-value customer segments to guide inventory and marketing focus.',
  //   tools: ['SQL', 'Excel', 'Power Query', 'Power BI', 'Dashboard Development', 'Segmentation / Clustering'],
  // },
  // {
  //   image: bannerBanking,
  //   tag: 'Banking & Finance',
  //   title: 'Bank Marketing Campaign Performance',
  //   problem: 'A bank wanted to know which customer segments responded best to a term-deposit marketing campaign.',
  //   approach: 'Analyzed campaign contact data and compared response rates across demographics and contact channels.',
  //   result: 'Identified the customer segments and contact timing with the strongest response rates to focus future spend.',
  //   tools: ['SQL', 'Tableau', 'Dashboard Development', 'A/B Testing', 'Statistical Analysis'],
  // },
  // {
  //   image: bannerHR,
  //   tag: 'HR & People Analytics',
  //   title: 'Employee Attrition & Workforce Analytics',
  //   problem: 'Leadership needed to understand which factors were most linked to employee turnover.',
  //   approach: 'Explored workforce data (tenure, overtime, income) in Python, then visualized breakdowns by department and tenure band.',
  //   result: 'Flagged the departments and tenure bands with elevated attrition risk in a leadership-ready report.',
  //   tools: ['Python', 'Power Query', 'Power BI', 'Data Modeling', 'Logistic Regression', 'Root Cause Analysis'],
  // },
  // {
  //   image: bannerMarketing,
  //   tag: 'Marketing',
  //   title: 'Campaign ROI & A/B Testing',
  //   problem: 'Marketing needed evidence on whether a new promotional campaign actually outperformed the standard one.',
  //   approach: 'Structured an A/B comparison across campaign variants and tested for statistical significance (ANOVA / post-hoc tests).',
  //   result: 'Provided a clear, significance-backed recommendation on which campaign variant to scale.',
  //   tools: ['Excel', 'SQL', 'Data Transformation', 'A/B Testing', 'ANOVA'],
  // },
  // {
  //   image: bannerConstruction,
  //   tag: 'Construction & Real Estate',
  //   title: 'Construction Profit Intelligence Dashboard',
  //   problem: 'A portfolio of construction projects had no single view tying contract value, cost overruns, and workforce efficiency together, so margin risk wasn’t visible until too late.',
  //   approach: 'Built a formula-driven Excel model across 7 linked tabs, including margin tracking, cost variance, workforce trends, and a live bid simulator, benchmarked against real Statistics Canada data.',
  //   result: 'Surfaced materials cost overruns (+12% vs. budget) as the top driver of the margin gap, flagged 2 of 6 projects as at-risk, and produced a data-backed bid recommendation.',
  //   tools: ['Excel', 'Financial Modeling', 'Scenario Analysis', 'Statistics Canada Data'],
  //   file: constructionWorkbook,
  //   fileLabel: 'Download Workbook (.xlsx)',
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="page-section">
      <Reveal className="projects-head">
        <div>
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <a href="https://github.com/mahekpatelmdp" target="_blank" rel="noopener noreferrer" className="github-profile">
          <FaGithub aria-hidden="true" /> github.com/mahekpatelmdp
        </a>
      </Reveal>

      <div className="project-grid">
        {PROJECTS.map((project, idx) => (
          <Reveal as="article" key={project.title} delay={(idx % 3) * 80} className="project">
            <div className="project-top">
              <span className="project-tag">{project.tag}</span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github"
                  aria-label={`${project.title} on GitHub`}
                  title="View on GitHub"
                >
                  <FaGithub />
                </a>
              )}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
            <p className="project-tools">{project.tools.join(' · ')}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
