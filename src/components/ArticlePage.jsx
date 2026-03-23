import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/**
 * Componente genérico para renderizar cualquier artículo.
 *
 */

function Block({ block }) {
  switch (block.type) {
    case 'lead':
      return <p className="lead" style={{ marginTop: '50px' }}>{block.text}</p>;

    case 'p':
      return <p>{block.text}</p>;

    case 'p_italic':
      return <p style={{ fontStyle: 'italic', color: 'var(--text)', margin: '40px 0' }}>{block.text}</p>;

    case 'p_bold':
      return <p><strong>{block.text}</strong></p>;

    case 'quote':
      return <blockquote className="article-quote">{block.text}</blockquote>;

    case 'h2':
      return <h2 className="article-h3" style={{ marginTop: '80px', marginBottom: '30px' }}>{block.text}</h2>;

    case 'h3':
      return <h3 className="article-h3" style={{ marginTop: '80px', marginBottom: '30px' }}>{block.text}</h3>;

    case 'h4':
      return <h4 className="article-h4">{block.text}</h4>;

    case 'image':
      return (
        <div className="article-image-container">
          <div className={`article-image-wrapper${block.terminal ? ' terminal-style' : ''}`}>
            <img src={block.src} alt={block.alt || ''} className="article-img" />
          </div>
          {block.caption && <p className="image-caption">{block.caption}</p>}
          {block.subcaption && <p className="image-caption-sub">{block.subcaption}</p>}
        </div>
      );

    case 'list':
      return (
        <ul className="article-list">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );

    case 'conclusion':
      return (
        <div className="conclusion-box" style={{ marginTop: '100px', padding: '40px', borderTop: '1px solid var(--border)' }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px' }}>{block.title}</h3>
          <p>{block.text}</p>
        </div>
      );

    case 'final_quote':
      return (
        <p className="final-quote-text" style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center' }}>
          {block.text}
        </p>
      );

    default:
      return null;
  }
}

export default function ArticlePage({ articleKey }) {
  const { t } = useTranslation();
  const content = t(`${articleKey}.content`, { returnObjects: true });

  return (
    <main className="article-page">
      <div className="container">
        <Link to="/articles" className="back-link fade-up">
          {t(`${articleKey}.back`)}
        </Link>

        <article className="article-content section">
          <header className="article-header fade-up">
            <p className="section-label">{t(`${articleKey}.label`)}</p>
            <h1 className="article-full-title">
              {t(`${articleKey}.title_part1`)}
              <span className="accent">{t(`${articleKey}.title_part2`)}</span>
            </h1>
            <div className="article-meta">
              <span>{t(`${articleKey}.author`)}</span>
              <span className="meta-separator">•</span>
              <span>{t(`${articleKey}.date`)}</span>
            </div>
          </header>

          <div className="article-body fade-up">
            {Array.isArray(content)
              ? content.map((block, i) => <Block key={i} block={block} />)
              : <p style={{ color: 'var(--text-muted)' }}>Contenido no disponible.</p>
            }

            <footer className="article-footer" style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
              <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <Link to="/articles" className="btn-outline">
                  {t(`${articleKey}.back`)}
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </main>
  );
}
