import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import PageHero from "../components/PageHero";
import serverMap from "../assets/black-vein-rift-map.png";
import weaponIcon from "../assets/items/rare-weapon.png";
import pendantIcon from "../assets/items/scourgestone-pendant.png";
import bloodPotionIcon from "../assets/items/blood-potion.png";
import jewelIcon from "../assets/items/tier-four-jewel.png";
import ironSwordIcon from "../assets/items/iron-sword.png";
import mercilessIronIcon from "../assets/items/merciless-iron-sword.png";
import darkSilverIcon from "../assets/items/dark-silver-sword.png";
import sanguineIcon from "../assets/items/sanguine-sword.png";
import warriorPendantIcon from "../assets/items/warrior-pendant.png";
import bloodMerlotIcon from "../assets/items/blood-merlot-amulet.png";
import stygianAltarIcon from "../assets/items/altar-stygian-awakening.png";
import mixedBloodIcon from "../assets/items/mixed-blood.png";
import weaponCoatingIcon from "../assets/items/weapon-coating.png";
import archWarlockIcon from "../assets/items/arch-warlock-amulet.png";
import fusionForgeIcon from "../assets/items/fusion-forge.png";
import castleHeartIcon from "../assets/items/castle-heart.png";
import siegeGolemIcon from "../assets/items/siege-golem.png";

type ProgressionItem = { level?: string; item: string; required: string; icon: string };
type ProgressionGroup = { title: string; icon: string; items: ProgressionItem[] };
type ServerFeatureGroup = { title: string; icon: string; intro: string; points: string[] };
const serverFeatureGroups: ServerFeatureGroup[] = [
  { title: "Start your wipe", icon: castleHeartIcon, intro: "Everything you need in your first minutes on Black Vein.", points: ["The whole map is revealed immediately.", "Waygates are disabled.", "Starter missions are skipped - begin by placing your Castle Heart."] },
  { title: "Gameplay adjustments", icon: bloodPotionIcon, intro: "Faster progression with a more forgiving survival loop.", points: ["Loot multiplier: 1.7x to 2.0x.", "Inventory stacks: 2.0x.", "Refinement and processing: 3x.", "Blood drain and sun strength: 50% lower."] },
  { title: "Castle & siege", icon: siegeGolemIcon, intro: "Clear limits make raids and castle building more balanced.", points: ["One castle per clan; tile caps: 50 / 140 / 240 / 320 / 400.", "Seven servants and eight tombs per castle.", "Golem HP: 1750 first raid, 2000 second raid, then 2650.", "PvE durability loss is disabled."] },
  { title: "World changes", icon: stygianAltarIcon, intro: "Extra movement, farming routes and competitive points of interest.", points: ["Rifts are active daily from 10:00 until 01:00.", "Vanilla caves now lead to small farming-resource rooms.", "Caves can be used from both sides.", "Some multi-entrance plots have a blocked entrance for fairer plot balance."] },
];
const progressionGroups: ProgressionGroup[] = [
  { title: "Weapon Levels", icon: weaponIcon, items: [{ level: "Level 15", item: "Iron Sword", required: "Gear Level 33", icon: ironSwordIcon }, { level: "Level 18", item: "Merciless Iron Sword", required: "Gear Level 50", icon: mercilessIronIcon }, { level: "Level 21", item: "Dark Silver Sword", required: "Gear Level 65", icon: darkSilverIcon }, { level: "Level 24", item: "Sanguine Sword", required: "Gear Level 74", icon: sanguineIcon }] },
  { title: "Magic Sources (Amulets)", icon: pendantIcon, items: [{ level: "Level 15", item: "Scourgestone Pendant", required: "Gear Level 33", icon: pendantIcon }, { level: "Level 18", item: "Pendant of the Warrior", required: "Gear Level 50", icon: warriorPendantIcon }, { level: "Level 21", item: "Blood Merlot Amulet", required: "Gear Level 65", icon: bloodMerlotIcon }, { level: "Level 24", item: "Amulet of the Arch Warlock", required: "Gear Level 74", icon: archWarlockIcon }] },
  { title: "Jewels", icon: jewelIcon, items: [{ item: "Tier 4 Jewels", required: "Gear Level 70", icon: jewelIcon }] },
  { title: "Blood & Consumables", icon: bloodPotionIcon, items: [{ item: "Weapon Coatings", required: "Gear Level 74", icon: weaponCoatingIcon }, { item: "Mixed Blood", required: "Gear Level 76", icon: mixedBloodIcon }] },
  { title: "Passives & Crafting", icon: stygianAltarIcon, items: [{ item: "T2 Passives", required: "Gear Level 80", icon: stygianAltarIcon }, { item: "Fusion Forge", required: "Gear Level 81", icon: fusionForgeIcon }] },
];
function ProgressionPanel({ group }: { group: ProgressionGroup }) { return <article className="progression-panel"><div className="progression-panel-heading"><img src={group.icon} alt="" /><h3>{group.title}</h3></div><div className="progression-table"><div className="progression-table-head"><span>Unlock</span><span>Required</span></div>{group.items.map((entry) => <div className="progression-entry" key={`${entry.level ?? ""}-${entry.item}`}><span className="progression-unlock"><img src={entry.icon} alt="" /> <span>{entry.level && <small>{entry.level}</small>}<strong>{entry.item}</strong></span></span><span>{entry.required}</span></div>)}</div></article>; }
function ServerFeaturePanel({ group }: { group: ServerFeatureGroup }) { return <article className="server-feature-panel"><div className="server-feature-heading"><img src={group.icon} alt="" /><div><h3>{group.title}</h3><p>{group.intro}</p></div></div><ul>{group.points.map((point) => <li key={point}>{point}</li>)}</ul></article>; }
export default function About() { return <><PageHero eyebrow="Black Vein server" title="Custom settings. Clear progression." description="A squad PvP server with custom mods and gameplay settings built for a fast, competitive two-week wipe." />
  <section className="section"><Container><Row className="align-items-end mb-4"><Col lg={7}><div className="eyebrow">Server features</div><h2 className="section-title">Everything is in the right place.</h2></Col><Col lg={5}><p className="section-intro mb-lg-0">Learn the setup before you choose a plot, build a castle or take your first fight.</p></Col></Row><Row className="g-4">{serverFeatureGroups.map((group) => <Col md={6} key={group.title}><ServerFeaturePanel group={group} /></Col>)}</Row></Container></section>
  <section className="section section-dark"><Container><Row className="align-items-start g-5 mb-4"><Col lg={7}><div className="eyebrow">Level progression</div><h2 className="section-title">What unlocks when.</h2><p className="section-intro">Find the item you want, then check the Gear Level required to use it. You can craft or obtain locked items early, but cannot equip, use or access them until you reach their requirement.</p></Col></Row><Row className="g-4">{progressionGroups.map((group) => <Col lg={6} key={group.title}><ProgressionPanel group={group} /></Col>)}</Row></Container></section>
  <section className="section"><Container><Row className="g-5 align-items-center"><Col lg={5}><div className="eyebrow">Server map</div><h2 className="section-title">Rifts, FFA zones & plots.</h2><p className="section-intro">The map is revealed at wipe start. Use it to plan your route, find extra resource rooms in the reworked caves and identify special locations before you commit to a castle plot.</p><div className="map-legend"><p><span className="legend-dot legend-yellow" />15 level-difference area</p><p><span className="legend-dot legend-blue" />Added resource locations</p><p><span className="legend-dot legend-red" />FFA zones and T2 Rifts</p><p><span className="legend-dot legend-black" />Blocked plot entrance</p></div><div className="d-flex gap-2 flex-wrap mt-4"><Link className="button-glow" to="/rules#pvp">PvP & FFA rules</Link><Link className="button-ghost" to="/rules#general">General rules</Link></div></Col><Col lg={7}><figure className="map-frame mb-0"><img src={serverMap} alt="Black Vein map with T2 Rifts, FFA zones and blocked entrances" /><figcaption>Black Vein wipe map - special zones and custom plot changes.</figcaption></figure></Col></Row></Container></section>
</>; }
