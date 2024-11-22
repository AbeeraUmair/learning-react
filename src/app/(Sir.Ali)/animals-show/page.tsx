'use client'

import React, { useState } from 'react';
import AnimalShow from '@/app/components/animal-show/animal-show';

function getRandomAnimal(): 'bird' | 'cat' | 'dog' | 'horse' | 'rabbit' | 'cow' {
  const animals = ['bird', 'cat', 'dog', 'horse', 'rabbit', 'cow'] as const;
  return animals[Math.floor(Math.random() * animals.length)];
}

const AnimalShowApp: React.FC = () => {
  const [animals, setAnimals] = useState<Array<'bird' | 'cat' | 'dog' | 'horse' | 'rabbit' | 'cow'>>([]);

  function handleClick() {
    setAnimals([...animals, getRandomAnimal()]);
  }

  const updatedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
        Add Animal
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {updatedAnimals}
      </div>
    </div>
  );
};

export default AnimalShowApp;
