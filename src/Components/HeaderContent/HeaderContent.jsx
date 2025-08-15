import "./HeaderContent.css";

function HeaderContent() {
  return (
    <header className="header">
      <div className="logo">Mylogo</div>
      <nav>
        <ul className="nav_list">
          <li className="nav__item">
            <a href="#">Home</a>
          </li>
          <li className="nav__item">
            <a href="#">Price</a>
          </li>
          <li className="nav__item">
            <a href="#">About</a>
          </li>
          <li className="nav__item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderContent;
