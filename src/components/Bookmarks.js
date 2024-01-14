import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BookmarksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 1rem;
  padding-bottom: 0.5rem;
  /* background-color: #f1f3f4; */
`;

const Bookmark = styled.div`
  margin: 0 1rem;
  color: #5f6368;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Bookmarks = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(`/search?query=${encodeURIComponent(path)}`);
  };

  return (
    <BookmarksContainer>
      <Bookmark onClick={() => handleNavigate("career")}>Career</Bookmark>
      <Bookmark onClick={() => handleNavigate("projects")}>Projects</Bookmark>
      <Bookmark onClick={() => handleNavigate("achievements")}>
        Achievements
      </Bookmark>
      <Bookmark onClick={() => handleNavigate("/education")}>
        Education
      </Bookmark>
    </BookmarksContainer>
  );
};

export default Bookmarks;
