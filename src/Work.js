import styled from "styled-components";
import cv from "./assets/cv.pdf";

export const MyWork = () => {
  return (
    <Container>
      <ProjectWrapper>
        <LinkDiv>
          <BigLink href="https://thajanah-foodquiz.netlify.app/">
            Quiz Sample
          </BigLink>
          <SmallLink href="https://thajanah-foodquiz.netlify.app/">
            Quiz Sample
          </SmallLink>
        </LinkDiv>
      </ProjectWrapper>
      <ProjectWrapper>
        <LinkDiv>
          <BigLink href="https://www.youtube.com/watch?v=JtogNM2BRdo&ab_channel=TM">
            Project
          </BigLink>
          <SmallLink href="https://www.youtube.com/watch?v=JtogNM2BRdo&ab_channel=TM">
            Project
          </SmallLink>
        </LinkDiv>
      </ProjectWrapper>
      <ProjectWrapper>
        <LinkDiv>
          <BigLink href="https://www.notion.so/Guide-To-Build-A-Full-Stack-Application-48efe4ad9b7a48e0b7a93493cb4a3428">
            Article: "How to Build a Full-stack Application"
          </BigLink>
          <SmallLink href="https://www.notion.so/Guide-To-Build-A-Full-Stack-Application-48efe4ad9b7a48e0b7a93493cb4a3428">
            Article
          </SmallLink>
        </LinkDiv>
      </ProjectWrapper>

      <ProjectWrapper>
        <LinkDiv>
          <BigLink href={cv}>Resume</BigLink>
          <SmallLink href={cv}>Resume</SmallLink>
        </LinkDiv>
      </ProjectWrapper>
    </Container>
  );
};

const ProjectWrapper = styled.div`
  width: 40%;
  background-color: white;
  height: 120px;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 55px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100%;
  @media (max-width: 700px) {
    height: 100%;
  }
`;

// const Project1Img = styled.img`
//   position: absolute;
//   height: 180px;
//   width: 135px;
//   border-radius: 15px;

//   @media (min-width: 700px) {
//     display: none;
//   }
// `;

const BigLink = styled.a`
  text-decoration: none;
  color: #7847e3;
  font-size: 20px;
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

const SmallLink = styled.a`
  text-decoration: none;
  color: #7847e3;
  font-size: 20px;
  display: flex;
  position: relative;
  @media (min-width: 700px) {
    display: none;
  }
`;
