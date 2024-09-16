import React from 'react';

const LanguageSelect = ({ language, setLanguage }) => {
    console.log('Language:', language);
    console.log('setLanguage:', setLanguage);
  
    const handleChange = (event) => {
      if (typeof setLanguage === 'function') {
        setLanguage(event.target.value);
      } else {
        console.error('setLanguage is not a function');
      }
    };
  
    return (
        <select value={language} onChange={handleChange}>
        <option value="">Select Language</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        <option value="ja">Japanese</option>
        <option value="ru">Russian</option>
        <option value="pt">Portuguese</option>
        <option value="ar">Arabic</option>
        <option value="it">Italian</option>
        <option value="ko">Korean</option>
        <option value="tr">Turkish</option>
        <option value="pl">Polish</option>
        <option value="nl">Dutch</option>
        <option value="sv">Swedish</option>
        <option value="da">Danish</option>
        <option value="fi">Finnish</option>
        <option value="no">Norwegian</option>
        <option value="cs">Czech</option>
      </select>
      
    );
  };
  

export default LanguageSelect;
