import React, { useState } from 'react';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';

function SearchBox({ onInputChange, onGetDataClick }) {
    const [searchTerm, setSearchTerm] = useState('');

    // Style to position the button on the right of the input field
    const horizontalStyle = {
        display: 'flex',
        alignItems: 'center'
    };

    return (
        <div style={horizontalStyle}>
            <InputField
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    onInputChange(e); // 親コンポーネントにテキストの変更を通知
                }}
                placeholder="Search..."
            />
            <Button label="Get Data" onClick={onGetDataClick} />
        </div>
    );
}

export default SearchBox;