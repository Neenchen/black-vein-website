import { Route, Routes, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pulse from "./pages/Pulse";
import NotFound from "./pages/NotFound";
import Rules from "./pages/Rules";
import Market from "./pages/Market";
import Map from "./pages/Map";
import Events from "./pages/Events";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return <div className="app-shell"><ScrollToTop /><Header /><main className="page-transition" key={pathname}><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
    <Route path="/pulse" element={<Pulse />} /><Route path="/contact" element={<Contact />} />
    <Route path="/rules" element={<Rules />} /><Route path="/market" element={<Market />} />
    <Route path="/map" element={<Map />} />
    <Route path="/events" element={<Events />} />
    <Route path="*" element={<NotFound />} />
  </Routes></main><Footer /></div>;
}
