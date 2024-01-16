import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiSearch, FiClock, FiMic } from "react-icons/fi";
import SpeechRecognitionModal from "./SpeechRecognitionModal";

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
    width: 100%;
    padding: 8px;
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
    font-size: 12px;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  font-size: 20px;
  left: 20px;
  @media (max-width: 768px) {
    font-size: 14px;
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
  border-radius: 0 0 16px 16px;
  border-top: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0;
  margin-top: -5px;
  max-height: 200px;
  @media (max-width: 768px) {
    max-height: 150px;
    overflow-y: auto;
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
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
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
    "about",
    "education",
    "projects",
    "career",
    "achievements",
  ]);
  const isMenuOpen = showSuggestions && suggestions.length > 0;

  const [isMicActive, setIsMicActive] = useState(false);
  const speechRecognitionRef = useRef(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion?.toLowerCase().includes(searchTerm?.toLowerCase())
      );
      if (searchTerm.trim() === "")
        setSuggestions([
          "about",
          "education",
          "projects",
          "career",
          "achievements",
        ]);
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
      speechRecognitionRef.current = recognition;
      recognition.start();

      setIsMicActive(true);

      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        setSearchTerm(speechResult);
        setIsMicActive(false); // Turn off the microphone active status
      };

      recognition.onspeechend = () => {
        recognition.stop();
        setIsMicActive(false); // Turn off the microphone on speech end
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsMicActive(false); // Turn off the microphone on error
      };

      // Optional: Set a timeout to turn off the microphone if no speech is detected
      setTimeout(() => {
        if (isMicActive) {
          recognition.stop();
          setIsMicActive(false);
        }
      }, 10000); // 10 seconds timeout
    } else {
      console.log("Your browser does not support speech recognition.");
    }
  };

  const handleCloseModal = () => {
    if (speechRecognitionRef.current) {
      speechRecognitionRef.current.stop(); // Stop the recognition process
    }
    setIsMicActive(false);
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
        {isMicActive && (
          <SpeechRecognitionModal
            isMicActive={isMicActive}
            onClose={handleCloseModal}
            setIsMicActive={setIsMicActive}
          />
        )}
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
      {isMicActive && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <p>Listening...</p>
          {/* Or use an icon like <FiMicOff /> */}
        </div>
      )}
    </SearchWrapper>
  );
};

export default SearchBar;
