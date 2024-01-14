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
  /* border-bottom: 1px solid #e0e0e0; */
  cursor: not-allowed;
`;

const Tab = styled.div`
  background-color: white;
  padding: 6px 24px;
  gap: 6px;
  border-radius: 8px 18px 0 0;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  height: 28px;
`;

const AddTabButton = styled.button`
  background: none;
  border: none;
  padding: 0 8px;
  cursor: not-allowed;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #5f6368;
`;

const TabsBar = () => {
  return (
    <TabsBarContainer>
      <Tab>
        <FaGoogle fontSize={12} />
        Home Tab
      </Tab>
      <Tab
        style={{
          backgroundColor: "#f1f3f4",
          marginLeft: "-5px",
          paddingLeft: "10px",
          borderRadius: "8px 0 0 8px",
        }}
      >
        <AddTabButton>
          <FiPlus />
        </AddTabButton>
      </Tab>
    </TabsBarContainer>
  );
};

export default TabsBar;
