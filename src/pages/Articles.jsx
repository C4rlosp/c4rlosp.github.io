import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Articles() {
  const { t } = useTranslation();

  const articles = [
    {
      slug: '/article/rpki-ghost',
      label: t('article.label'),
      title: t('article.title'),
      description: t('article.description'),
      cta: t('article.cta'),
      cover: '/rpki-ghost-cover.png',
      tags: ['RPKI', 'BGP', 'Security', 'Routing'],
    },

    // Agrega más artículos aquí con el mismo formato
  ];

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <p className="section-label fade-up fade-up-1">{t('nav.articles')}</p>
          <h1 className="section-title fade-up fade-up-2" style={{ marginBottom: 16 }}>
            {t('nav.articles')}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: 520 }} className="fade-up fade-up-3">
            {t('articles.subtitle')}
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container">
          <div className="articles-list">
            {articles.map((article, i) => (
              <Link
                key={i}
                to={article.slug}
                className="article-compact-card fade-up"
                style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
              >
                <div className="article-compact-image">
                  <img src={article.cover} alt={article.title} />
                </div>
                <div className="article-compact-body">
                  <div className="article-compact-label">📄 {article.label}</div>
                  <h3 className="article-compact-title">{article.title}</h3>
                  <p className="article-compact-desc">{article.description}</p>
                  <div className="article-compact-footer">
                    <div className="project-tags" style={{ flex: 1 }}>
                      {article.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <span className="article-compact-cta">{article.cta}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
