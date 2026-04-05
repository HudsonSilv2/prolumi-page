import { Header } from './components/header';
import { HeroSlideShow } from './components/HeroSlideShow';
import { About } from './components/About';
import { InfoCards } from './components/InfoCards';
import { Partners } from './components/Partners';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import View3D from './components/View3D';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSlideShow />
      <About />
      <InfoCards />
      <Partners />
      <Projects />
      <Contact />
      <View3D />
      <Footer />
    </>
  );
}

export default App;
