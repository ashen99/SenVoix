import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./gamereview.css";
import happy from "../../assets/icons8-happy-50.png";
import sad from "../../assets/icons8-sad-50.png";

function GameReviews() {
  const location = useLocation();
  const [reviews, setReview] = useState("");
  const [sentimentReviews, setSentimentReviews] = useState("");
  

  useEffect(() => {
    if (location.state) {
      setReview(location.state);

      // Extract sentiment_reviews from location.state.predictions and set it as the value of sentimentReviews state variable
      const { sentiment_reviews } = location.state.predictions;
      setSentimentReviews(sentiment_reviews);
    }
  }, [location]);


  const getNext = async (event) => {
    // setShowLoading(current => !current)
    const {data} = await axios.post(`http://localhost:5000/next`, {id:2208920});
    console.log(data,'next data')
    if(data){
      const { negative_reviews, overall_sentiment, positive_reviews } = data.predictions;
      setReview(prevState => ({
        ...prevState,
        predictions: {
          ...prevState.predictions,
          negative_reviews,
          overall_sentiment,
          positive_reviews
        }
      }));

      // setFetchedData(current => !current)
      const { sentiment_reviews } = data.predictions;
      setSentimentReviews(prevState => [...prevState, ...sentiment_reviews]);
    }
  };
  console.log(sentimentReviews, 'new arr')

  return (
    <m.div
      initial={{ y: "2%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75 }}
      className="maindivGameReviews"
    >
      <div className="overroll" align="left">
        <p>Overroll Player's Satisfaction : {reviews?.predictions?.overall_sentiment}</p>
        {/* <p>Players Satisfaction : {reviews.predictions.overall_sentiment}%</p> */}
        <p>Positive Sentiment : {reviews?.predictions?.positive_reviews}%</p>
        <p>Negative Sentiment : {reviews?.predictions?.negative_reviews}%</p>
      </div>
      <div className="table">
        {sentimentReviews?.length > 0
          ? sentimentReviews?.map((review, id) => (
              <div className="mainTableDiv">
                <div className="tableContentDiv">
                  <div className="img">
                    <img src={review.prediction === "positive" ? happy : sad} alt="game-cover-img"/>
                    <p>{review.prediction}</p>
                  </div>
                  <div className="descriprtion">
                    <p>{review.review}</p>
                  </div>
                </div>
                <div
                  style={{
                    borderTop: "2px solid #cccccc",
                    marginLeft: "300",
                    marginRight: "300",
                  }}
                ></div>
              </div>
            ))
          : "No Reviews to show"}
      </div>
      <div style={{paddingTop: '15px'}}>
        <button className="btn_next" onClick={getNext}>NEXT</button>
      </div>
    </m.div>
  );
}

export default GameReviews;

