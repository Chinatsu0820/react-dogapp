import React, { useState, useEffect } from 'react';
import Image from '../atoms/Image';
import CustomButton from '../atoms/CustomButton';
import './RandomImage.css'

function RandomImage({ image, onNewImageRequest }) {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    if (image) {
      setDogImage(image);
    } else {
      // 初回レンダリング時に画像がない場合、新しい画像をリクエスト
      // If there is no image during the initial rendering, request a new image
      onNewImageRequest();
    }
  }, [image, onNewImageRequest]);

  const handleButtonClick = () => {
    // ボタンがクリックされたときに新しい画像をリクエスト
    // Request a new image when the button is clicked.
    onNewImageRequest();
  };

  return (
    <div className='random-box'>
      <Image src={dogImage} alt="Random Dog" />
      <CustomButton label="Get Random Dog" onClick={handleButtonClick} />
    </div>
  );
}

export default RandomImage;
