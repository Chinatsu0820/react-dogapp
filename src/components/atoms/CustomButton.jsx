import React from "react";
import styled from 'styled-components';

// CSS-in-JS (Styled-components)
const Button = styled.button`
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-family: var(--main-font);

  background-image: linear-gradient(90deg, rgba(89, 173, 241, 1), rgba(207, 253, 157, 1));

  &:hover {
    background-image: linear-gradient(90deg, rgba(253, 146, 146, 1), rgba(209, 254, 212, 1));
  }
`;

// style for SecondaryButton
const SecondaryButton = styled(Button)`
  background-image: linear-gradient(144deg, #af40ff, #5b42f2 50%, #00ddeb);
`;


function CustomButton({ label, onClick, secondary }) {
  const StyledButton = secondary ? SecondaryButton : Button;

  return (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  );
}

export default CustomButton;
