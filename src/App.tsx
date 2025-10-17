import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Timeline } from './components/Timeline';
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div className="min-h-screen bg-black dark overflow-x-hidden">
      <ToastContainer />
      <Timeline />
      <Header />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
