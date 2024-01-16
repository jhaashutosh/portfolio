import React from "react";
import styled from "styled-components";
import NavigationButtons from "./NavigationButtons"; // Assuming you have this component
import SearchBar from "./SearchBar"; // Assuming you have this component
// import { FaUser } from "react-icons/fa";
import profilePic from "../assets/Ashutosh_jha_profile_pic-removebg-preview.png";

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background-color: #fff;
  border-radius: 0 0 8px 8px;
`;

const SearchBarContainer = styled.div`
  flex-grow: 1;
  margin: 0 16px;
  @media (max-width: 768px) {
    margin: auto;
    width: 100%;
  }
`;

const ProfileIcon = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: center;
  border-radius: 50%;
  background-color: #000;
  background-size: cover;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ProfileImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
  border-radius: 50%;
`;

const NavBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <NavBarContainer>
      <NavigationButtons />
      <SearchBarContainer>
        <SearchBar
          backgroundColor="#f1f3f4"
          showURL={true}
          urlColor="#70757a"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </SearchBarContainer>
      <ProfileIcon>
        <ProfileImage src={profilePic} alt="Profile" />
      </ProfileIcon>
    </NavBarContainer>
  );
};

export default NavBar;
