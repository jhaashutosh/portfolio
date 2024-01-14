import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiSearch, FiClock, FiMic } from "react-icons/fi"; // Import the search icon from react-icons

// Styled components
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #dfe1e5;
  padding: 10px;
  padding-left: 20px;
  border-radius: ${({ isMenuOpen }) => (isMenuOpen ? "24px 24px 0 0" : "24px")};
  /* box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28); */
  width: 100%;
  border-bottom: ${({ isMenuOpen }) =>
    isMenuOpen ? "none" : "1px solid #dfe1e5"};
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  padding-left: 35px; // Make room for the search icon
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const MicIcon = styled(FiMic)`
  position: absolute;
  font-size: 20px;
  right: 20px; // Adjust the position to align with the input
  cursor: pointer;
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  font-size: 20px;
  left: 20px; // Adjust the position to align with the input
`;

const SuggestionIcon = styled(FiClock)`
  font-size: 16px;
  margin-right: 10px; // Add some spacing between the icon and text
`;

const SuggestionsBox = styled.div`
  position: absolute;
  top: 100%;
  z-index: 9999;
  left: 0;
  right: 0;
  background: white;
  /* box-shadow: 0 4px 6px rgba(32, 33, 36, 0.28); */
  border: 1px solid #dfe1e5;
  border-radius: 0 0 24px 24px;
  border-top: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-top: -5px; // to overlap border of the search bar
`;

const SuggestionItem = styled.div`
  padding: 10px 20px;
  width: 92%;
  text-align: left;
  cursor: pointer;
  display: flex;
  gap: 7px;
  align-items: center; // Align items vertically in the suggestion item
  &:hover {
    background-color: #eeeeee;
  }
`;

// SearchBar component
const SearchBar = (backgroundColor) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const suggestions = [
    "education",
    "summary",
    "projects",
    "career",
    "achievements",
  ];
  const isMenuOpen = showSuggestions && suggestions.length > 0;

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300); // 300ms debounce time

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const initiateSearch = (searchValue) => {
    searchValue = searchValue.toLowerCase();
    if (
      searchValue === "career" ||
      searchValue === "achievements" ||
      searchValue === "projects" ||
      searchValue === "summary" ||
      searchValue === "education"
    ) {
      navigate(`/search?query=${encodeURIComponent(searchValue)}`);
    } else {
      alert("Please enter a valid search term");
    }
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    initiateSearch(debouncedTerm);
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
        setSearchTerm(speechResult); // Update searchTerm with the speech result
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
        style={backgroundColor}
        isMenuOpen={isMenuOpen}
        onSubmit={handleSearch}
      >
        <SearchIcon />
        <StyledInput
          style={backgroundColor}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
