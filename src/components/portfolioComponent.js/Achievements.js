import React, { useState } from "react";
import styled from "styled-components";
import { MdOutlineExpandMore as ExpandIcon } from "react-icons/md";
import ACHIEVEMENT_IMAGE from "../../assets/gfg_achievement.png";

const AchievementsContainer = styled.div`
  padding: 10px 20px;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const AchievementLogo = styled.img`
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

const HighlightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LatestAchievementHeader = styled.div`
  display: flex;
  font-size: 14px;
  padding: 0px 24px;
  font-weight: 600;
  justify-content: flex-start;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const LatestAchievementText = styled.p`
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

const Highlight = styled.div`
  /* background-color: #f8f9fa; */
  margin-bottom: 30px;
`;

const Link = styled.a`
  color: #1a0dab;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100px;
    display: flex;
  }
`;

const AchievementItem = styled.div`
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const ResultHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10 px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ResultTitle = styled.p`
  margin: 0;
  color: black;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ResultSnippet = styled.p`
  color: #4d5156;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

const FullDescription = styled.p`
  color: #4d5156;
  @media (max-width: 768px) {
    font-size: 14px;
  }
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

const Achievements = () => {
  const [showFullDescription, setShowFullDescription] = useState(
    Array(3).fill(false)
  );

  const achievements = [
    {
      id: 1,
      title: "100+ days streak on GFG",
      link: "https://auth.geeksforgeeks.org/user/jhaashutosh58",
      logo: "https://media.geeksforgeeks.org/wp-content/uploads/20210224040124/JSBinCollaborativeJavaScriptDebugging6-300x160.png",
      description:
        "500+ questions across coding platforms including Leetcode, GFG and hackerrank.",
    },
    {
      id: 2,
      title: "Development Quiz Champion",
      link: "https://react.dev/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      description:
        "First place in a development quiz with over 1600 live participants.",
    },
    {
      id: 3,
      title: "DSA mentor at codechef",
      link: "https://www.linkedin.com/in/ashutosh-kumar-j-9904a0118/",
      logo: "https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg",
      description:
        "I was a codechef mentor for the year 2022-2023 where I designed several questions for contests and helped students in starting their journey in DSA.",
    },
    {
      id: 4,
      title: "Volunteer HR at Aashman Foundation",
      link: "https://www.facebook.com/aashmanfoundation/",
      logo: "https://www.lawctopus.com/wp-content/uploads/2021/08/1616316848175.jpeg",
      description: `Worked with an NGO for 6 months, successfully managing a team of 30 interns, receiving a 5-star certificate for
contributions`,
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
      <AchievementsContainer>
        <HighlightContent>
          <Highlight>
            <ResultHeader>
              <AchievementLogo
                src={achievements[0].logo}
                alt={`${achievements[0].title} Logo`}
              />
              <ResultTitle>
                {achievements[0].title}
                <br />
                <Link>{achievements[0].link}</Link>
              </ResultTitle>
            </ResultHeader>
            <ResultSnippet>{achievements[0].description}</ResultSnippet>
          </Highlight>
        </HighlightContent>
        {achievements.slice(1).map((achievement, index) => (
          <AchievementItem key={achievement.id}>
            <ResultHeader>
              <AchievementLogo
                src={achievement.logo}
                alt={`${achievement.title} Logo`}
              />
              <ResultTitle>
                {achievement.title}
                <br />
                <Link>{achievement.link}</Link>
              </ResultTitle>
            </ResultHeader>
            <ResultSnippet>
              {achievement.description}
              <ExpandIcon
                style={{ cursor: "pointer", marginLeft: "5px" }}
                onClick={() => toggleDescription(index)}
              />
            </ResultSnippet>
            {showFullDescription[index] && (
              <FullDescription>
                {/* Additional details or extended description can be placed here */}
              </FullDescription>
            )}
          </AchievementItem>
        ))}
      </AchievementsContainer>
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
          <img
            src={ACHIEVEMENT_IMAGE}
            alt="Achievement"
            style={{ borderRadius: "4px", width: "100%" }}
          />
          <LatestAchievementHeader>
            GFG - 100+ days streak
          </LatestAchievementHeader>
        </div>
        <LatestAchievementText>
          500+ questions across coding platforms including Leetcode, GFG and
          hackerrank.
          <br />
          <br />
          Attended multiple contests and learnt about data structures and
          advanced algorithms.
        </LatestAchievementText>
      </HighlightSideContent>
    </DisplayResults>
  );
};

export default Achievements;
