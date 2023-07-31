import "./App.css";
import NavbarComp from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Games from "./pages/Games/Games";
import Footer from "./components/Footer/Footer";
import GameReviews from "./pages/GameReviews/GameReviews";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <NavbarComp />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="games" element={<Games />} />
          <Route path="gamesReviews" element={<GameReviews />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
