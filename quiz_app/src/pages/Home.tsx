// src/pages/Home.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      localStorage.setItem('userName', name);
      navigate('/quiz');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mb-4"
      />
      <button
        onClick={handleStart}
        className="bg-orange-500 text-white px-4 py-2 rounded"
      >
        Commencer le Quiz
      </button>
    </div>
  );
};

export default Home;