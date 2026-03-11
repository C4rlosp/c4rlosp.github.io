import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ArticleDetail() {
  const { t } = useTranslation();

  return (
    <main className="article-page">
      <div className="container">
        <Link to="/" className="back-link fade-up">
          {t('articleDetail.back')}
        </Link>

        <article className="article-content section">
          <header className="article-header fade-up">
            <p className="section-label">{t('articleDetail.label')}</p>
            <h1 className="article-full-title">
              {t('articleDetail.title_part1')}
              <span className="accent">{t('articleDetail.title_part2')}</span>
            </h1>
            <div className="article-meta">
              <span>{t('articleDetail.author')}</span>
              <span className="meta-separator">•</span>
              <span>{t('articleDetail.date')}</span>
            </div>
          </header>

          <div className="article-body fade-up">
            {/* Añadimos margen superior aquí para separar del header */}
            <p className="lead" style={{ marginTop: '50px' }}>
              {t('articleDetail.content.p1')}
            </p>
            <p>{t('articleDetail.content.p2')}</p>

            <blockquote className="article-quote">
              {t('articleDetail.content.quote1')}
            </blockquote>

            <p>{t('articleDetail.content.p3')}</p>
            
            <p style={{ fontStyle: 'italic', color: 'var(--text)', margin: '40px 0' }}>
              {t('articleDetail.content.p_sub')}
            </p>
            <p><strong>{t('articleDetail.content.ghost_def')}</strong></p>

            {/* Subtítulos con márgenes consistentes */}
            <h2 className="article-h3" style={{ marginTop: '80px', marginBottom: '30px' }}>
              {t('articleDetail.content.h3_1')}
            </h2>
            <p>{t('articleDetail.content.p4')}</p>

            <h4 className="article-h4">{t('articleDetail.content.h4_1')}</h4>
            <div className="article-image-container">
              <div className="article-image-wrapper terminal-style">
                <img src="/rpki_tables.png" alt="BIRD Tables" className="article-img" />
              </div>
              <p className="image-caption">{t('articleDetail.content.fig1')}</p>
            </div>

            <h4 className="article-h4">{t('articleDetail.content.h4_2')}</h4>
            <div className="article-image-container">
              <div className="article-image-wrapper">
                <img src="/rpki_roa_imported_only.png" alt="ROAs Imported" className="article-img" />
              </div>
              <p className="image-caption">{t('articleDetail.content.fig2')}</p>
              <p className="image-caption-sub">{t('articleDetail.content.fig2_cap')}</p>
            </div>

            <h4 className="article-h4">{t('articleDetail.content.h4_3')}</h4>
            <div className="article-image-container">
              <div className="article-image-wrapper">
                <img src="/rpki_roa_comparison.png" alt="Imported vs Preferred" className="article-img" />
              </div>
              <p className="image-caption">{t('articleDetail.content.fig3')}</p>
            </div>

            <h3 className="article-h3" style={{ marginTop: '80px', marginBottom: '30px' }}>
              {t('articleDetail.content.h3_2')}
            </h3>
            <ul className="article-list">
              {t('articleDetail.content.list', { returnObjects: true }).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="conclusion-box" style={{ marginTop: '100px', padding: '40px', borderTop: '1px solid var(--border)' }}>
              <h3 style={{ marginTop: 0, marginBottom: '20px' }}>{t('articleDetail.content.conclusion_h')}</h3>
              <p>{t('articleDetail.content.conclusion_p')}</p>
            </div>

            <h3 className="article-h3" style={{ marginTop: '80px', marginBottom: '30px' }}>
              {t('articleDetail.content.recommendations_h')}
            </h3>
            <ul className="article-list">
              {t('articleDetail.content.recommendations', { returnObjects: true }).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <footer className="article-footer" style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
              <p className="final-quote-text" style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center' }}>
                {t('articleDetail.content.final_quote')}
              </p>
              <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <Link to="/" className="btn-outline">
                  {t('articleDetail.back')}
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </main>
  );
}