import React, { useState } from 'react';
import RandomImage from '../molecules/RandomImage.jsx';
import SearchBox from '../molecules/SearchBox.jsx';
import { useNavigate } from 'react-router-dom';
import {showNotification} from '../js-component/notification.js';
import './PageContent.css'

function PageContent({ setHovered }) {
    const [breedName, setDogBreed] = useState('');
    const [dogImage, setDogImage] = useState('');
    const navigate = useNavigate();

    // ランダム画像用　for get a random img
    const fetchRandomDogImage = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();

            if (data.status === 'success') {
                setDogImage(data.message);
            }
        } catch (error) {
            console.error("Error fetching random dog image:", error);
        }
    };

    // 犬種画像用 for get a breed img
    const fetchDogImageByBreed = async (breedName) => {
        const lowerCaseBreedName = breedName.toLowerCase();
        if (lowerCaseBreedName) {
            try {
                const response = await fetch(`https://dog.ceo/api/breed/${lowerCaseBreedName}/images/random`);
                const data = await response.json();

                if (data.status === 'success') {
                    setDogImage(data.message);
                    navigate(`/breed/${lowerCaseBreedName}`);
                } else {
                    showNotification('No images found for the specified breed.');
                }
            } catch (error) {
                console.error("Error fetching dog image:", error);
                showNotification('An error occurred while fetching the dog image.');
            }
        }
    };

    return (
        <section>
            <div className="top-box">
                <RandomImage
                    image={dogImage}
                    onNewImageRequest={fetchRandomDogImage}
                    setHovered={setHovered} // passing context to RandomImage
                />
                <SearchBox
                    onGetDataClick={() => fetchDogImageByBreed(breedName)}
                    onInputChange={(e) => setDogBreed(e.target.value)}
                    setHovered={setHovered} // passing context to SearchBox
                />
            </div>
        </section>
    );
}

export default PageContent;

