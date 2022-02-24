import './App.scss';
import About from './components/About';
import Featurs from './components/Featurs';
import Header from './components/Header';
import Tours from './components/Tours';
import Stories from './components/Stories';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <About />
      <Featurs />
      <Tours />
      <Stories />
      <Booking />
      <Footer/>
    </>
  );
}

export default App;