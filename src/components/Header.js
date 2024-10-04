import logo from "../icons_assets/Logo.svg";
import '../App.css';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" />
      <Nav/>
    </header>
  );
}

export default Header;
