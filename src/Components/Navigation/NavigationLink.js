const NavigationLink = (props) => {
  return (
    <a
      onClick={props.clickHandle}
      className={`nav-links ${props.isActive ? 'active' : ''}`}
      aria-current={props.isActive ? 'location' : undefined}
      href={props.link}
      title={props.name}
    >
      {props.name}
    </a>
  );
};

export default NavigationLink;
