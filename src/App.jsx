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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
