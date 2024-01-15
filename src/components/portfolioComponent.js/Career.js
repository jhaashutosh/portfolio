import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineExpandMore as ExpandIcon } from "react-icons/md";
import ZORP from "../../assets/ZORP.png";

const CareerContainer = styled.div`
  padding: 10px 20px;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const LatestCompanyHeader = styled.div`
  display: flex;
  font-size: 14px;
  padding: 0px 24px;
  font-weight: 600;
  justify-content: flex-start;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Heading = styled.span`
  font-weight: 600;
`;

const LatestCompanyText = styled.p`
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  font-size: 13px;
  justify-content: center;
  text-align: left;
  align-items: center;
  color: #4d5156;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const HighlightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const HighlightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: max-content;
  align-items: center;
  border: 1px solid #dfe1e5;
  width: 80%;
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const ResultItem = styled.div`
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ResultHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ResultTitle = styled.a`
  margin: 0;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ResultSnippet = styled.p`
  color: #4d5156;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Logo = styled.img`
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

const Highlight = styled.div`
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const HighlightContentIMAGE = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const FullDescription = styled.p`
  color: #4d5156;
`;

const DisplayResults = styled.div`
  display: grid;
  gap: 100px;
  grid-template-columns: 3fr 2fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const Career = () => {
  const [showFullDescription, setShowFullDescription] = useState(
    Array(5).fill(false)
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

  function LatestCompanyIMAGEVIEWER() {
    return <HighlightContentIMAGE src={ZORP} alt="ZORP" />;
  }

  const internships = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Zorp",
      smallDescription:
        "Inoffice Internship at Bangalore with a dynamic and fast growing team.",
      description: `• Tech Stack: React.Js, Typescript, Redux.Js, SASS, Tailwind, REST APIs.
• Worked on automations API and its integration.
• Build record logs and optimized APIs by 20-30%.`,
      logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/i6hevcbuhrj95l7mferx",
      link: "https://app.zorp.one/",
    },
    {
      id: 2,
      title: "Backend Developer Intern",
      company: "Humara Nagar",
      smallDescription: "Here I worked as Backend Developer using Node.Js",
      description: `• Tech Stack: HTML, CSS, JavaScript, React.Js, ZOHO and webhooks.
• Developed responsive components: image sliders, feedback forms, footer, etc.
• Reduced page load time from 5 seconds to under 1 second.`,
      link: "https://www.humaranagar.in/",
      logo: "https://media.licdn.com/dms/image/D4D0BAQEiHBWuo8dDEg/company-logo_200_200/0/1688546562788/humara_nagar_logo?e=2147483647&v=beta&t=SS52c84mtnZ80Yt0ol5RGbS6rEFLEnzYAhbo6wsGN7I",
    },
    {
      id: 3,
      title: "FrontEnd Developer Intern",
      company: "Get Me Therapy",
      smallDescription:
        "Here I worked on the main website to create reusable components and handled a user base of 20000+ active users.",
      description: `• Tech Stack: Node.js, Express.js, SQL, Redis, Morgan, AWS for service deployment.
• Created home page, leading to a 20% increase in user engagement.
• Responsible for backend: handling REST APIs, CRUD operations, optimizing SQL queries, maintaining logs, and
validating routes and requests.`,
      logo: "https://getmetherapy.com/pricing/images/logo.webp",
      link: "https://www.getmetherapy.com/",
    },
    {
      id: 4,
      title: "Full Stack Developer Intern",
      company: "dBrewerz Communications",
      smallDescription:
        "This was my first internship as a Full Stack Developer.",
      description: `• Tech Stack: HTML, CSS, JavaScript, MongoDB, Express.Js, Node.Js.
• Created over 20 pages and a dynamic certificate generator module using MERN stack.
• Achieved a 100% increase in page engagement and a 30% reduction in page load time.`,
      logo: "https://production-cuvette.s3.ap-south-1.amazonaws.com/company/62d14293fad580c7e09497d9/logo.jpg?d=1657881300419",
      link: "https://www.dbrewerz.com",
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
    <DisplayResults>
      <CareerContainer>
        <HighlightContent>
          <Highlight>
            <ResultHeader>
              <Logo
                src={internships[0].logo}
                alt={`${internships[0].company} Logo`}
              />
              <ResultTitle>
                {internships[0].title} at {internships[0].company}
                <br />
                <a href="{internships[0].link}" style={{ color: "#007bff" }}>
                  {internships[0].link}
                </a>
              </ResultTitle>
            </ResultHeader>
            <ResultSnippet>
              {internships[0].smallDescription}
              <br />
              <br />
              {renderDescriptionWithLineBreaks(internships[0].description)}
            </ResultSnippet>
            {/* Add more details or links here */}
          </Highlight>
        </HighlightContent>
        {internships.slice(1).map((internship, index) => (
          <ResultItem key={internship.id}>
            <ResultHeader>
              <Logo src={internship.logo} alt={`${internship.company} Logo`} />
              <ResultTitle>
                {internship.title} at {internship.company}
                <br />
                <a href={internship.link} style={{ color: "#007bff" }}>
                  {internship.link}
                </a>
              </ResultTitle>
            </ResultHeader>
            <ResultSnippet
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              {internship.smallDescription}
              <ExpandIcon
                style={{ cursor: "pointer", marginLeft: "5px" }}
                onClick={() => toggleDescription(index)}
              />
            </ResultSnippet>
            {showFullDescription[index] && (
              <FullDescription>
                {renderDescriptionWithLineBreaks(internship.description)}
              </FullDescription>
            )}
          </ResultItem>
        ))}
      </CareerContainer>
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
          <LatestCompanyIMAGEVIEWER />
          <LatestCompanyHeader>
            ZORP
            <br />
            Startup in Bangalore
          </LatestCompanyHeader>
        </div>
        <LatestCompanyText>
          <span>
            ZORP is a Bangalore based startup which solves problems related to
            operations. It has clients all over India including Porter,
            Exponent, etc.
            <br />
            It is the best organization to work with and has shown enormous
            growth in recent years.
            <br />
            <br />
            <Heading>Founder: </Heading>
            Vivek, Bala, Subramanya
            <br />
            <br />
            <Heading>Location: </Heading>
            Bangalore
            <br />
            <br />
            <Heading>Business: </Heading>
            SASS startup
            <br />
          </span>
        </LatestCompanyText>
      </HighlightSideContent>
    </DisplayResults>
  );
};

export default Career;
