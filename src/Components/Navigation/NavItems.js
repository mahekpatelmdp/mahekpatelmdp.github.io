import { useLayoutEffect, useRef, useState } from 'react';
import NavigationLink from './NavigationLink';

export const NAV_LINKS = [
  { name: 'Experience', link: '#experience' },
  { name: 'Projects', link: '#projects' },
  { name: 'About', link: '#about' },
];

// Desktop only: one underline that glides to whichever link matches the section on screen.
const useSlidingIndicator = (navRef, active, enabled) => {
  const [box, setBox] = useState({ left: 0, width: 0, visible: false });

  useLayoutEffect(() => {
    if (!enabled) return undefined;
    const measure = () => {
      const link = navRef.current?.querySelector('.nav-links.active');
      setBox(link
        ? { left: link.offsetLeft, width: link.offsetWidth, visible: true }
        : (prev) => ({ ...prev, visible: false }));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [navRef, active, enabled]);

  return box;
};

const NavItems = (props) => {
  const navRef = useRef(null);
  const isDesktop = !props.modalNavigation;
  const indicator = useSlidingIndicator(navRef, props.active, isDesktop);

  const navigationItemsClasses =
    'navigation-items ' +
    (props.modalNavigation
      ? 'mobile-navigation flex-col m-auto'
      : 'desktop-navigation');

  return (
    <nav ref={navRef} className={navigationItemsClasses}>
      {NAV_LINKS.map((item) => (
        <NavigationLink
          key={item.link}
          clickHandle={props.hideNavigation}
          name={item.name}
          link={item.link}
          isActive={props.active === item.link}
        />
      ))}
      {isDesktop && (
        <span
          className="nav-indicator"
          aria-hidden="true"
          style={{
            transform: `translateX(${indicator.left}px)`,
            width: indicator.width,
            opacity: indicator.visible ? 1 : 0,
          }}
        />
      )}
    </nav>
  );
};

export default NavItems;
