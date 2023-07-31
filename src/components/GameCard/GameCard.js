import { useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./gamecard.css";
import counterStrike from "../../assets/game_covers/Counter-Strike.jpg";
import ac from "../../assets/game_covers/ac_valhalla.png";
import bioshock from "../../assets/game_covers/bioshock.png";
import wwe from "../../assets/game_covers/wwe-2k22.jpg";
import axios from "axios";

const styles = {
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

const GameCard = ({ tittle, img, id }) => {
  const [showLoading, setShowLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(false);
  

  const navigate = useNavigate();

  const handleClick = async (event) => {
    try {
      setShowLoading((current) => !current);
      // console.log(event.target.id);
      const { data } = await axios.post(`http://localhost:5000/`, { id: id });
      // console.log(data, "got data");
      if (data) {
        setFetchedData((current) => !current);
        navigate("/gamesReviews", { state: data });
      }
    } catch (error) {
      console.error(error);
      alert("Failed to load data");
    }
  };

  return (
    <Card style={styles.gameCard}>
      <img src={img} class="card-img-top" alt="" style={styles.gameCardImg} />
      <Card.Body style={styles.gameCardBody}>
        <h5 class="card-title-new">{tittle}</h5>
        <button
          onClick={handleClick}
          id="10"
          class="button"
          style={{ verticalAlign: "middle" }}
        >
          <span>Click Me! </span>
        </button>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
