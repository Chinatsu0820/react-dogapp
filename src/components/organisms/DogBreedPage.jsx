import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './DogBreedPage.css';
import '../molecules/SnsIcons';
import SnsIcons from '../molecules/SnsIcons';

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
      <section className='breed-box-left'>
      <h2>The image of {lowerCaseBreedName}</h2>
      <p className='share-text'>Do you want to share?</p>
      <SnsIcons />
      </section>
      {dogBreedImage && <img className="breed-img" src={dogBreedImage} alt={lowerCaseBreedName} />}
      <div><Link className='link-home' to="/">HOME</Link></div>
    </section>
  );
}

export default DogBreedPage;
