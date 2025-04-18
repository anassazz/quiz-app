import React from 'react';

interface Props {
  question: string;
  options: string[];
  handleAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<Props> = ({ question, options, handleAnswer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: question }} />
      <div className="grid grid-cols-1 gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;