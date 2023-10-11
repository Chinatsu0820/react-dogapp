import React from "react";
import { useState } from "react";
import Search from "./Search"; // Searchコンポーネントのインポート
import BreedImg from "./BreedImg"; // BreedImgコンポーネントのインポート

export default function RenderBreed() {
    const [dogBreed, setDogBreed] = useState('');

    const handleSearch = (dogBreed) => {
        setDogBreed(dogBreed);
    };

    return (
        <div>
            <h2>Dog Breed Search</h2>
            <Search onSearch={handleSearch} />
            <BreedImg dogBreed={dogBreed} />
        </div>
    );
}