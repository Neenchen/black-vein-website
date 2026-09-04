import { Container } from "react-bootstrap";
type PageHeroProps = { eyebrow: string; title: string; description: string };
export default function PageHero({ eyebrow, title, description }: PageHeroProps) { return <section className="page-hero"><Container className="text-center reveal"><div className="eyebrow">{eyebrow}</div><h1 className="mt-2">{title}</h1><p className="hero-copy mb-0">{description}</p></Container></section>; }
