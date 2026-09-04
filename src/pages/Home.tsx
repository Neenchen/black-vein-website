import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import logo from "../assets/black-vein-logo-thick.webp";
import vRisingIcon from "../assets/v-rising-badge-icon.png";

const highlights = [{ icon: "⚔", title: "EU Squad PvP", text: "Competitive V Rising PvP with fair squad fights, clear limits and active moderation." }, { icon: "↻", title: "2-week wipes", text: "A fresh start every two weeks. Build your castle, take your fights, then begin again." }, { icon: "✦", title: "Custom progression", text: "Custom settings, progression gates, reworked caves, special map zones and more." }];

function ViewerCounter() {
  const [views, setViews] = useState<number | null>(null);
  useEffect(() => {
    let mounted = true;
    fetch("/api/site-status").then((response) => response.ok ? response.json() : null).then((data: { views?: number } | null) => {
      if (mounted && typeof data?.views === "number") setViews(data.views);
    }).catch(() => undefined);
    return () => { mounted = false; };
  }, []);
  return <div className="viewer-counter" aria-label="Website viewers"><span>Viewers</span><strong>{views?.toLocaleString() ?? "..."}</strong></div>;
}

export default function Home() {
  return <><section className="hero"><Container className="position-relative"><ViewerCounter /><div className="hero-server-badge"><span><img src={vRisingIcon} className="hero-vrising-icon" alt="" /> V Rising</span><i aria-hidden="true" /><span><b aria-hidden="true">🇪🇺</b> EU</span><i aria-hidden="true" /><span><b aria-hidden="true">⚔</b> Squad PvP</span></div><img src={logo} className="hero-logo" alt="Black Vein animated shield" /><div className="server-ip"><span>Server IP</span><code>208.115.248.90</code></div><h1>[EU] Black Vein.<br /><em>Explore the server.</em></h1><p className="hero-copy">Black Vein is an EU squad PvP server with two-week wipes, raids, progression and a community built for players who want a fair fight.</p><div className="d-flex justify-content-center gap-2 flex-wrap"><Link to="/about" className="button-glow">Explore server features</Link><Link to="/rules" className="button-ghost">Read server rules</Link></div><nav className="shortcut-bar" aria-label="Rule shortcuts"><Link to="/rules#general">General rules</Link><Link to="/rules#pvp">PvP rules</Link><Link to="/rules#raids">Raid rules</Link><Link to="/rules#chat">Chat & reports</Link></nav></Container></section><section className="section section-dark"><Container><Row className="align-items-end mb-4"><Col lg={7}><div className="eyebrow">Before you enter</div><h2 className="section-title">A server made for clean, competitive PvP.</h2></Col><Col lg={5}><p className="section-intro mb-lg-0">Start with the server features, then read the rules before joining. That keeps every fight, raid and wipe fair.</p></Col></Row><Row className="g-4">{highlights.map((item) => <Col md={4} key={item.title}><article className="feature-card"><div className="card-icon">{item.icon}</div><h3>{item.title}</h3><p className="mb-0">{item.text}</p></article></Col>)}</Row></Container></section><section className="section"><Container><div className="cta-panel"><Row className="align-items-center position-relative"><Col lg={8}><div className="eyebrow">Before you join</div><h2 className="section-title mb-2">Read the rules first.</h2><p className="section-intro mb-0">Everything you need for fair PvP, raids and progression is listed in the rulebook.</p></Col><Col lg={4} className="text-lg-end mt-4 mt-lg-0"><Link to="/rules" className="button-glow">View rules</Link></Col></Row></div></Container></section></>;
}
