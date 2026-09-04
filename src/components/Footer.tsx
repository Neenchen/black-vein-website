import { Container } from "react-bootstrap";
import { Link } from "react-router";
import logo from "../assets/black-vein-navbar-static.png";
import avatar from "../assets/neenchenxo-avatar.jpg";

export default function Footer() {
  return <footer className="site-footer"><Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3"><Link to="/" className="d-flex align-items-center gap-2"><img src={logo} alt="" className="footer-logo" /><span className="brand-name">BLACK VEIN — V RISING</span></Link><span>EU Squad PvP • Two-week wipes • Custom mods enabled</span><Link to="/contact" className="footer-owner"><img src={avatar} alt="Neenchenxo" className="footer-owner-avatar" /><span><strong>Neenchenxo</strong><small>Discord & Server Owner</small></span></Link></Container></footer>;
}
