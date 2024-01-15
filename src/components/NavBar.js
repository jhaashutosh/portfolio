import React from "react";
import styled from "styled-components";
import NavigationButtons from "./NavigationButtons"; // Assuming you have this component
import SearchBar from "./SearchBar"; // Assuming you have this component
import { FaUser } from "react-icons/fa";

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
`;

const ProfileIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: center;
  border-radius: 50%;
  background-color: black;
  background-size: cover;
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavigationButtons />
      <SearchBarContainer>
        <SearchBar
          backgroundColor="#f1f3f4"
          showURL={true}
          urlColor="#70757a"
        />
      </SearchBarContainer>
      <ProfileIcon>
        <FaUser color="white" />
      </ProfileIcon>
    </NavBarContainer>
  );
};

export default NavBar;
