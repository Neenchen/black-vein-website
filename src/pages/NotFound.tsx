import { Container } from "react-bootstrap";
import { Link } from "react-router";
export default function NotFound() { return <section className="page-hero min-vh-100 d-flex align-items-center"><Container className="text-center"><div className="eyebrow">404 / Signal lost</div><h1 className="mt-2">Nothing here but static.</h1><p className="hero-copy">This path does not lead into the Vein.</p><Link className="button-glow" to="/">Return home</Link></Container></section>; }
