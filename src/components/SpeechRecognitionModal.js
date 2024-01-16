import React from "react";
import styled, { keyframes } from "styled-components";
import { FiMic, FiX } from "react-icons/fi";

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  text-align: center;
`;

const MicIcon = styled(FiMic)`
  color: #4285f4;
  font-size: 40px;
  animation: ${pulse} 2s infinite;
`;

const CloseIcon = styled(FiX)`
  align-self: flex-end;
  cursor: pointer;
  font-size: 18px;
`;

const Text = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
`;

const SpeechRecognitionModal = ({ isMicActive, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={onClose} />
        <MicIcon />
        <Text>{isMicActive ? "Listening..." : "Click to start listening"}</Text>
      </ModalContainer>
    </Overlay>
  );
};

export default SpeechRecognitionModal;
