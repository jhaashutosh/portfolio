import React from "react";
import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { TbReload } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";

const NavButtonContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0 0.25rem;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1); // Go back in history
  };

  const handleForward = () => {
    navigate(1); // Go forward in history
  };

  const handleRefresh = () => {
    // Reload the current page
    navigate(0);
  };

  return (
    <NavButtonContainer>
      <IconButton
        onClick={handleBack}
        aria-label="Back"
        disabled={!location.key}
      >
        <FiArrowLeft />
      </IconButton>
      <IconButton onClick={handleForward} aria-label="Forward">
        <FiArrowRight />
      </IconButton>
      <IconButton onClick={handleRefresh} aria-label="Refresh">
        <TbReload />
      </IconButton>
    </NavButtonContainer>
  );
};

export default NavigationButtons;
