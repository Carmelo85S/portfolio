import logo from '../../assets/logo-nav.webp';

const Navbar = () => {
  return (
    <header className="header">
        <nav className="nav">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
        </nav>
    </header>
  )
}

export default Navbar
