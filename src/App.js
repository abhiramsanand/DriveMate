import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cars from './components/Cars'
import Booking from './components/Booking';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
    useEffect(() => {
      document.title = 'DriveMate';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-900">
      <Navbar />
      <Hero />
      <Cars />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
