import styled from "styled-components";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";

export const MyWork = () => {
  return (
    <Container>
      <ProjectWrapper>
        <Project1Img src={project1} alt="" />
        <LinkDiv>
          <LinkStyle href="https://www.youtube.com/watch?v=JtogNM2BRdo&ab_channel=TM">
            Click to watch my final project
          </LinkStyle>
        </LinkDiv>
      </ProjectWrapper>
      <ProjectWrapper>
        \
        <Project1Img src={project2} alt="" />
        <LinkDiv>
          <LinkStyle href="https://www.notion.so/Guide-To-Build-A-Full-Stack-Application-48efe4ad9b7a48e0b7a93493cb4a3428">
            Click to view my guide on how <br /> to build a full-stack
            application
          </LinkStyle>
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
`;

const LinkStyle = styled.a`
  text-decoration: none;
  color: #7847e3;
  font-size: 20px;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  left: 10px;
`;
