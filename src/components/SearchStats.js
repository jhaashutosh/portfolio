import React from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  padding: 20px 20px;
  color: #70757a;
  font-size: 14px;
  margin-left: 72px;
  @media (max-width: 768px) {
    margin: auto;
  }
`;

const SearchStats = () => {
  return (
    <StatsContainer>About 15,40,00,000 results (0.3 seconds)</StatsContainer>
  );
};

export default SearchStats;
