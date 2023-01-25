import styled from "styled-components";
import project1 from "./assets/project1.png";

export const MyWork = () => {
  return (
    <Container>
      <h1>Work</h1>
      <Project1Wrapper>
        <span>Project 1 </span>
        <Project1Img src={project1} alt="" />
      </Project1Wrapper>
      <Project1Wrapper>
        <span>Project 2</span>
      </Project1Wrapper>
    </Container>
  );
};

const Project1Wrapper = styled.div`
  width: 50%;
  background-color: white;
  height: 200px;
  border-radius: 15px;
  padding: 4px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  height: 22%;
  width: 14%;
  border-radius: 5px;
`;
