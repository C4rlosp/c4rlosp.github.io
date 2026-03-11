import { useState } from 'react'; 
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const { t } = useTranslation();
  const [isSending, setIsSending] = useState(false); 

  const socials = [
    {
      name: 'GitHub',
      handle: t('contact.github').replace('https://github.com/', '@'),
      url: t('contact.github'),
      icon: <FaGithub />,
    },
    {
      name: 'LinkedIn',
      handle: "",
      url: t('contact.linkedin'),
      icon: <FaLinkedin />,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    //  los datos de los inputs
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        sentAt: serverTimestamp(), 
      });

      toast.success(t('contact.success_message') || "Mensaje enviado!", {
        theme: "dark"
      });

      e.target.reset(); 
    } catch (error) {
      console.error("Error enviando a Firebase:", error);
      toast.error("Error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main>
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="fade-up fade-up-1">
              <p className="section-label">{t('nav.contact')}</p>
              <h1 className="contact-headline">
                {t('contact.title').split(' ').map((w, i, arr) =>
                  i === arr.length - 1
                    ? <span key={i} className="accent">{w}</span>
                    : <span key={i}>{w} </span>
                )}
              </h1>
              <p className="contact-sub">{t('contact.subtitle')}</p>
              
              <div className="social-links">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <div className="social-icon">{s.icon}</div>
                    <div className="social-info">
                      <p className="social-name">{s.name}</p>
                      {s.handle && <p className="social-handle">{s.handle}</p>}
                    </div>
                    <span className="social-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="fade-up fade-up-2">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input type="text" name="name" placeholder={t('contact.form_name') || "Nombre"} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder={t('contact.form_email') || "Correo"} required />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder={t('contact.form_message') || "Mensaje"} rows="5" required></textarea>
                </div>
                <button 
                  type="submit" 
                  className="contact-email-btn" 
                  disabled={isSending} 
                  style={{ 
                    width: '100%', 
                    border: 'none', 
                    cursor: isSending ? 'not-allowed' : 'pointer',
                    opacity: isSending ? 0.7 : 1
                  }}
                >
                  <FaPaperPlane style={{ marginRight: '8px' }} />
                  {isSending ? "Enviando" : (t('contact.send_btn') || "Enviar Mensaje")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}