import './ContactDetails.css';

const CONTACT_ROWS = [
  { label: 'Email', value: 'mahekpatel.mdp@gmail.com', href: 'mailto:mahekpatel.mdp@gmail.com' },
  { label: 'Phone', value: '778-955-1108', href: 'tel:+17789551108' },
  { label: 'LinkedIn', value: 'linkedin.com/in/mahek-patel-mdp', href: 'https://www.linkedin.com/in/mahek-patel-mdp' },
];

// Contact block shown at the end of About me; #contact is the target for the hero's "Contact me" button.
const ContactDetails = () => {
  return (
    <div id="contact" className="contact">
      <p className="contact-intro">I&apos;d love to connect.</p>
      <ul className="contact-list">
        {CONTACT_ROWS.map((row) => (
          <li key={row.label} className="contact-row">
            <span className="contact-label">{row.label}</span>
            <a
              href={row.href}
              className="text-link contact-value"
              target={row.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
            >
              {row.value}
              <span className="link-arrow" aria-hidden="true">
                {row.href.startsWith('http') ? '↗' : '→'}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactDetails;
