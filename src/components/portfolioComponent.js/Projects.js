import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineExpandMore as ExpandIcon } from "react-icons/md";
import PROJECT_IMAGE from "../../assets/projects.png";
import PROJECT_LOGO_1 from "../../assets/portfolio.png";

const ProjectsContainer = styled.div`
  padding: 10px 20px;
`;

const Heading = styled.span`
  font-weight: 600;
`;

const HighlightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LatestProjectHeader = styled.div`
  display: flex;
  font-size: 14px;
  padding: 0px 24px;
  font-weight: 600;
  width: 100%;
  justify-content: flex-start;
`;

const LatestProjectText = styled.p`
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  font-size: 13px;
  justify-content: center;
  text-align: left;
  align-items: center;
  color: #4d5156;
`;

const Highlight = styled.div`
  margin-bottom: 30px;
`;

const ProjectItem = styled.div`
  padding: 10px;
`;

const ResultHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
`;

const ResultTitle = styled.a`
  margin: 0;
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

const ResultSnippet = styled.p`
  color: #4d5156;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const FullDescription = styled.p`
  color: #4d5156;
`;

const HighlightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 50%;
  align-items: center;
  border: 1px solid #dfe1e5;
  width: 30%;
  border-radius: 4px;
`;

const ProjectLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
  margin-right: 10px;
`;

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const HighlightContentIMAGE = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Projects = () => {
  const [showFullDescription, setShowFullDescription] = useState(
    Array(3).fill(false)
  );

  const renderDescriptionWithLineBreaks = (description) => {
    return description.split("•").map((line, index) => (
      <span key={index}>
        {index > 0 && "•"}
        {line}
        {index < description.split("•").length - 1 && <br />}
      </span>
    ));
  };

  function LatestProjectIMAGEVIEWER() {
    return <HighlightContentIMAGE src={PROJECT_IMAGE} alt="Project Image" />;
  }

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      logo: PROJECT_LOGO_1,
      repoLink: "https://github.com/jhaashutosh/personal-portfolio",
      smallDescription:
        "React portfolio project with speech recognition, routing, debouncing, etc.",
      description: `• Tech Stack: React, styled-components, react-icons, react-hook-forms.
• Features include speech recognition, routing, debouncing.`,
    },
    {
      id: 2,
      title: " Integrated Management System",
      logo: "https://sakthisolutions.in/sakthisolutions/uploads/2018/05/billing.png",
      repoLink: "https://github.com/jhaashutosh/integrated-management-software",
      smallDescription: `MERN-based application for creating an efficient online billing system capable of managing, editing, and
printing multiple bills`,
      description: `• Live project generating 500+ bills daily, designed for a government catering service serving 400+ schools
in Delhi.
• Group project with an accompanying Letter of Recommendation (LOR).`,
    },
    {
      id: 3,
      title: "Dungeon Dodge",
      logo: "https://mario.nintendo.com/static/5173cb58b062e1ec02553be8ed1b8019/b2548/header-mario.png",
      repoLink: "https://github.com/jhaashutosh/Dungeon_Dodge",
      smallDescription:
        "Classic arcade game built using HTML, CSS, JavaScript, and spritesheet animation.",
      description: `• Won Melon Jam2 hackathon with the project. It Utilizes core concepts of Vanilla Js such as event handling,
asynchronous JavaScript, DOM manipulations, etc.`,
    },
  ];

  const toggleDescription = (index) => {
    setShowFullDescription((prev) => {
      const newShow = [...prev];
      newShow[index] = !newShow[index];
      return newShow;
    });
  };

  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <ProjectsContainer>
        <HighlightContent>
          <Highlight>
            <ResultHeader>
              <ProjectLogo
                src={projects[0].logo}
                alt={`${projects[0].title} Logo`}
              />
              <div>
                <ResultTitle href={projects[0].repoLink} target="_blank">
                  {projects[0].title}
                </ResultTitle>
                <br />
                <ProjectLink href={projects[0].repoLink} target="_blank">
                  {projects[0].repoLink}
                </ProjectLink>
              </div>
            </ResultHeader>
            <ResultSnippet>
              {projects[0].smallDescription}
              <br />
              <br />
              {renderDescriptionWithLineBreaks(projects[0].description)}
            </ResultSnippet>
          </Highlight>
        </HighlightContent>
        {projects.slice(1).map((project, index) => (
          <ProjectItem key={project.id}>
            <ResultHeader>
              <ProjectLogo src={project.logo} alt={`${project.title} Logo`} />
              <div>
                <ResultTitle href={project.repoLink} target="_blank">
                  {project.title}
                </ResultTitle>
                <br />
                <ProjectLink href={project.repoLink} target="_blank">
                  {project.repoLink}
                </ProjectLink>
              </div>
            </ResultHeader>
            <ResultSnippet>
              {project.smallDescription}
              <ExpandIcon
                style={{ cursor: "pointer", marginLeft: "5px" }}
                onClick={() => toggleDescription(index)}
              />
            </ResultSnippet>
            {showFullDescription[index] && (
              <FullDescription>
                {renderDescriptionWithLineBreaks(project.description)}
              </FullDescription>
            )}
          </ProjectItem>
        ))}
      </ProjectsContainer>
      <HighlightSideContent>
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
          <LatestProjectIMAGEVIEWER />
          <LatestProjectHeader>
            Integrated Management System
            <br />
            Billing Software
          </LatestProjectHeader>
        </div>
        <LatestProjectText>
          <span>
            This is a project build by delite caterers who serves more than 400
            schools in Delhi.
            <br />
            The project's aim was to make a scalable system which can serve
            multiple bills and manage them efficiently.
            <br />
            <br />
            <Heading>Developers: </Heading>
            Ashutosh, Mazhar
            <br />
            <br />
            <Heading>Tech: </Heading>
            MERN stack
            <br />
            <br />
            <Heading>Achievements: </Heading>
            LOR from Maharaja Agrasen Institute Of Technology
            <br />
          </span>
        </LatestProjectText>
      </HighlightSideContent>
    </div>
  );
};

export default Projects;
