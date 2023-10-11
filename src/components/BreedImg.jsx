import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './BreedImg.css';


// 画像を表示するコンポーネント（DogImage.js）
// 犬種名に基づいてAPIから画像URLを取得し、画像を表示する
export default function BreedImg({ dogBreed }) {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        // breedに基づいてAPIリクエストを送信し、画像URLを取得
        if (dogBreed) { // dogBreedが空でない場合にのみAPIリクエストを行う
            const apiUrl = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    setImageUrl(data.message);
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error);
                });
        }
    }, [dogBreed]);

    return (
        <div>
            <h2>Random Dog Image for {dogBreed}</h2>
            {imageUrl && <img className="breed-img" src={imageUrl} alt={`Random ${dogBreed}`} />}
        </div>
    );
}