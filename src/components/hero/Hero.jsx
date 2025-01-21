import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Carmelo from '../../assets/img-carmelo.png';
import Typewriter from 'typewriter-effect';

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
            I am a curious person from italy, with a big background working with people i can bring a fresh air of experience.
            I am always ready to learn or try new things and i don't like to give up.
            I am a creative person, and I enjoy building beautiful websites and applications with:
          </p>
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: ['HTML5', 'CSS3', 'Javascript', 'or', 'React and Sass'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="hero-icons">
            <a
              href="https://github.com/carmelo85s"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon className="hero-icon" icon={faGithub} size="3x" />
            </a>
            <a
              href="https://www.linkedin.com/in/carmelo-salis-7726ba298/"
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
