import NavigationLink from './NavigationLink';

export const NAV_LINKS = [
  { name: 'Experience', link: '#experience' },
  { name: 'Projects', link: '#projects' },
  { name: 'About', link: '#about' },
];

const NavItems = (props) => {
  const navigationItemsClasses =
    'navigation-items ' +
    (props.modalNavigation
      ? 'mobile-navigation flex-col m-auto'
      : 'desktop-navigation');

  return (
    <nav className={navigationItemsClasses}>
      {NAV_LINKS.map((item) => (
        <NavigationLink
          key={item.link}
          clickHandle={props.hideNavigation}
          name={item.name}
          link={item.link}
          isActive={props.active === item.link}
        />
      ))}
    </nav>
  );
};

export default NavItems;
