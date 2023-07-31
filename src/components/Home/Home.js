//import code from "../img/pro.png";
//import binaryWorld from "../img/binary.png";
import { motion as m } from "framer-motion";
import gameicons from "../../assets/gameicons.png";
import "./home.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const styles = {
  fontSize: "18px",
};

const Home = () => {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("/games");
  }

  return (
    <div className="main-div">
      <div className="Home" id="home">
        <div className="div1">
          <div className="overflow-hidden">
            <m.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            >
              SEN-VOIX
            </m.h1>
          </div>
          <div className="overflow-hidden">
            <m.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            >
              <span style={styles}>
                {" "}
                A Tool for Sentiment Analysis of Game Reviews.
              </span>
            </m.p>
          </div>
          <m.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            src={gameicons}
            className="gameicons"
            alt="icons"
          />
        </div>
      </div>

      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
        className="div2"
      >
        {/* <Button
          variant="primary"
          onClick={handleClick}
          style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
        >
          Jump In!
        </Button> */}
        <button class="button-85" role="button" onClick={handleClick}>Jump In</button>
      </m.div>
    </div>
  );
};

export default Home;
