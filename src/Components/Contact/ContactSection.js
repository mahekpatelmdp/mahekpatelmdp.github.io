import './ContactSection.css';
import Reveal from '../UI/Reveal';

const CONTACT_ROWS = [
  { label: 'Email', value: 'mahekpatel.mdp@gmail.com', href: 'mailto:mahekpatel.mdp@gmail.com' },
  { label: 'Phone', value: '778-955-1108', href: 'tel:+17789551108' },
  { label: 'LinkedIn', value: 'linkedin.com/in/mahek-patel-8ba264286', href: 'https://www.linkedin.com/in/mahek-patel-8ba264286' },
  { label: 'Resume', value: 'Download PDF', href: `${process.env.PUBLIC_URL}/Mahek_Patel_Resume.pdf`, download: 'Mahek_Patel_Resume.pdf' },
];

const ContactSection = () => {
  return (
    <section id="contact" className="page-section contact">
      <Reveal>
        <span className="eyebrow">Contact</span>
        <h2 className="section-title contact-title">Get in touch</h2>
        <p className="section-intro">
          Based in Greater Vancouver, BC, and available for on-site, hybrid or remote roles. Email is the
          best way to reach me.
        </p>
      </Reveal>

      <Reveal delay={120} as="ul" className="contact-list">
        {CONTACT_ROWS.map((row) => (
          <li key={row.label} className="contact-row">
            <span className="contact-label">{row.label}</span>
            <a
              href={row.href}
              className="text-link contact-value"
              target={row.href.startsWith('http') ? '_blank' : undefined}
              download={row.download}
              rel="noopener noreferrer"
            >
              {row.value}
            </a>
          </li>
        ))}
      </Reveal>
    </section>
  );
};

export default ContactSection;
