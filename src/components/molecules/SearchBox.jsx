import React from 'react';
import { useState } from 'react';
import InputField from '../atoms/InputField';
import CustomButton from '../atoms/CustomButton';
import './SearchBox.css'

export default function SearchBox({ onInputChange, onGetDataClick, setHovered }) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='search-box'>
            <p>Let's get your favorite-breed pic!</p>
            <div className='search-box-inside'>
            <InputField
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    onInputChange(e); // 親コンポーネントにテキストの変更を通知
                }}
                placeholder="e.g. shiba"
            />
            <CustomButton 
                label="Get Data" 
                onClick={onGetDataClick} 
                secondary={true}
                setHovered={setHovered} // passing context to CustomButton
                />
            </div>
        </div>
    );
}