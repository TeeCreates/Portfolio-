import styled from "styled-components";
import css from "./assets/css.png";
import react from "./assets/react.png";
import html from "./assets/html.png";
import mongodb from "./assets/mongodb.png";
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
        <BookSection>
          Skills:
          <SkillsIcons src={css} alt="" />
          <SkillsIcons src={html} alt="" />
          <SkillsIcons src={react} alt="" />
          <SkillsIcons src={mongodb} />
        </BookSection>
        {/* <BookSection>
          Book I'm currently reading:
          <BookImg src={book1} alt="" />
        </BookSection> */}
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 80%;
  height: 100%;
  left: 10%;
  justify-content: center;
  /* 
  overflow-y: scroll; */

  @media (max-width: 700px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
    overflow: hidden;
  }
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

// const BookImg = styled.img`
//   height: 200px;
//   width: 120px;
//   margin-left: 50px;
// `;

const BookSection = styled.div`
  font-size: 24px;
  margin-top: 30px;
  display: flex;
  align-items: center;
`;

const SkillsIcons = styled.img`
  height: 60px;
`;
