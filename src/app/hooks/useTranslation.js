import { useEffect, useState } from 'react';
import esTranslations from '../translations/es.json';
import enTranslations from '../translations/en.json';

const useTranslation = () => {
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const browserLanguage = navigator.language.split('-')[0];
    const selectedTranslations = browserLanguage === 'es' ? esTranslations : enTranslations;
    setTranslations(selectedTranslations);
  }, []);

  return translations;
};

export default useTranslation;