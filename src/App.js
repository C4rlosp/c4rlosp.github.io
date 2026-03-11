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