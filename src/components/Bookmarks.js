import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BookmarksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 1rem;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center; // Center the bookmarks on smaller screens
    flex-wrap: wrap; // Allow bookmarks to wrap to the next line
    padding: 0.5rem; // Reduce padding
  }
`;

const Bookmark = styled.div`
  margin: 0 1rem;
  color: #5f6368;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0.5rem; // Reduce margin
    font-size: 14px; // Optionally reduce font size
  }
`;

const Bookmarks = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`/search?query=${encodeURIComponent(path)}`);
  };

  return (
    <BookmarksContainer>
      <Bookmark onClick={() => handleNavigate("about")}>About</Bookmark>
      <Bookmark onClick={() => handleNavigate("career")}>Career</Bookmark>
      <Bookmark onClick={() => handleNavigate("projects")}>Projects</Bookmark>
      <Bookmark onClick={() => handleNavigate("achievements")}>
        Achievements
      </Bookmark>
      <Bookmark onClick={() => handleNavigate("education")}>Education</Bookmark>
    </BookmarksContainer>
  );
};

export default Bookmarks;
