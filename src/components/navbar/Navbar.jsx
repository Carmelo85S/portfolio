import { Link } from 'react-router-dom';
import logo from '../../assets/logo-nav.webp';

const Navbar = () => {
  return (
    <header className="header">
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li><Link to="/">Link</Link></li>
                <li><Link to="/">Link</Link></li>
                <li><Link to="/">Link</Link></li>
                <li><Link to="/">Link</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
