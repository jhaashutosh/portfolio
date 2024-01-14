import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar"; // Reuse the SearchBar component
import SocialMediaBar from "./SocialMediaBar";

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(
    90vh - 60px
  ); /* Adjust height as per your navbar and footer height */
  margin-top: -60px; /* Adjust margin to pull the content up */
`;

const SearchBarContainer = styled.div`
  width: 40%;
  margin: 0 auto;
`;

const BrandName = styled.h1`
  font-size: 92px;
  color: #4a4a4a;
  margin: 0.2em 0;
`;

const MiddleContent = () => {
  return (
    <MiddleContainer>
      <BrandName>Ashutosh</BrandName>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <SocialMediaBar />
    </MiddleContainer>
  );
};

export default MiddleContent;
