import React from "react";
import { useState } from "react";

// このコンポーネントは犬種名を入力し、検索ボタンをクリックまたはEnterキーを押して検索をトリガーする
// このコンポーネントでAPIアドレスをゲットする作業は含まれない
export default function Search({ onSearch }) {
    const [dogBreed, setDogBreed] = useState('');

    const handleSearch = () => {
        onSearch(dogBreed);
    };

    // ユーザーが検索ボックスなどのテキスト入力フィールドでEnterキーを押したときに、handleSearch関数を呼び出すためのイベントハンドラ
    // Enterキーが押されると、検索アクションがトリガーされる
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Dog Breed Name"
                value={dogBreed}
                onChange={(e) => setDogBreed(e.target.value)}
                onKeyDown={handleKeyPress} // instead of "onKeyPress"
            />
            <button onClick={handleSearch}>GET</button>
        </div>
    );
}

