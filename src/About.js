import styled from "styled-components";

export const About = () => {
  return (
    <Container>
      <AboutMe>About Me</AboutMe>
      <div>
        <P>
          I'm a recent graduate from Concordia University's Full-Stack Web
          Development program. I switched my career from finance to tech to
          combine my passion for challenge and creativity together.
        </P>
        <P>
          I spend my free time drawing and reading when I'm not writing code.
        </P>

        <P>
          Say hi on{" "}
          <a href="https://www.linkedin.com/in/thajanah-mailvaganam/">
            LinkedIn
          </a>
        </P>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 15%;
  right: 15%;
  top: 15%;
`;

const AboutMe = styled.h1`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #392756;
`;

const P = styled.p`
  font-size: 24px;
  margin-top: 30px;
`;
