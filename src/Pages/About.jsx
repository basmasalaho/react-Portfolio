import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/About.css';
import '../styles/variables.css';

import about from '../assets/images/about.png';
import Layout from '../layout/home_layout';

const About = () => {
  const { t } = useTranslation();

  return (
    <Layout>
    <div className='container'>
      <h2 className="page-title">{t('about.title')}</h2>
      <section className="section">
      
          <div className="about-text">
            <p className='Name'>{t('about.greeting')}</p>
            <p>{t('about.description')}</p>
          </div>
          <div className="about-image">
            <img src={about} alt="Profile" className="about-image" />
          </div>
       
      </section>
    </div>
    </Layout>
  );
};

export default About;
