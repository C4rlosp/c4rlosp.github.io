import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/talks', label: t('nav.talks') },
    { to: '/articles', label: t('nav.articles') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <NavLink to="/" className="navbar-logo">
            <span>&lt;</span>Carlos Pérez<span>/&gt;</span>
          </NavLink>

          <ul className="navbar-links">
            {links.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <button className="lang-btn" onClick={toggleLang}>
                {i18n.language === 'es' ? 'EN' : 'ES'}
              </button>
            </li>
          </ul>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <NavLink key={link.to} to={link.to} end={link.to === '/'}>
            {link.label}
          </NavLink>
        ))}
        <button className="lang-btn" onClick={toggleLang} style={{ marginTop: 8, alignSelf: 'flex-start' }}>
          {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </>
  );
}
