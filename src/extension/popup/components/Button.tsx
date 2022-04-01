import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 10px;
  cursor: pointer;

  border-radius: 5px;
  :hover {
    background-color: #3b3b3b;
  }
  :active {
    background-color: #494949;
  }
`;

interface ButtonProps {
  icon: JSX.Element;
  onClick?: () => void;
  to?: string;
}

const Button = ({ icon, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{icon}</StyledButton>;
};

export default Button;
