import React from 'react';
import { useTranslation } from 'react-i18next'; 
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png'; 
import project3 from '../assets/images/project3.png'; 
import '../styles/Project.css';
import Layout from '../layout/home_layout';

const projects = [
  {
    image: project1,
    titleKey: 'project.project1_title',
    descKey: 'project.project1_desc',
  },
  {
    image: project2,
    titleKey: 'project.project2_title',
    descKey: 'project.project2_desc',
  },
  {
    image: project3,
    titleKey: 'project.project3_title',
    descKey: 'project.project3_desc',
  },
];

const Project = () => {
  const { t } = useTranslation(); 

  return (
    <Layout>
    <div>
      {projects.map((proj, idx) => ( 
       <>
          <h2 className="page-title">{t(proj.titleKey)}</h2>
          <section className="project-section">
            <div className="project-content">
              <p className="project-description">
                {t(proj.descKey)}
              </p>
              <a href="#" className="project-link">
                {t('button.link')}
              </a>
            </div>
            <div className="project-images">
              <img src={proj.image} alt="" className="project1" />
            </div>
          </section>
          </>     
      ))}
    </div>
    </Layout>
  );
};

export default Project;