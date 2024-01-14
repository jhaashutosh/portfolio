import React from "react";
import styled from "styled-components";

const StatsContainer = styled.div`
  padding: 10px 20px;
  color: #70757a;
  font-size: 14px;
`;

const SearchStats = () => {
  return <StatsContainer>About 100000 results (0.3 seconds)</StatsContainer>;
};

export default SearchStats;
