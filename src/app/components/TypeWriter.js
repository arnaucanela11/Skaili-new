"use client"
import { useState, useEffect } from 'react';
import {IBM} from "./MainScreen.js"
// Configuración del intervalo de tiempo entre letras y tiempo entre palabras
const TYPING_INTERVAL = 80; // Tiempo entre letras (en milisegundos)
const WORD_INTERVAL = 1500; // Tiempo entre palabras (en milisegundos)

const Typewriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      // Si estamos eliminando, quitamos letras una por una
      if (currentText.length > 0) {
        const timeout = setTimeout(
          () => setCurrentText(currentText.slice(0, -1)),
          TYPING_INTERVAL
        );
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % words.length);
      }
    } else {
      // Si estamos escribiendo, añadimos letras una por una
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(
          () => setCurrentText(currentWord.slice(0, currentText.length + 1)),
          TYPING_INTERVAL
        );
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(
          () => setIsDeleting(true),
          WORD_INTERVAL
        );
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={`typewriter__span ${IBM.className}`}>
      {currentText}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;