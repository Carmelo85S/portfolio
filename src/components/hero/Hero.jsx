import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Carmelo from '../../assets/img-carmelo.png';
import '../../style/hero/hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-heading">
            Hi, I am <span className="hero-name">Carmelo</span>
          </h1>
          <p className="hero-info">
            I am a Front End developer currently expanding my knowledge in Back End. 
            I am a creative person, and I enjoy building beautiful websites and applications.
          </p>
          <div className="hero-icons">
            <a
              href="https://github.com/tuo-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon className="hero-icon" icon={faGithub} size="3x" />
            </a>
            <a
              href="https://linkedin.com/in/tuo-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon className="hero-icon" icon={faLinkedin} size="3x" />
            </a>
          </div>
          <div className="hero-cta-container">
            <button className="hero-cta" aria-label="Contact Me">
              Contact Me
            </button>
            <button className="hero-cta" aria-label="Resume">
              Resume
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={Carmelo} alt="Portrait of Carmelo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
