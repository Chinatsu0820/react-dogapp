import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./DogBreedPage.css";

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
    <section className='breed-box'>
      <h2>The image of {lowerCaseBreedName}</h2>
      {dogBreedImage && <img className="breed-img" src={dogBreedImage} alt={lowerCaseBreedName} />}
      <Link to="/">HOME</Link>
    </section>
  );
}

export default DogBreedPage;
