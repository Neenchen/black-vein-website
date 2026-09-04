import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import PageHero from "../components/PageHero";

type Rule = { title: string; points: string[] };
const general: Rule[] = [
  { title: "Teaming", points: ["PvE teaming is allowed. PvP teaming of any kind is prohibited.", "Teaming situations are judged individually.", "Reports need full-context evidence. Short clips may be denied."] },
  { title: "5th clan member", points: ["One designated substitute is allowed per clan.", "Never more than 4 clan members online at once.", "The substitute cannot join during raid time or belong to another clan.", "Notify an admin before a wipe or when the designated player changes."] },
  { title: "Progression abuse", points: ["Do not intentionally stall or manipulate gear progression.", "Do not maintain a low Gear Score to farm or raid lower-geared players.", "See Server Features for the Level Progression setup."] },
  { title: "Camping", points: ["No griefing outside player bases.", "No Waygate camping.", "No Hotzone camping."] },
  { title: "Player names", points: ["Names must be appropriate and easy to moderate.", "Inappropriate or difficult-to-moderate names may be changed by staff."] },
  { title: "Stream sniping", points: ["Stream sniping is not allowed.", "Reports require a kill or encounter timestamp and proof that the reported player watched the stream.", "A stream delay is strongly recommended."] },
  { title: "Privacy & doxxing", points: ["Never post or share another person's private real-life information.", "This includes images, addresses, phone numbers and social accounts.", "Doxxing results in an immediate permanent server ban."] },
  { title: "Respect staff", points: ["Treat staff and players with respect.", "Question a decision only with new evidence in a ticket.", "Insults, threats, repeated drama or disruptive behaviour can result in a permanent ban."] },
];
const pvp: Rule[] = [
  { title: "Gear score limits", points: ["The highest Gear Score in the squad always counts.", "Gear 0-79: maximum 10-level difference.", "Gear 80+: maximum 5-level difference."] },
  { title: "Squad tiering", points: ["A squad's tier is based on its highest-tier member.", "All squad members must stay within the same progression tier.", "The highest and lowest clan member may be no more than 5 levels apart."] },
  { title: "V Blood & bosses", points: ["Do not fight players during an active boss fight.", "PvP starts only once the boss fight has fully ended.", "Do not start a V Blood encounter to escape PvP.", "Boss camping is not allowed."] },
  { title: "FFA zones", points: ["Gear-score limits do not apply in FFA zones.", "Hotzones, Decayed Castles and Offline Raids are FFA."] },
  { title: "PvP exceptions", points: ["Limits do not apply to loot thieves, players leeching after your death or players sabotaging an active fight.", "Shard holders can always be attacked regardless of Gear Score."] },
  { title: "Unstuck", points: ["Using Unstuck during or to escape a PvP fight is not allowed.", "A warning is issued when video proof is provided."] },
  { title: "Tier 2 Rifts", points: ["T2 Rifts are Free-for-All.", "When T2 activates, leave a T1 Rift within 30 seconds.", "Do not repeatedly gatekeep a Rift without participating in its objective.", "You may leave briefly to heal or reset before returning."] },
];
const raids: Rule[] = [
  { title: "Raid schedule", points: ["Raid window: every day, 20:00-22:00 GMT+2.", "Offline Protection is on during weekday raid hours.", "Offline Protection is off on weekends."] },
  { title: "Offline protection", points: ["The entire clan must be offline for 15 minutes before it activates.", "Offline raids are FFA.", "A clan doing an offline raid can be counter-raided."] },
  { title: "Shard limit", points: ["Each squad may hold only 1 Shard.", "If a squad holds more than 1 Shard, all of that squad's Shards will be reset.", "Shard holders can be attacked or raided regardless of level difference."] },
  { title: "Defence abuse", points: ["No excessive lighting that can cause server lag.", "Avoid excessive expensive structures or decorations.", "No dummies to charge ultimates.", "No vermin nests to summon Nibbles for healing."] },
  { title: "Raid conduct", points: ["Do not run away with loot during a raid or dump items to intentionally despawn them.", "Do not interfere with an active raid, camp its location or counter-raid the involved parties.", "Do not avoid being raided by launching consecutive raids yourself."] },
  { title: "Lower-level attackers", points: ["If a lower-level player raids you, you may raid them back.", "This is limited to one raid window."] },
];
function RuleGroup({ id, eyebrow, title, rules, dark = false }: { id: string; eyebrow: string; title: string; rules: Rule[]; dark?: boolean }) {
  return <section id={id} className={"section " + (dark ? "section-dark" : "")}><Container><div className="eyebrow">{eyebrow}</div><h2 className="section-title">{title}</h2><Row className="g-4">{rules.map((rule) => <Col md={6} lg={4} key={rule.title}><article className="feature-card rule-card"><h3>{rule.title}</h3><ul>{rule.points.map((point) => <li key={point}>{point}</li>)}</ul></article></Col>)}</Row></Container></section>;
}
export default function Rules() {
  const [activeSection, setActiveSection] = useState("general");
  const [isPinned, setIsPinned] = useState(false);
  const subnavRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const sectionIds = ["general", "pvp", "raids", "chat"];
    const updateNavigation = () => {
      const atPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const current = atPageEnd ? "chat" : sectionIds.reduce((active, id) => document.getElementById(id)!.getBoundingClientRect().top <= 205 ? id : active, "general");
      setActiveSection(current);
      setIsPinned(window.scrollY > (subnavRef.current?.offsetTop ?? Infinity) - 78);
    };
    updateNavigation(); window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);
  return <div className="rules-page">
    <PageHero eyebrow="Read before joining" title="Black Vein rules." description="These rules keep fights fair and the server enjoyable. Rules not listed here may still be handled by the admin team." />
    <div className="rules-subnav-spacer" ref={subnavRef}><div className={"rules-subnav-wrap " + (isPinned ? "is-pinned" : "")}><Container><nav className="rules-subnav" aria-label="Rule sections">
      <Link to="#general" onClick={() => setActiveSection("general")} className={activeSection === "general" ? "active" : ""}>General rules</Link><Link to="#pvp" onClick={() => setActiveSection("pvp")} className={activeSection === "pvp" ? "active" : ""}>PvP rules</Link><Link to="#raids" onClick={() => setActiveSection("raids")} className={activeSection === "raids" ? "active" : ""}>Raid rules</Link><Link to="#chat" onClick={() => setActiveSection("chat")} className={activeSection === "chat" ? "active" : ""}>Chat & reports</Link>
    </nav></Container></div></div>
    <RuleGroup id="general" eyebrow="01 / Server foundation" title="Server general rules" rules={general} />
    <RuleGroup id="pvp" eyebrow="02 / Combat conduct" title="PvP, V Blood & Rifts" rules={pvp} dark />
    <RuleGroup id="raids" eyebrow="03 / Siege conduct" title="Raid rules & schedule" rules={raids} />
    <section id="chat" className="section section-dark"><Container><div className="eyebrow">04 / Chat & reports</div><h2 className="section-title">Keep it respectful.</h2><Row className="g-4">
      <Col md={6} lg={4}><article className="feature-card rule-card"><h3>Chat rules</h3><ul><li>No harassment, threats, racism or discriminatory language.</li><li>No toxic behaviour or chat spam.</li><li>English is required in Discord and in-game global chat.</li><li>Violations may result in a 3-day mute, wipe mute or warning.</li></ul></article></Col>
      <Col md={6} lg={4}><article className="feature-card rule-card"><h3>Reports</h3><ul><li>Open a Discord ticket for every report.</li><li>Provide video with the full context.</li><li>Short clips may be denied.</li><li>Admin decisions protect a healthy and fair server.</li></ul></article></Col>
      <Col md={6} lg={4}><article className="feature-card rule-card"><h3>Server moderation</h3><ul><li>Rules not listed here may still be handled by the admin team.</li><li>Repeated problems or behaviour that does not fit the community can lead to removal from the server.</li></ul></article></Col>
    </Row></Container></section>
  </div>;
}
