import { Col, Container, Row } from "react-bootstrap";
import PageHero from "../components/PageHero";

export default function Events() {
  return <><PageHero eyebrow="Server activities" title="Black Vein events." description="Events, special activities and important wipe moments are announced here and on Discord." /><section className="section pt-4"><Container><Row className="g-4"><Col lg={8}><div className="event-board"><div className="eyebrow">Upcoming events</div><h2>No event announced yet.</h2><p>New events will appear here once they are scheduled. Check the Black Vein Discord for the newest announcements and participation details.</p><a className="button-glow" href="https://discord.gg/BlackVein" target="_blank" rel="noreferrer">Open Discord <span aria-hidden="true">↗</span></a></div></Col><Col lg={4}><article className="feature-card"><div className="card-icon">✦</div><h3>Event rewards</h3><p className="mb-0">Server events and activities can reward Virtual Thistles. Reward details are always included in the event announcement.</p></article></Col></Row></Container></section></>;
}
