import { Link } from 'react-scroll';
import logo from '../../assets/logo-nav.webp';
import '../../style/navbar/navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="Logo for Developer Portfolio" />
        </div>
        <ul className="link-container">
          <li>
            <Link className="link" to="hero" smooth={true} duration={500} offset={-80}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="about" smooth={true} duration={500} offset={-80}>
              About
            </Link>
          </li>
          <li>
          <Link className="link" to="project" smooth={true} duration={500} offset={-80}>
            Projects
          </Link>
          </li>
          <li>
            <Link className="link contact" to="contact" smooth={true} duration={500} offset={-80}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
