import styled from "styled-components";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";

export const MyWork = () => {
  return (
    <Container>
      <ProjectWrapper>
        {/* <Project1Img src={project1} /> */}
        <LinkDiv>
          <BigLink href="https://www.youtube.com/watch?v=JtogNM2BRdo&ab_channel=TM">
            Click to watch my final project
          </BigLink>
          <SmallLink href="https://www.youtube.com/watch?v=JtogNM2BRdo&ab_channel=TM">
            Project
          </SmallLink>
        </LinkDiv>
      </ProjectWrapper>
      <ProjectWrapper>
        <LinkDiv>
          <BigLink href="https://www.notion.so/Guide-To-Build-A-Full-Stack-Application-48efe4ad9b7a48e0b7a93493cb4a3428">
            Click to view my guide "How to Build a Full-stack Application"
          </BigLink>
          <SmallLink href="https://www.notion.so/Guide-To-Build-A-Full-Stack-Application-48efe4ad9b7a48e0b7a93493cb4a3428">
            Article
          </SmallLink>
        </LinkDiv>
      </ProjectWrapper>
    </Container>
  );
};

const ProjectWrapper = styled.div`
  width: 50%;
  background-color: white;
  height: 200px;
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
  height: 100vh;
`;

const Project1Img = styled.img`
  position: absolute;
  height: 180px;
  width: 135px;
  border-radius: 15px;

  @media (min-width: 700px) {
    display: none;
  }
`;

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
