
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions } from '../utils/fetchQuestions';
import { Question } from '../types';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions().then(setQuestions);
  }, []);

  const handleAnswer = (answer: string) => {
    if (questions[current].correct_answer === answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      localStorage.setItem('score', score.toString());
      navigate('/result');
    }
  };

  if (!questions.length) return <div>Chargement...</div>;

  const options = [
    ...questions[current].incorrect_answers,
    questions[current].correct_answer,
  ].sort();

  return (
    <div className="p-4">
      <ProgressBar current={current} total={questions.length} />
      <QuestionCard
        question={questions[current].question}
        options={options}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;