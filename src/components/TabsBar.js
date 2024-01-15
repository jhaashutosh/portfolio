import React from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi"; // Import the plus icon for the add tab button
import { FaGoogle } from "react-icons/fa";

const TabsBarContainer = styled.div`
  background-color: #f1f3f4;
  padding: 8px 0;
  display: flex;
  align-items: center;
  padding-bottom: 0;
  cursor: not-allowed;
`;

const Tab = styled.div`
  background-color: white;
  padding: 6px 24px;
  gap: 6px;
  border-radius: 8px 8px 0 0; // Rounded top and flat bottom
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  height: 28px;
  margin-right: -1px; // This helps the tabs blend together visually
`;

const AddTabButton = styled.button`
  border: none;
  padding: 6px 8px; // Adjust to match the tab's padding
  cursor: not-allowed;
  font-size: 20px;
  background: none;
  display: flex;
  align-items: center;
  color: #5f6368;
  border-radius: 0 8px 0 0; // Only round the top right corner
`;

const TabsBar = () => {
  return (
    <TabsBarContainer>
      <Tab>
        <FaGoogle fontSize={12} />
        Home Tab
      </Tab>
      <Tab style={{ backgroundColor: "#f1f3f4" }}>
        <AddTabButton>
          <FiPlus />
        </AddTabButton>
      </Tab>
    </TabsBarContainer>
  );
};

export default TabsBar;
