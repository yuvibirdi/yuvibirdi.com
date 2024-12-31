import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import logo from '../assets/img/gitlab.svg';

export const Contact = () => {
    return (
        <section className="contact" id="connect">
            <div className="contact-content">
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <h2>Get In Touch</h2>
                            <p>If you have any questions or inquiries, feel free to reach out to me at:</p>
                            <p><a href="mailto:yb@yuvibirdi.com">yb@yuvibirdi.com</a></p>
                        </div>
                    }
                </TrackVisibility>
            </div>
        </section>
    );
};
