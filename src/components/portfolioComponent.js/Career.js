import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineExpandMore as ExpandIcon } from "react-icons/md";

const CareerContainer = styled.div`
  padding: 10px 20px;
`;

const ResultItem = styled.div`
  padding: 10px;
`;

const ResultHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
`;

const ResultTitle = styled.a`
  color: #1a0dab;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }
`;

const ResultSnippet = styled.p`
  color: #4d5156;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: contain;
  margin-right: 10px;
`;

const Highlight = styled.div`
  background-color: #f8f9fa;
  padding: 10px;
`;

const FullDescription = styled.p`
  color: #4d5156;
`;

const Career = () => {
  const [showFullDescription, setShowFullDescription] = useState(
    Array(5).fill(false)
  );

  const internships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "TechCorp",
      description:
        "Worked on developing and maintaining web applications using React and Node.js.",
      logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/i6hevcbuhrj95l7mferx",
      link: "https://www.techcorp.com/",
    },
    {
      id: 2,
      title: "Software Development Intern",
      company: "TechCorp",
      description:
        "Worked on developing and maintaining web applications using React and Node.js.",
      link: "https://www.techcorp.com/",
      logo: "https://media.licdn.com/dms/image/D4D0BAQEiHBWuo8dDEg/company-logo_200_200/0/1688546562788/humara_nagar_logo?e=2147483647&v=beta&t=SS52c84mtnZ80Yt0ol5RGbS6rEFLEnzYAhbo6wsGN7I",
    },
    {
      id: 3,
      title: "Software Development Intern",
      company: "TechCorp",
      description:
        "Worked on developing and maintaining web applications using React and Node.js.",
      logo: "https://getmetherapy.com/pricing/images/logo.webp",
      link: "https://www.techcorp.com/",
    },
    {
      id: 4,
      title: "Software Development Intern",
      company: "TechCorp",
      description:
        "Worked on developing and maintaining web applications using React and Node.js.",
      logo: "https://production-cuvette.s3.ap-south-1.amazonaws.com/company/62d14293fad580c7e09497d9/logo.jpg?d=1657881300419",
      link: "https://www.techcorp.com/",
    },
    {
      id: 5,
      title: "Software Development Intern",
      company: "TechCorp",
      description:
        "Worked on developing and maintaining web applications using React and Node.js.",
      logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/zp8sah1qe47takgknfgu",
      link: "https://www.techcorp.com/",
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
    <CareerContainer>
      <Highlight>
        <ResultHeader>
          <Logo
            src={internships[0].logo}
            alt={`${internships[0].company} Logo`}
          />
          <ResultTitle>
            {internships[0].title} at {internships[0].company}
            <br />
            {internships[0].link}
          </ResultTitle>
        </ResultHeader>
        <ResultSnippet>{internships[0].description}</ResultSnippet>
        {/* Add more details or links here */}
      </Highlight>
      {internships.slice(1).map((internship, index) => (
        <ResultItem key={internship.id}>
          <ResultHeader>
            <Logo src={internship.logo} alt={`${internship.company} Logo`} />
            <ResultTitle>
              {internship.title} at {internship.company}
              <br />
              {internship.link}
            </ResultTitle>
          </ResultHeader>
          <ResultSnippet>
            {internship.description}
            <ExpandIcon
              style={{ cursor: "pointer", marginLeft: "5px" }}
              onClick={() => toggleDescription(index)}
            />
          </ResultSnippet>
          {showFullDescription[index] && (
            <FullDescription>
              Full description of the internship...
            </FullDescription>
          )}
        </ResultItem>
      ))}
    </CareerContainer>
  );
};

export default Career;
