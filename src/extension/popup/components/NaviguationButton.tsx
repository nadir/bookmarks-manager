import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

interface NaviguationButtonProps {
  icon: JSX.Element;
  to: string;
}

const NaviguationButton = ({ icon, to }: NaviguationButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button
      icon={icon}
      onClick={() => {
        navigate(to);
      }}
    ></Button>
  );
};

export default NaviguationButton;
