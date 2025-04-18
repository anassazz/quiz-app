import React from 'react';

interface Props {
  score: number;
  total: number;
  onRestart: () => void;
}

const ResultCard: React.FC<Props> = ({ score, total, onRestart }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Résultat</h2>
      <p className="text-lg mb-4">Tu as obtenu {score} sur {total}</p>
      <button onClick={onRestart} className="bg-green-500 text-white px-4 py-2 rounded">Rejouer</button>
    </div>
  );
};
export default ResultCard;