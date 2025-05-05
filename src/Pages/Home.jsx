import Logo from '../assets/images/logo.png';
import React from 'react';
import { useTranslation } from 'react-i18next'; 
import '../styles/Home.css';
import Layout from '../layout/home_layout';

const Home = () => {
  const { t } = useTranslation();
return(
   <Layout>
    <>
    <h2 className="page-title">{t('nav.Home')}</h2>
        <section className="hero-section">
                <div className="text-content">
                <h1>{t('Home.name')}</h1>
                <div className="subtitle">
                    <p>{t('Home.role')}</p>
                    <p>{t('Home.subtitle')}</p>
                </div>
                <a 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cv-button"
                >
                  {t('Home.cv')}
                </a>
                </div>
                <div className="logo-container">
                <img src={Logo} alt="Profile" className="logo-image" />
                </div>
            </section>

      </>
      </Layout>
);
}

export default Home;