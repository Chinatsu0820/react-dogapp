import React from 'react';
import Image from '../atoms/Image';
import Paragraph from '../atoms/Paragraph';

function InfoBox() {
    // Style to position the image on the left and paragraphs on the right
    const horizontalStyle = {
        display: 'flex',
        alignItems: 'center'
    };

    // Style for a vertical layout
    const verticalStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    // Choose either horizontalStyle or verticalStyle based on your preference
    const chosenStyle = horizontalStyle;

    return (
        <div style={chosenStyle}>
            <Image
                src="https://via.placeholder.com/150"
                alt="Placeholder Image"
            />
            <div>
                <Paragraph text="This is the first paragraph." />
                <Paragraph text="This is the second paragraph." />
            </div>
        </div>
    );
}

export default InfoBox;
