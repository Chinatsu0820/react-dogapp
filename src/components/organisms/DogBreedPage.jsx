import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DogBreedPage() {
  const { lowerCaseBreedName } = useParams();
  const [dogBreedImage, setDogBreedImage] = useState('');

  useEffect(() => {
    const fetchDogImage = async (lowerCaseBreedName) => {
      try {
          const response = await fetch(`https://dog.ceo/api/breed/${lowerCaseBreedName}/images/random`);
          if (response.ok) {
              const data = await response.json();
              setDogBreedImage(data.message);
              console.log(`got ${lowerCaseBreedName} img`)
          } else {
              console.error("Error fetching dog breed image:", response.statusText);
          }
      } catch (error) {
          console.error("Error fetching dog breed image:", error);
      }
  };
  

    // DogBreedPageがロードされた際に画像を取得
    fetchDogImage(lowerCaseBreedName);
  }, [lowerCaseBreedName]);

  return (
    <div>
      <h1>The image of {lowerCaseBreedName}</h1>
      {dogBreedImage && <img src={dogBreedImage} alt={lowerCaseBreedName} />}
      <Link to="/">HOME</Link>
    </div>
  );
}

export default DogBreedPage;
