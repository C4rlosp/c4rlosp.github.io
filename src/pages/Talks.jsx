import { useTranslation } from 'react-i18next';

export default function Talks() {
  const { t } = useTranslation();
  const talks = t('talks.items', { returnObjects: true });

  return (
    <main>
      <div className="page-header">
        <div className="container">
          <p className="section-label fade-up fade-up-1">{t('talks.title')}</p>
          <h1 className="section-title fade-up fade-up-2" style={{ marginBottom: 16 }}>
            {t('talks.title')}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: 520 }} className="fade-up fade-up-3">
            {t('talks.subtitle')}
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container">
          <div className="talks-timeline">
            {Array.isArray(talks) && talks.map((talk, i) => (
              <div key={i} className="talk-item fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="talk-dot" />
                <p className="talk-year">{talk.year}</p>
                <h3 className="talk-title">{talk.title}</h3>
                
                <div className="talk-meta">
                  <span>{talk.event}</span>
                  <span className="meta-separator">•</span>
                  <span>{talk.location}</span>
                </div>

                <p className="talk-desc">{talk.description}</p>

                {/* --- GALERÍA DE IMÁGENES (Solo visual) --- */}
                {talk.images && talk.images.length > 0 && (
                  <div className="talk-gallery">
                    {talk.images.map((img, idx) => (
                      <div key={idx} className="talk-image-card">
                        <img 
                          src={img} 
                          alt={`${talk.title} preview`} 
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="talk-links">
                  {talk.slides && (
                    <a href={talk.slides} target="_blank" rel="noopener noreferrer" className="talk-link">
                       {t('talks.slides') || 'Slides'}
                    </a>
                  )}
                  {talk.Publicacion && (
                    <a href={talk.Publicacion} target="_blank" rel="noopener noreferrer" className="talk-link">
                       {t('talks.Publicacion')}
                    </a>
                  )}
                  {talk.video && (
                    <a href={talk.video} target="_blank" rel="noopener noreferrer" className="talk-link">
                       {t('talks.video')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}