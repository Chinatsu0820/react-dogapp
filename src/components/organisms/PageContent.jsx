import React, { useState } from 'react';
import RandomImage from '../molecules/RandomImage.jsx';
import SearchBox from '../molecules/SearchBox.jsx';
import { useNavigate } from 'react-router-dom';
import "./PageContent.css"

function PageContent() {
    const [breedName, setDogBreed] = useState('');
    const [dogImage, setDogImage] = useState('');
    const navigate = useNavigate();

const fetchRandomDogImage = async () => {
    const lowerCaseBreedName = breedName.toLowerCase(); // 入力された犬種名を小文字に変換
    const url = lowerCaseBreedName
            ? `https://dog.ceo/api/breed/${lowerCaseBreedName}/images/random`
            : 'https://dog.ceo/api/breeds/image/random';

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.status === 'success') {
                setDogImage(data.message);

                // 特定の条件を満たす場合にのみページ遷移
                if (lowerCaseBreedName !== '') {
                    navigate(`/breed/${lowerCaseBreedName}`);
                }
            }
            
            console.log("got random img") // to check how many times it gets random img

        } catch (error) {
            console.error("Error fetching dog image:", error);
        }
    };

    return (
        <section>
            <div className="random-box">
                <RandomImage
                    image={dogImage}
                    onNewImageRequest={fetchRandomDogImage}
                />
                <SearchBox
                    onGetDataClick={() => fetchRandomDogImage(breedName)}
                    onInputChange={(e) => setDogBreed(e.target.value)}
                />
            </div>
        </section>
    );
}

export default PageContent;
