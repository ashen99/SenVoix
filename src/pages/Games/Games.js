// import { Link } from 'react-router-dom';
import { motion as m } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import GameCard from "../../components/GameCard/GameCard";
import Grid from "@mui/material/Grid";

// game cover images
import img1 from "../../assets/rocket.png";
import sentiment from "../../assets/sentiment.png";
import benchmark from "../../assets/benchmark.png";
import controllers from "../../assets/controllers.png";
import counterStrike from "../../assets/game_covers/Counter-Strike.jpg";
import ac from "../../assets/game_covers/ac_valhalla.png";
import bioshock from "../../assets/game_covers/bioshock.png";
import wwe from "../../assets/game_covers/wwe-2k22.jpg";
import COD from "../../assets/game_covers/call-of-duty.jpg";
import TF2 from "../../assets/game_covers/TF2.jpg";
import AC4 from "../../assets/game_covers/acblackflag.jpg";
import batmanAC from "../../assets/game_covers/Batman.jpg";
import stray from "../../assets/game_covers/stray.jpg";
import hollowknight from "../../assets/game_covers/HollowKnight.jpeg";

import "./games.css";

const styles = {
  card: {
    width: "14rem",
    height: "21rem",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    background: " #cce0ff",
  },

  cardImage: {
    paddingTop: "10px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },

  gameCard: {
    border: "0",
    width: "240px",
    height: "350px",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "row",
    boxShadow: "1px 5px 10px 2px rgba(0,0,0,.6)",
  },

  gameCardImg: {
    position: "absolute",
    height: "100%",
    objectFit: "cover",
    borderRadius: "30px",
    border: "0",
  },

  gameCardBody: {
    zIndex: "2",
    maxHeight: "50%",
    backgroundColor: "#00000082",
    borderRadius: "30px",
    color: "white",
    alignSelf: "flex-end",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    border: "0",
  },
};

function Games() {
  //const [showLoading, setShowLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="games-div">
      <div className="description">
        <m.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="img-content"
        >
          <img src={img1} className="img1" alt="astronut" />
        </m.div>
        <div className="text-content">
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            className="text"
          >
            <h1>
              {" "}
              Now you can get insight of your game with this AI powered tool
            </h1>
            <br></br>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
            className="game-cards"
          >
            <Card className="text-center" style={styles.card}>
              <Card.Img
                variant="top"
                src={sentiment}
                style={styles.cardImage}
              />
              <Card.Body>
                <Card.Title>Get Sentiments</Card.Title>
                <Card.Text>
                  Get sentiment of your game within its life-cycle.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center" style={styles.card}>
              <Card.Img
                variant="top"
                src={controllers}
                style={styles.cardImage}
              />
              <Card.Body>
                <Card.Title>Build Better Games</Card.Title>
                <Card.Text>
                  Recieve feedback from gamers where to improve on the system.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="text-center" style={styles.card}>
              <Card.Img
                variant="top"
                src={benchmark}
                style={styles.cardImage}
              />
              <Card.Body>
                <Card.Title>Benchmark Your Game</Card.Title>
                <Card.Text>
                  Analyze the public's perception of competitors and their
                  products.
                </Card.Text>
              </Card.Body>
            </Card>
          </m.div>
        </div>
      </div>
      {/* ================= horizontal line ================== */}
      <div
        style={{
          borderTop: "2px solid #fff ",
          marginLeft: 300,
          marginRight: 300,
        }}
      ></div>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        className="header-3"
      >
        <h3>Select your Game</h3>
      </m.div>
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
        className="games-class"
      >
        {/* =================================== first game row ========================================= */}
        <div className="games-list">
          <m.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GameCard tittle={"Conter Strike"} img={counterStrike} id={"10"} />
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GameCard tittle={"WWE 2K22"} img={wwe} id={"1255630"} />
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GameCard tittle={"Assasins Creed"} img={ac} id={"2208920"} />
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GameCard tittle={"BioShock Infinite"} img={bioshock} id={"8870"} />
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GameCard tittle={"COD: MW II"} img={COD} id={"1938090"} />
          </m.div>
        </div>
        {/* =================================== second game row ========================================= */}
        <div className="games-list" style={{ paddingTop: 50 }}>
          <m.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GameCard tittle={"TitanFall 2"} img={TF2} id={"1237970"} />
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GameCard tittle={"AC BlackFlag"} img={AC4} id={"242050"} />
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GameCard
              tittle={"BatMan ArkhamCity"}
              img={batmanAC}
              id={"200260"}
            />
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GameCard tittle={"Stray"} img={stray} id={"1332010"} />
          </m.div>
          <m.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <GameCard
              tittle={"Hollow Knight"}
              img={hollowknight}
              id={"367520"}
            />
          </m.div>
        </div>
      </m.div>
    </div>
  );
}

export default Games;
