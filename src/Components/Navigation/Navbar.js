import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import NavItems, { NAV_LINKS } from './NavItems';
import { Modal } from '../UI/Modal';
import { CgClose } from 'react-icons/cg';

// Tracks which section is in the middle of the screen so its nav link can be highlighted.
const useActiveSection = () => {
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const sections = NAV_LINKS
      .map((item) => document.querySelector(item.link))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
};

const NavBar = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showNavigationModalHandler = () => setIsNavigationOpen(true);
  const hideNavigationModalHandler = () => setIsNavigationOpen(false);

  return (
    <header className={`site-header sticky top-0 z-50 ${isScrolled ? 'is-scrolled' : ''}`}>
      <NavItems modalNavigation={false} active={active} />

      <div className="site-header-actions">

        <button className="hamburger-menu" onClick={showNavigationModalHandler} aria-label="Open menu">
          <GiHamburgerMenu />
        </button>
      </div>

      {isNavigationOpen && (
        <Modal onClose={hideNavigationModalHandler}>
          <div className="nav-modal flex h-full">
            <NavItems
              hideNavigation={hideNavigationModalHandler}
              modalNavigation={true}
              active={active}
            />
            <button className="modal-close self-start" onClick={hideNavigationModalHandler} aria-label="Close menu">
              <CgClose />
            </button>
          </div>
        </Modal>
      )}
    </header>
  );
};

export default NavBar;
