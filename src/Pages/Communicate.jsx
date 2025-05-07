import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaFacebook } from 'react-icons/fa';
import content from '../assets/images/Content.png';
import '../styles/Communicate.css';
import '../styles/variables.css';
import Layout from '../layout/home_layout';

const Communicate = () => {
  const { t } = useTranslation();

  return (
    <Layout>
    <div className='container'>
      <h2 className="page-title">{t('communicate.title')}</h2>
      <section className="section">
        
          <div className="contact-info">
            <div className="contact-row">
              <span className="contact-icon"><FaMapMarkerAlt size={32} /></span>
              <span className="contact-text">{t('communicate.location')}</span>
            </div>
            <div className="contact-row">
              <span className="contact-icon"><FaPhoneAlt size={32} /></span>
              <span className="contact-text">+306997331033</span>
            </div>
            <div className="contact-row">
              <span className="contact-icon"><FaEnvelope size={32} /></span>
              <span className="contact-text">basmaslaho@gmail.com</span>
            </div>
            <div className="contact-row">
              <span className="contact-icon"><FaLinkedin size={32} /></span>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="contact-link">{t('communicate.linkedin')}</a>
            </div>
            <div className="contact-row">
              <span className="contact-icon"><FaFacebook size={32} /></span>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="contact-link">{t('communicate.facebook')}</a>
            </div>
          </div>
          <div className="contact-image">
            <img src={content} alt="person" />
          </div>
       
      </section>
    </div>
    </Layout>
  );
};

export default Communicate;