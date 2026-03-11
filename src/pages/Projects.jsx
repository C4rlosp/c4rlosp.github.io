import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true });
  const githubUrl = t('contact.github');


  return (
    <main>
      <div className="page-header">
        <div className="container">
          <p className="section-label fade-up fade-up-1">{t('projects.title')}</p>
          <h1 className="section-title fade-up fade-up-2" style={{ marginBottom: 16 }}>
            {t('projects.title')}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: 520 }} className="fade-up fade-up-3">
            {t('projects.subtitle')}
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div className="project-card fade-up" style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                  <div className="project-header">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                      <h3 className="project-name">{project.title}</h3>
                    </div>
                    <span className="project-link-icon">↗</span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-footer">
                    {t('projects.view_github')}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="github-cta">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
               {t('projects.view_all')}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
