import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiSearch, FiClock, FiMic } from "react-icons/fi";

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #dfe1e5;
  padding: 10px;
  padding-left: 20px;
  border-radius: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "24px 24px 0 0" : "24px"};
  width: 100%;
  border-bottom: ${({ $isMenuOpen }) =>
    $isMenuOpen ? "none" : "1px solid #dfe1e5"};

  @media (max-width: 768px) {
    width: 100%; // Ensure the form takes full width on small screens
    padding: 8px; // Adjust padding
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  padding-left: 35px;
  font-size: ${({ $showURL }) => ($showURL ? "12px" : "16px")};
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding-left: 0px 25px;
  }
`;

const MicIcon = styled(FiMic)`
  position: absolute;
  font-size: 14px;
  right: 20px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 12px; // Reduce icon size on smaller screens
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  font-size: 20px;
  left: 20px;
  @media (max-width: 768px) {
    font-size: 14px; // Reduce icon size on smaller screens
  }
`;

const SuggestionIcon = styled(FiClock)`
  font-size: 16px;
  margin-right: 10px;
  margin-left: 20px;
`;

const SuggestionsBox = styled.div`
  position: absolute;
  top: 100%;
  z-index: 9999;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #dfe1e5;
  border-radius: 0 0 24px 24px;
  border-top: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin-top: -5px;
  max-height: 200px;
  @media (max-width: 768px) {
    max-height: 150px; // Adjust max height for mobile devices
    overflow-y: auto; // Ensure scrollability
  }
`;

const SuggestionItem = styled.div`
  padding: 10px 0px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  display: flex;
  gap: 7px;
  align-items: center;
  &:hover {
    background-color: #eeeeee;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }
`;

// SearchBar component
const SearchBar = ({
  backgroundColor,
  showURL,
  urlColor,
  searchTerm = "",
  setSearchTerm = () => {},
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([
    "education",
    "projects",
    "career",
    "achievements",
  ]);
  const isMenuOpen = showSuggestions && suggestions.length > 0;

  useEffect(() => {
    const handler = setTimeout(() => {
      const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion?.toLowerCase().includes(searchTerm?.toLowerCase())
      );
      if (searchTerm.trim() === "")
        setSuggestions(["education", "projects", "career", "achievements"]);
      else setSuggestions(filteredSuggestions);
    }, 300); // 300ms debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, suggestions, showURL]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const initiateSearch = (searchValue) => {
    searchValue = searchValue.toLowerCase();
    if (
      searchValue === "career" ||
      searchValue === "achievements" ||
      searchValue === "projects" ||
      searchValue === "education"
    ) {
      navigate(`/search?query=${encodeURIComponent(searchValue)}`);
    } else {
      alert("Please enter a valid search term");
    }
  };

  const displayedValue = showURL
    ? `https://www.google.com/search?q=${encodeURIComponent(searchTerm || "")}`
    : searchTerm || "";

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    initiateSearch(searchTerm);
  };

  const handleStartSpeechRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        setSearchTerm(speechResult);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
      };
    } else {
      console.log("Your browser does not support speech recognition.");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    navigate(`/search?query=${encodeURIComponent(suggestion)}`);
  };

  return (
    <SearchWrapper>
      <StyledForm
        style={{ backgroundColor: backgroundColor, color: urlColor }}
        $isMenuOpen={isMenuOpen}
        onSubmit={handleSearch}
      >
        <SearchIcon style={{ color: urlColor, marginRight: "5px" }} />
        <StyledInput
          $showURL={showURL}
          style={{
            backgroundColor: backgroundColor,
            color: urlColor,
          }}
          type="text"
          value={displayedValue}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 300)}
          placeholder="Search Google or type a URL"
        />
        <MicIcon onClick={handleStartSpeechRecognition} />
      </StyledForm>
      {isMenuOpen && (
        <SuggestionsBox>
          {suggestions.map((suggestion, index) => (
            <SuggestionItem
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <SuggestionIcon /> {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsBox>
      )}
    </SearchWrapper>
  );
};

export default SearchBar;
