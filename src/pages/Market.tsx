import { Col, Container, Row } from "react-bootstrap";
import PageHero from "../components/PageHero";
import thistle from "../assets/items/thistle.webp";
import onyxTear from "../assets/items/onyx-tear.png";
import ghostShroom from "../assets/items/ghost-shroom.png";
import plagueBrier from "../assets/items/plague-brier.png";
import corruptedFlower from "../assets/items/corrupted-flower.png";
import bleedingHeart from "../assets/items/bleeding-heart.png";
import bloodRose from "../assets/items/blood-rose.png";
import sacredGrape from "../assets/items/sacred-grape.png";
import sageFish from "../assets/items/sage-fish.png";
import swampDweller from "../assets/items/swamp-dweller.png";
import corruptedFish from "../assets/items/corrupted-fish.png";
import goldenRiverBass from "../assets/items/golden-river-bass.png";
import epicShard from "../assets/items/epic-ancestral-shard.png";
import immortalKingsCloak from "../assets/items/immortal-kings-cloak.png";
import topHat from "../assets/items/top-hat-armour.png";
import gravecaller from "../assets/items/the-gravecaller.png";

type MarketItem = { name: string; price: string; note?: string; images?: string[]; priceImage?: string };
const rewards = [["Daily login", "100"], ["First V Blood kill", "50"], ["PvP kill", "15"], ["Every 45 min played", "5"], ["Events & activities", "Variable"]];
const weapons: MarketItem[] = [{ name: "Weapon exchange", price: "5 Epic Weapon Shards", note: "Trade for 1 Legendary weapon", images: [gravecaller], priceImage: epicShard }, { name: "Legendary weapon", price: "4,000", note: "Direct purchase", images: [gravecaller] }];
const premium: MarketItem[] = [{ name: "Onyx Tear", price: "600", images: [onyxTear] }, { name: "Cloaks & hats", price: "400", images: [immortalKingsCloak, topHat] }];
const seeds: MarketItem[] = [{ name: "Ghost Shroom", price: "45", images: [ghostShroom] }, { name: "Plague Brier", price: "45", images: [plagueBrier] }, { name: "Corrupted Flower", price: "45", images: [corruptedFlower] }, { name: "Bleeding Heart", price: "45", images: [bleedingHeart] }, { name: "Blood Rose", price: "40", images: [bloodRose] }, { name: "Sacred Grapes", price: "60", images: [sacredGrape] }];
const fish: MarketItem[] = [{ name: "Sage Fish", price: "45", images: [sageFish] }, { name: "Swamp Dweller", price: "45", images: [swampDweller] }, { name: "Corrupted Fish", price: "45", images: [corruptedFish] }, { name: "Golden River Bass", price: "45", images: [goldenRiverBass] }];
function ThistleCurrency() { return <span className="thistle-currency"><img src={thistle} alt="Thistle" />Thistles</span>; }
function Prices({ title, items, currency = true }: { title: string; items: MarketItem[]; currency?: boolean }) { return <Col md={6}><article className="feature-card"><div className="eyebrow">Thistle market</div><h3 className="mt-2 mb-3">{title}</h3>{items.map((item) => <div className="market-row" key={item.name}><span className="d-flex align-items-center gap-2">{item.images?.map((image, index) => <img className="market-item-image" src={image} alt="" key={`${item.name}-${index}`} />)}<span><strong className="d-block fw-medium">{item.name}</strong>{item.note && <small className="text-secondary">{item.note}</small>}</span></span><span className="text-light text-nowrap d-inline-flex align-items-center gap-1">{item.price}{item.priceImage && <img className="market-price-image" src={item.priceImage} alt="Epic Weapon Shard" />}{currency && <> <ThistleCurrency /></>}</span></div>)}</article></Col>; }
export default function Market() { return <><PageHero eyebrow="Virtual Thistle system" title="Earn it. Spend it. Keep it." description="Virtual Thistles are account-bound rewards: your balance stays safe even when you die or are raided." /><section className="section"><Container><Row className="g-4"><Col lg={5}><div className="eyebrow">How to earn</div><h2 className="section-title">Play the server. Get rewarded.</h2><p className="section-intro">Repeated kills of the same player do not give unlimited rewards. NPCs do not reward Thistles — only V Bloods do.</p></Col><Col lg={{ span: 6, offset: 1 }}><div className="feature-card">{rewards.map(([name, amount]) => <div className="market-row" key={name}><span>{name}</span><strong className="text-light">{amount} <ThistleCurrency /></strong></div>)}</div></Col></Row></Container></section><section className="section section-dark"><Container><Row className="g-4"><Prices title="Weapons" items={weapons} currency={false} /><Prices title="High-value materials" items={premium} /><Col md={6}><article className="feature-card"><div className="eyebrow">Prisoners</div><h3 className="mt-2">Any 100% blood prisoner</h3><div className="market-price">3,000 <ThistleCurrency /></div><ol className="purchase-steps"><li>Go to the prison at the Admin Castle.</li><li>Stand in front of the prisoner you want.</li><li>Enter Dominate mode and pay the price.</li><li>A Dusk Caller appears in your inventory.</li></ol></article></Col><Prices title="Rare seeds" items={seeds} /><Prices title="Rare fish" items={fish} /><Col md={6}><article className="feature-card"><div className="eyebrow">Player commands</div><h3 className="mt-2">Manage your Thistles</h3><p className="mb-2">Check your balance</p><code>.bw me</code><p className="mt-4 mb-2">Transfer to another player</p><code>.bw transfer &lt;PlayerName&gt; &lt;Amount&gt;</code><p className="mt-3 mb-0 text-secondary">Example: .bw transfer Dracula 100</p></article></Col></Row></Container></section></>; }
