import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">MyReactApp</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Головна</a></li>
          <li><a href="#about">Про нас</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;