import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './BreedImg.css';

export default function BreedImg() {
    const { dogBreed } = useParams();
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (dogBreed) {
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
