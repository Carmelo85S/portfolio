import { Link } from 'react-scroll';
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
            I’m a curious person from Italy with a rich background in working with people. 
            I bring a fresh perspective and a wealth of experience to everything I do. 
            Always open to learn and try new things, I never run away from challenges. 
            As a creative person, I enjoy designing beautiful websites and applications 
            with:
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
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              Contact Me
            </Link>
          </button>
            {/*<button className="hero-cta" aria-label="Resume">
              Resume
            </button>*/}
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
