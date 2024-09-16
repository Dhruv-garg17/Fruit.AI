import React, { useState } from 'react';
import './Translator.css';
import LanguageSelect from './LanguageSelect'; // Ensure this component is correct
import { fetchTranslation } from './api'; // Ensure this function is correct

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState(''); // Ensure this state is defined
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTranslate = async () => {
    setLoading(true);
    setError('');
    try {
      const translation = await fetchTranslation(inputText, language);
      setTranslatedText(translation);
    } catch (error) {
      setError('Failed to fetch translation. Please try again.');
      console.error('Translation error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="translator-container">
      <h2>Translate Text</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate"
      />
      <div className="language-selection">
        <LanguageSelect language={language} setLanguage={setLanguage} /> {/* Pass setLanguage here */}
      </div>
      <button onClick={handleTranslate} disabled={loading}>
        {loading ? 'Translating...' : 'Translate'}
      </button>
      {error && <div className="error-message">{error}</div>}
      {translatedText && (
        <div className="translated-text">
          {translatedText}
        </div>
      )}
    </div>
  );
};

export default Translator;
