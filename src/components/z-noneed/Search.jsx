import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
    const history = useNavigate();
    const [dogBreed, setDogBreed] = useState('');

    const handleSearch = () => {
        // BreedImgページに遷移する // move to BreedImg page
        history(`/dog/${dogBreed}`);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // Enterキーが押されたら検索を実行 // insert handleSearch when Enter key is pressed
            handleSearch();
        };
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Dog Breed Name"
                value={dogBreed}
                onChange={(e) => setDogBreed(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <button onClick={handleSearch}>GET</button>
        </div>
    );
}
