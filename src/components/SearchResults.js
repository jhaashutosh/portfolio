import { useSearchParams } from "react-router-dom";
import Career from "./portfolioComponent.js/Career";
import Achievements from "./portfolioComponent.js/Achievements";
import Projects from "./portfolioComponent.js/Projects";
import Education from "./portfolioComponent.js/Education";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Bookmarks from "./Bookmarks";
import styled from "styled-components";
import SearchStats from "./SearchStats";
import { useState } from "react";

const SearchResultsBar = styled.div`
  display: flex;
  padding: 20px;
  gap: 24px;
  justify-content: space-between;
  border-bottom: 1px solid #dfe1e5;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }
`;

const SignInButton = styled.button`
  padding: 2px 20px;
  text-align: center;
  cursor: not-allowed;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  background: #fff;
  border: 0.5px solid #5f6368;
  color: #5f6368;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ResultsContainer = styled.div`
  width: 50%;
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SearchResultsContainer = styled.div`
  padding: 20px 72px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [searchTerm, setSearchTerm] = useState("");

  const renderResults = () => {
    switch (query) {
      case "career":
        return <Career />;
      case "achievements":
        return <Achievements />;
      case "projects":
        return <Projects />;
      case "education":
        return <Education />;
      default:
        return <div>Showing all results</div>;
    }
  };

  return (
    <div>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Bookmarks />
      <SearchResultsBar>
        <ResultsContainer>
          <a
            href="http://localhost:3000/"
            style={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#5f6368",
              textDecoration: "none",
            }}
          >
            Google
          </a>
          <SearchBar
            backgroundColor="#f1f3f4"
            showURL={false}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </ResultsContainer>
        <SignInButton>Sign in</SignInButton>
      </SearchResultsBar>
      <SearchStats />
      <SearchResultsContainer className="search-results">
        {renderResults()}
      </SearchResultsContainer>
    </div>
  );
};

export default SearchResults;
