import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  text-align: center;
  font-family: "Roboto", sans-serif;
  max-width: 80%;
`;

const Button = styled.button`
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 15px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  background-color: #e0e0e0;
  color: #000;

  &:hover {
    background-color: #d5d5d5;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const FullscreenButton = styled(Button)`
  background-color: #4caf50;

  &:hover {
    background-color: #45a049;
  }
`;

const CancelButton = styled(Button)`
  background-color: #ff474c;

  &:hover {
    background-color: #d32f2f;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FullscreenPrompt = ({ onClose }) => {
  const goFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
    onClose(); // Close the popup after going fullscreen
  };

  return (
    <Backdrop>
      <Modal>
        <p style={{ fontSize: "24px" }}>Enhance Your Experience</p>
        <p>Go full-screen mode.</p>
        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <FullscreenButton onClick={goFullScreen}>
            Go Fullscreen
          </FullscreenButton>
        </ButtonContainer>
      </Modal>
    </Backdrop>
  );
};

export default FullscreenPrompt;
