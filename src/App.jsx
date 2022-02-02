import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import Anime from './components/Anime';
import Clamp from './components/Clamp';
import Manga from './components/Manga';
import Presentation from './components/Presentation';
import './reset.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/clamp" element={<Clamp />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/presentation" element={<Presention />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
