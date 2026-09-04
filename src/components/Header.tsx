import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router";
import navbarLogo from "../assets/black-vein-navbar-static.png";
import homeIcon from "../assets/home-nav-icon.png";
import siegeGolem from "../assets/items/siege-golem.png";
import thistle from "../assets/items/thistle.webp";

export default function Header() {
  return <Navbar expand="lg" fixed="top" className="site-nav" variant="dark"><Container>
    <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2"><img src={navbarLogo} alt="Black Vein shield" className="brand-logo" /><span className="brand-name">BLACK VEIN — V RISING</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="main-navigation" /><Navbar.Collapse id="main-navigation"><Nav className="primary-nav align-items-lg-center">
      <Nav.Link as={NavLink} to="/" end><img src={homeIcon} className="nav-item-icon" alt="" />Home</Nav.Link>
      <NavDropdown title={<><span className="nav-icon" aria-hidden="true">📜</span>Rules</>} id="rules-navigation" menuVariant="dark">
        <NavDropdown.Item as={Link} to="/rules#general"><span aria-hidden="true">✦</span> General server rules</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/rules#pvp"><span aria-hidden="true">⚔</span> PvP & V Blood</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/rules#raids"><img src={siegeGolem} className="nav-dropdown-item-icon" alt="" /> Raid Rules</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/rules#chat"><span aria-hidden="true">☏</span> Chat & Reports</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={NavLink} to="/market"><img src={thistle} className="nav-item-icon" alt="" />Thistle Market</Nav.Link>
      <Nav.Link as={NavLink} to="/about"><span className="nav-icon" aria-hidden="true">⚙</span>Server Features</Nav.Link>
      <Nav.Link as={NavLink} to="/events"><span className="nav-icon" aria-hidden="true">✦</span>Events</Nav.Link>
    </Nav></Navbar.Collapse>
    <Link to="/contact" className="nav-cta header-discord"><svg className="nav-discord-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.37A19.79 19.79 0 0015.37 3c-.211.375-.444.875-.608 1.25a18.27 18.27 0 00-5.52 0C9.074 3.875 8.836 3.375 8.625 3A19.74 19.74 0 003.677 4.37C.533 9.026-.32 13.58.107 18.07A19.9 19.9 0 006.13 21c.49-.67.927-1.38 1.303-2.12a12.7 12.7 0 01-2.05-.98c.173-.127.342-.26.505-.398 3.95 1.85 8.23 1.85 12.13 0 .164.138.332.271.505.398-.655.384-1.34.713-2.05.98.376.74.813 1.45 1.303 2.12a19.87 19.87 0 006.023-2.93c.5-5.21-.854-9.724-3.482-13.7zM8.02 15.34c-1.18 0-2.15-1.08-2.15-2.4s.95-2.4 2.15-2.4c1.21 0 2.17 1.09 2.15 2.4 0 1.32-.95 2.4-2.15 2.4zm7.96 0c-1.18 0-2.15-1.08-2.15-2.4s.95-2.4 2.15-2.4c1.21 0 2.17 1.09 2.15 2.4 0 1.32-.94 2.4-2.15 2.4z" /></svg>Join Discord</Link>
  </Container></Navbar>;
}
