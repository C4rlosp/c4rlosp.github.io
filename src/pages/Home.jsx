import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();
  const achievements = t('achievements.items', { returnObjects: true });
  const skills = t('skills', { returnObjects: true });

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge fade-up fade-up-1">
                {t('hero.title')}
              </div>
              <p className="hero-greeting fade-up fade-up-1">{t('hero.greeting')}</p>
              <h1 className="hero-name fade-up fade-up-2">
                {t('hero.name').split(' ').map((word, i) => (
                  <span key={i} className={i === 0 ? 'accent' : ''}>{word} </span>
                ))}
              </h1>
              <p className="hero-title fade-up fade-up-3">{t('hero.title')}</p>
              <p className="hero-subtitle fade-up fade-up-4">{t('hero.subtitle')}</p>
              
              <div className="hero-ctas fade-up fade-up-5">
                <Link to="/projects" className="btn-primary">
                  {t('hero.cta_projects')} →
                </Link>
                <Link to="/article/rpki-ghost" className="btn-outline">
                  {t('hero.cta_article')}
                </Link>
              </div>
            </div>

            <div className="hero-avatar fade-up fade-up-3">
              <div className="hero-avatar-placeholder">
                <img
                  src="/avatar-don-Carlos.jfif" 
                  alt="Carlos Perez"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="section">
        <div className="container">
          <div className="divider" />
          <p className="section-label">{t('about.title')}</p>
          <div className="about-grid">
            <div className="about-bio">
              <p>{t('about.bio')}</p>
              <p>{t('about.bio2')}</p>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: 16 }}>{t('about.skills_title')}</p>
              <div className="skills-grid">
                {Array.isArray(skills) && skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTACADO / LOGROS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="section-label">{t('achievements.title')}</p>
          <h2 className="section-title">{t('achievements.title')}</h2>
          <div className="achievements-grid">
            {Array.isArray(achievements) && achievements.map((item, i) => (
              <div className="achievement-card" key={i}>
                <div className="achievement-icon">{item.icon}</div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARICULO */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Link
            to="/article/rpki-ghost"
            className="article-card-link"
          >
            <div className="article-card-featured">
              <div className="article-card-image">
                <img src="/rpki-ghost-cover.png" alt="RPKI Ghost Analysis" />
                <div className="image-overlay"></div>
              </div>
              
              <div className="article-card-info">
                <div>
                  <div className="article-label">{t('article.label')}</div>
                  <h3 className="article-title">{t('article.title')}</h3>
                  <p className="article-desc">{t('article.description')}</p>
                </div>
                
                <div className="article-footer-meta">
                  <span className="article-cta-btn">{t('article.cta')}</span>
                  <div className="article-arrow">→</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}