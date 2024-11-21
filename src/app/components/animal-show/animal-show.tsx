import React, { useState } from 'react';
import bird from '../../../../public/animals/bird.jpg';
import cat from '../../../../public/animals/cat.jpg';
import dog from '../../../../public/animals/dog.jpg';
import horse from '../../../../public/animals/horse.jpg';
import rabbit from '../../../../public/animals/rabbit.jpg'; // Fixed typo in import
import cow from '../../../../public/animals/cow.jpg';
import heart from '../../../../public/animals/heart.jpg';
import Image from 'next/image';

type AnimalType = 'bird' | 'cat' | 'dog' | 'horse' | 'rabbit' | 'cow';

interface AnimalShowProps {
  type: AnimalType;
}

const AnimalShow: React.FC<AnimalShowProps> = ({ type }) => {
  const animalImages: Record<AnimalType, typeof bird> = {
    bird,
    cat,
    dog,
    horse,
    rabbit,
    cow,
  };

  const [click, setClick] = useState(0);

  function handleClick() {
    setClick(click + 1);
  }

  return (
    <div>
      <Image src={animalImages[type]} width={100} height={100} style={{width:'10rem',height:'10rem'}} alt={type} />
      <Image
        src={heart}
        alt="heart"
        onClick={handleClick}
        style={{ width: 10 + 10 * click + 'px' }} // Updated styling
      />
    </div>
  );
};

export default AnimalShow;
