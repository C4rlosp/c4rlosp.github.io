import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './i18n';
import './index.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Talks from './pages/Talks';
import Contact from './pages/Contact';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ArticleDetail from './pages/ArticleDetail';
import Articles from './pages/Articles';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>{t('hero.name')} © {year}</span>
        <div className="footer-social">
          <span className="footer-social-label">Sígueme en mis redes sociales</span>
          <div className="footer-social-icons">
            <a href={t('contact.github')} target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={t('contact.linkedin')} target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@CarlosPerezP" target="_blank" rel="noopener noreferrer" title="YouTube" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/talks" element={<Talks />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/rpki-ghost" element={<ArticleDetail />} />
      </Routes>
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}