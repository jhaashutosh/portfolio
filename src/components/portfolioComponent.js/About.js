import React from "react";
import styled from "styled-components";
import profilePic from "../../assets/Ashutosh_jha_profile_pic-removebg-preview.png";
import linkedInLogo from "../../assets/linkedin.png";
import githubLogo from "../../assets/github.png";

const AboutPageContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 3fr 2fr;
  padding: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 10px;
  }
`;

const AboutContainer = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 10px;
    gap: 10px;
  }
`;

const SideSection = styled.div`
  border: 1px solid #dfe1e5;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  gap: 15px;
  @media (max-width: 768px) {
    order: 1; // Moves the side section to the top on small screens
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: auto;
  object-fit: cover;
`;

const SideDetail = styled.p`
  color: #4d5156;
  width: 100%;
  font-size: 16px;
  text-align: left;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// const DetailSection = styled.div`
//   background-color: #f9f9f9;
//   border: 1px solid #dfe1e5;
//   border-radius: 8px;
//   padding: 20px;
//   width: 100%;
//   max-width: 600px;
//   @media (max-width: 768px) {
//     padding: 15px;
//   }
// `;

const Detail = styled.p`
  display: flex;
  font-size: 18px;
  padding: 0px 24px;
  font-weight: 600;
  justify-content: flex-start;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SearchResultContainer = styled.div`
  /* background-color: #f9f9f9;
  border: 1px solid #dfe1e5; */
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SearchResultHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
`;

const SearchResultLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ResultTitle = styled.a`
  margin: 0;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SearchResultLink = styled.a`
  color: #1a0dab;
  font-size: 14px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 400px) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100px;
    display: flex;
  }
`;

const SearchResultContent = styled.p`
  color: #4d5156;
  font-size: 16px;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const About = () => {
  const renderDescriptionWithLineBreaks = (description) => {
    return description.split("•").map((line, index) => (
      <span key={index}>
        {index > 0 && "•"}
        {line}
        {index < description.split("•").length - 1 && <br />}
      </span>
    ));
  };
  const sections = [
    {
      id: 1,
      logo: profilePic,
      title: "About Me",
      link: "https://www.ashutosh-kumar-jha.netlify.app/",
      content: `• Name: Ashutosh Kumar Jha
• Age: 23
• Email: jhaashutosh58@gmail.com
• Location: India, New Delhi
• Phone: +91 (807) 689-1036`,
    },
    {
      id: 2,
      logo: linkedInLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ashutosh-kumar-j-9904a0118/",
      content: "Connect with me on LinkedIn.",
    },
    {
      id: 3,
      logo: githubLogo,
      title: "GitHub",
      link: "https://github.com/jhaashutosh",
      content: "Check out my projects on GitHub.",
    },
  ];

  return (
    <AboutPageContainer>
      <AboutContainer>
        {sections.map((section) => (
          <SearchResultContainer key={section.id}>
            <SearchResultHeader>
              <SearchResultLogo src={section.logo} />
              <ResultTitle>
                {section.title}
                <br />
                <SearchResultLink href={section.link} target="_blank">
                  {section.link}
                </SearchResultLink>
              </ResultTitle>
            </SearchResultHeader>
            <SearchResultContent>
              {renderDescriptionWithLineBreaks(section.content)}
            </SearchResultContent>
          </SearchResultContainer>
        ))}
      </AboutContainer>
      <SideSection>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            borderBottom: "1px solid #dfe1e5",
            width: "100%",
            paddingBottom: "20px",
          }}
        >
          <ProfileImage src={profilePic} alt="Profile Picture" />
          <Detail>Ashutosh Kumar Jha</Detail>
        </div>
        <SideDetail>
          I love reading about Tech and business. I do Swimming, Cycling and
          play Table Tennis in free time.
        </SideDetail>
        <SideDetail>
          <b>Profile:</b> Software Developer && Frontend Developer
        </SideDetail>
        <SideDetail>
          <b>Location:</b> Based in New Delhi
        </SideDetail>
      </SideSection>
    </AboutPageContainer>
  );
};

export default About;
