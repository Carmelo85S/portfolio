import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from '../../assets/logo-nav.webp';
import '../../style/footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
        <section className="content-container">
            <section className="text">
                <img src={logo} alt="Logo of Carmelo, developer" />
                <p className="info">
                    Hi, I am Carmelo, a passionate developer!                   
                </p>
            </section>
            <section className="icons-container">
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
            </section>
        </section>
      
    </footer>
  )
}

export default Footer
