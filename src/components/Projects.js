import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/arch-installer.png";
import projImg2 from "../assets/img/fitris.png";
import projImg3 from "../assets/img/ama.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Personal Linux Installer",
      description: "This is my personal Arch Linux installation script it installs my dev env from partitioning the drive to my dotfiles.",
      imgUrl: projImg1,
      link: "https://github.com/yuvibirdi/arch-installer",
    },
    {
      title: "Fitris",
      description: "FITRIS is an innovative exercise game that transforms your fitness routine by combining it with the classic game of Tetris. Instead of struggling through tedious fitness routines, you can take on exciting challenges and rack up high scores by performing various exercises to control your Tetris game.",
      imgUrl: projImg2,
      link: "https://github.com/yuvibirdi/fitris",
    },
    {
      title: "AMA",
      description: "The AI Animal Surveillance System uses state-of-the-art Audio Classification techniques to classify animal sounds in surveillance systems in Wildlife attack prone areas.",
      imgUrl: projImg3,
      link: "https://github.com/yuvibirdi/ama",
    },
  ];

  return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Projects</h2>
                      <p>
                        A showcase of some of my projects, From building efficient tools to designing creative solutions,
                        these projects reflect my passion for development, problem-solving, and continuous learning.
                      </p>
                      <Row>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </div>
                }
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="Background"/>
      </section>
  );
};
