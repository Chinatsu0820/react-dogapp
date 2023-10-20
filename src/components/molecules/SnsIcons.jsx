import React from 'react';
import Icon from '../atoms/Icon';
import iconFacebook from '../../imgs/icons-facebook.svg';
import iconTwitter from '../../imgs/icons-twitterx.svg';
import iconInstagram from '../../imgs/icons-instagram.svg';


export default function SnsIcons() {
    return (
        <div>
          <Icon src={iconTwitter} alt="Twitter" link="https://twitter.com/" />
          <Icon src={iconFacebook} alt="Facebook" link="https://facebook.com/" />
          <Icon src={iconInstagram} alt="Instagram" link="https://instagram.com/" />
        </div>
      );
}