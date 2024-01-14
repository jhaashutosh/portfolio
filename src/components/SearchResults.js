import { useSearchParams } from "react-router-dom";
import Career from "./portfolioComponent.js/Career";
import Achievements from "./portfolioComponent.js/Achievements";
import Projects from "./portfolioComponent.js/Projects";
import Education from "./portfolioComponent.js/Education";
import Summary from "./portfolioComponent.js/Summary";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Bookmarks from "./Bookmarks";
import styled from "styled-components";
import SearchStats from "./SearchStats";

const SearchResultsBar = styled.div`
  display: flex;
  padding: 20px;
  gap: 24px;
  justify-content: space-between;
`;

const SignInButton = styled.button`
  padding: 2px 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  background: #fff;
  border: 0.5px solid #5f6368;
  color: #5f6368;
`;

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

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
      case "summary":
        return <Summary />;
      default:
        return <div>Showing all results</div>;
    }
  };

  return (
    <div>
      <NavBar />
      <Bookmarks />
      <SearchResultsBar>
        <div style={{ width: "50%", display: "flex", gap: "24px" }}>
          <span style={{ fontSize: "28px" }}>Ashutosh</span>
          <SearchBar backgroundColor="#f1f3f4" />
        </div>
        <SignInButton>Sign in</SignInButton>
      </SearchResultsBar>
      <SearchStats />
      <div className="search-results">{renderResults()}</div>
    </div>
  );
};

export default SearchResults;
