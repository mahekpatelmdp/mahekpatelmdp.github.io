import { Helmet } from 'react-helmet';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
import Projects from '../Components/Projects/Projects';
import AboutMe from '../Components/About/AboutMe';
import Background from '../Components/About/Background';
import ContactSection from '../Components/Contact/ContactSection';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Mahek Patel</title>
      </Helmet>
      <HeroBanner />
      <Background />
      <AboutMe />
      <Projects />
      <ContactSection />
    </>
  );
};

export default Homepage;
