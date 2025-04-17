import React from 'react';
import ResultCard from '../components/ResultCard';
import { useNavigate } from 'react-router-dom';

const Result: React.FC = () => {
  const score = Number(localStorage.getItem('score')) || 0;
  const navigate = useNavigate();

  const handleRestart = () => {
    localStorage.removeItem('score');
    navigate('/');
  };

  return <ResultCard score={score} total={10} onRestart={handleRestart} />;
};

export default Result;