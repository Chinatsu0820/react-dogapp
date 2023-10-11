import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import './RandomPicture.css'


export default function RandomPicture() {
    const [imageUrl, setImageUrl] = useState('');

    const fetchRandomDogImage = () => {
        // DOG APIからランダムな犬の画像を取得
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((data) => {
                // 画像URLを取得してstateにセット
                setImageUrl(data.message);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    };

    useEffect(() => {
        // 初回のコンポーネントマウント時に画像を取得
        fetchRandomDogImage();
    }, []); // 空の依存配列を指定することで、初回のコンポーネントマウント時に一度だけ実行されます

    return (
        <div>
            <h2>Random Dog Image</h2>
            <img className="random-img" src={imageUrl} alt="Random Dog" />
            <button className="random-button" onClick={fetchRandomDogImage}>New Image</button> {/* ボタンをクリックしたときに画像を変更 */}
        </div>
    );
}
