import { Link } from 'react-router-dom';
import logo from '../../assets/logo-nav.webp';
import '../../style/navbar/navbar.css';

const Navbar = () => {
  return (
    <header className="header">
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul className='link-container'>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/">About</Link></li>
                <li><Link className="link" to="/">Services</Link></li>
                <li><Link className="link" to="/">Project</Link></li>
                <li><Link className="link contact" to="/">Contact me</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
