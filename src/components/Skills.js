import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const skills = [
        "C/C++", "Java", "JavaScript", "HTML", "CSS", "React", "Python", "NumPy",
        "Pandas", "PyTorch", "MediaPipe","TensorFlow", "OpenCV", "Matplotlib",
        "Django", "Rust", "Docker", "Podman","Flask", "Git", "Linux", "Bash Scripting","MySQL"
    ];

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>These are the specific technologies I have worked with in the past, and I have developed a solid understanding of in utilizing them across projects and applications.</p>
                            <div className="skills-container">
                                {skills.map((skill, index) => (
                                    <div key={index} className="skill-box">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<img className="background-image-left" src={colorSharp} alt="Image" />*/}
        </section>
    );
};
