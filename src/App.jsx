import './App.css';
import './output.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';
import Cookies from './pages/Cookies';
import Accesibility from './pages/Accesibility';
import CookiesBanner from './components/CookiesBanner';

//TODO: Pendiente confirmar como van a ser los post si con enlances a noticias o con otra pagina con el desarrollo de la noticia
//TODO: Cookies pendiente asigar usos
//TODO: Responsive
//TODO: Navbar Mobile

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre-nosotros' element={<About />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/actualidad' element={<Blog />} />
        <Route path='/privacidad' element={<Privacy />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/accesibilidad' element={<Accesibility />} />
      </Routes>
      <CookiesBanner />
      <Footer />
    </>
  );
}

export default App;
