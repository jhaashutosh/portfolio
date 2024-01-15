import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  color: #70757a;
  font-size: 0.875rem;
  border-top: 1px solid #e4e4e4;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const FooterLink = styled.a`
  color: #70757a;
  text-decoration: none;
  margin: 0 1rem;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink target="_blank" rel="noopener noreferrer">
        <div>Privacy</div>
        <div>Terms</div>
      </FooterLink>
      <FooterLink>© 2024 Ashutosh - Portfolio Website by Ashutosh!</FooterLink>
      <FooterLink>Help</FooterLink>
    </FooterContainer>
  );
};

export default Footer;
