import { motion as m } from "framer-motion";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";

function HomePage() {
  return (
    <m.div className="Homepage">
      <Home />
      <About />
    </m.div>
  );
}

export default HomePage;
