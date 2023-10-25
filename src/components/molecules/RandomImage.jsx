import React, { useState, useEffect } from 'react';
import Image from '../atoms/Image';
import CustomButton from '../atoms/CustomButton';
import './RandomImage.css'
// import { useCursor } from '../CursorContext';


function RandomImage({ image, onNewImageRequest, setHovered }) {
  const [dogImage, setDogImage] = useState('');
  // const { setCursorStyle } = useCursor();

  // ---- for React Context API -----
  // const handleMouseEnter = () => {
  //   setCursorStyle('pointer');
  //   console.log('Mouse entered');
  // };

  // const handleMouseLeave = () => {
  //   setCursorStyle('default');
  //   console.log('Mouse left')
  // };


  // ---- for getting Random image -----
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
    // Request a new image when the button is clicked.
    onNewImageRequest();
  };

  return (
    <div className='random-box'>
      <Image src={dogImage} alt="Random Dog" />
      <CustomButton 
        label="Get Random Dog"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        onClick={handleButtonClick} 
        setHovered={setHovered}
        />
    </div>
  );
}

export default RandomImage;
