import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineExpandMore as ExpandIcon } from "react-icons/md";
import samLogo from "../../assets/download.jpeg";

const EducationContainer = styled.div`
  padding: 10px 20px;
`;

const Heading = styled.span`
  font-weight: 500;
  color: #4d5156;
`;

const ExpandButton = styled(ExpandIcon)`
  cursor: pointer;
  margin-left: 5px;
`;

const ExtendedDetails = styled.div`
  color: #4d5156;
  margin-top: 10px;
  display: ${({ show }) => (show ? "block" : "none")};
`;

const EducationLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
  margin-right: 10px;
`;

const EducationItem = styled.div`
  padding: 10px;
`;

const ResultHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

const ResultTitle = styled.p`
  margin: 0;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
`;

const ResultSnippet = styled.div`
  color: #4d5156;
  font-size: 16px;
  margin-top: 5px;
`;

const Highlight = styled.div`
  margin-bottom: 30px;
`;

const HighlightHeader = styled.div`
  display: flex;
  font-size: 14px;
  padding: 0px 24px;
  font-weight: 600;
`;

const HighlightText = styled.p`
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  font-size: 13px;
  justify-content: center;
  text-align: left;
  align-items: center;
  color: #4d5156;
`;

const HighlightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const EducationSideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: max-content;
  align-items: center;
  border: 1px solid #dfe1e5;
  width: 80%;
  border-radius: 4px;
`;

const Link = styled.a`
  color: #1a0dab;
`;

const Education = () => {
  const [expanded, setExpanded] = useState(Array(3).fill(false));

  const renderDescriptionWithLineBreaks = (description) => {
    return description.split("•").map((line, index) => (
      <span key={index}>
        {index > 0 && "•"}
        {line}
        {index < description.split("•").length - 1 && <br />}
      </span>
    ));
  };

  const toggleExpanded = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const educationDetails = [
    {
      id: 1,
      institution: "Maharaja Agrasen Institute Of Technology, New Delhi",
      duration: "Dec 2020 - July 2024",
      qualification: "B.Tech (Computer Science Engineering)",
      description: `• Participated in numerous hackathons and won various positions.• I was part of tech community named codechef chapter mait.
      Received medal in table tennis competition.• I was able to get 3 Job opportunities in multiple companies.`,
      gpa: "Overall GPA: 9.23",
      link: "https://mait.ac.in/",
      logo: "https://cse.mait.ac.in/images/logo_small_trans.png",
    },
    {
      id: 2,
      institution: "Sam International School, New Delhi",
      duration: "Apr 2018 - Jul 2019",
      qualification: "Class 12th",
      score: "93.4%",
      link: "https://saminternationalschool.com/",
      description: `• I was the Information technology head minister of my school and handled all tech related events.• I won various debating competitions.• I have been a state level soccer player for 3 years.`,
      logo: samLogo,
    },
    {
      id: 3,
      institution: "Sam International School, New Delhi",
      duration: "July 2017 - Apr 2018",
      qualification: "Class 10th",
      description: `• Vice House Captain of my school. Won various exhibitions competitions.• Got ranks in national olympiads and athelete events.`,
      score: "10 CGPA",
      link: "https://saminternationalschool.com/",
      logo: samLogo,
    },
  ];

  return (
    <div
      style={{ display: "grid", gap: "100px", gridTemplateColumns: "3fr 2fr" }}
    >
      <EducationContainer>
        <HighlightContent>
          <Highlight>
            <ResultHeader>
              <EducationLogo
                src={educationDetails[0].logo}
                alt={`${educationDetails[0].institution} Logo`}
              />
              <ResultTitle>
                <Heading href={educationDetails[0].link}>
                  {educationDetails[0].qualification} -{" "}
                  {educationDetails[0].institution}
                </Heading>
                <br />
                <Link href={educationDetails[0].link}>
                  {educationDetails[0].link}
                </Link>
              </ResultTitle>
            </ResultHeader>
            <ResultSnippet>{educationDetails[0].duration}</ResultSnippet>
            <ResultSnippet>
              {educationDetails[0].gpa || educationDetails[0].score}
            </ResultSnippet>
            <p style={{ color: "#4d5156" }}>
              {renderDescriptionWithLineBreaks(educationDetails[0].description)}
            </p>
          </Highlight>
        </HighlightContent>
        {educationDetails.slice(1).map((education, index) => (
          <EducationItem key={education.id}>
            <ResultHeader>
              <EducationLogo
                src={education.logo}
                alt={`${education.qualification} Logo`}
              />
              <ResultTitle>
                <Heading href={education.link}>
                  {education.qualification} - {education.institution}
                </Heading>
                <br />
                <Link href={education.link}>{education.link}</Link>
              </ResultTitle>
            </ResultHeader>
            <ResultSnippet>
              {education.duration} - {education.gpa || education.score}
              <ExpandButton onClick={() => toggleExpanded(index)} />
            </ResultSnippet>
            <ExtendedDetails show={expanded[index]}>
              <p>{renderDescriptionWithLineBreaks(education.description)}</p>
            </ExtendedDetails>
          </EducationItem>
        ))}
      </EducationContainer>
      <EducationSideContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            borderBottom: "1px solid #dee2e6",
            paddingBottom: "12px",
            color: "#4d5156",
          }}
        >
          <img
            src="https://www.collegebatch.com/static/clg-gallery/maharaja-agrasen-institute-of-technology-new-delhi-242489.jpg"
            alt="Achievement"
            style={{ borderRadius: "4px", width: "100%" }}
          />
          <HighlightHeader>GFG - 100+ days streak</HighlightHeader>
        </div>
        <HighlightText>
          B.Tech in Computer Science Engineering with a focus on software
          development, algorithms, and data structures. Achieved an overall GPA
          of 9.23, participating in various tech events and projects.
        </HighlightText>
      </EducationSideContent>
    </div>
  );
};

export default Education;
