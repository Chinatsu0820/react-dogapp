import React from 'react';
import './Icon.css';

export default function Icon({ src, alt, link }) {
    return (
      <a href={link}>
        <img className='icon-img' src={src} alt={alt} />
      </a>
    );
  }
  