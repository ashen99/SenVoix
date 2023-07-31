import { useState } from "react";
import Card from "react-bootstrap/Card";
import "./card.css";
import happy from "../../assets/icons8-happy-50.png";
import sad from "../../assets/icons8-sad-50.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  maxWidth: "100%",
  bgcolor: "background.paper",
};

const ReviewCard = ({ prediction, description }) => {
  // const classes = useStyles();

  // const showDescription = showMore ? description.slice(0,100)+'...' : description;
  let icon = prediction == "positive" ? happy : sad;
  console.log(prediction);
  return (
    <div className="content">
      <div className="main-div">
        <div className="img">
          <img src={icon} />
          <p>{prediction}</p>
        </div>
        <div className="descriprtion">
          <p>{description}</p>
        </div>
      </div>
      <div
        style={{
          borderTop: "2px solid #ffffff",
          marginLeft: "300",
          marginRight: "300",
        }}
      ></div>
    </div>
  );
};

export default ReviewCard;
