import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'ar', name: 'عربي', dir: 'rtl' },
    { code: 'en', name: 'English', dir: 'ltr' },
  
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    document.documentElement.dir = languages.find(lang => lang.code === langCode).dir;
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage(i18n.language === "ar" ? "en" : "ar")} className="language-button">
        {languages.find(lang => lang.code === i18n.language)?.name || 'Language'}
      </button>
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;