import img1 from "../../assets/game-console.png";
import img2 from "../../assets/tech.png";
import img3 from "../../assets/BERT-logo-new.png";
import img4 from "../../assets/Colab-new.png";
import img5 from "../../assets/javascript-logo-new.png";
import img6 from "../../assets/keras-logo-new.png";
import img7 from "../../assets/flask-logo-new.png";
import SenVoixDoc from "../../assets/SenVoix Documentation.pdf";
import "./about.css";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <div className="maindiv" id="about">
      <div className="maindiv-1">
        {/* ================= about =================== */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="about"
          id="about"
        >
          <div className="desctiption">
            <div className="logo">
              <img
                src={img1}
                className="img1"
                alt="logo"
                style={{ height: "50px", width: "50px" }}
              />
              <span style={{ paddingLeft: 10 }}>SENVOIX</span>
            </div>
            <div class="desc">
              <p style={{ color: "rgb(89, 89, 91);" }}>
                {" "}
                Using Sen-Voix you can get the polarity of your game reviews and
                predict the satisfaction level of players. <br></br>
                <span>This application was done by using Google </span>
                <span style={{ color: "#4285f4" }}>B</span>
                <span style={{ color: "#db4437" }}>E</span>
                <span style={{ color: "#f4b400" }}>R</span>
                <span style={{ color: "#0f9d58" }}>T</span>.
              </p>
              <a
                href={SenVoixDoc}
                download="SenVoix-PDF-document"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="button-29">Download Documentation</button>
              </a>
            </div>
          </div>
          <div class="image-section">
            <img src={img2} className="analysis" alt="analysis" />
          </div>
        </m.div>
      </div>
      {/* ================= about bert ================== */}
      <div className="maindiv-2">
        <div className="about-bert">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            class="bert-img"
          ></m.div>
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            class="bert-text"
          >
            <p
              style={{
                marginBottom: "35px",
                fontSize: "35px",
                marginTop: "30px",
              }}
            >
              What is <span style={{ color: "#4285f4" }}>B</span>
              <span style={{ color: "#db4437" }}>E</span>
              <span style={{ color: "#f4b400" }}>R</span>
              <span style={{ color: "#0f9d58" }}>T</span> ?{" "}
            </p>
            <p style={{ marginTop: "20px" }}>
              BERT (Bidirectional Encoder Representations from Transformers) is
              a deep learning algorithm related to natural language processing.
              It helps a machine understand what words in a sentence mean, but
              with all the nuances of context.<br></br>
              <a
                href="https://jalammar.github.io/illustrated-bert/"
                rel="noreferrer"
                target="_blank"
                style={{ color: "#3884f0;" }}
              >
                {" "}
                Read More{" "}
              </a>
            </p>
          </m.div>
        </div>
      </div>
      {/* ================= project tech ================== */}
      <div className="overflow-hidden">
        <m.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="details-project"
        >
          <div className="text-cont">This Project was created using</div>
          <div className="image-cont">
            <m.img
              initial={{ opacity: 0.5 }}
              whileHover={{ scale: 1.5, opacity: 1 }}
              src={img3}
              alt=""
              width="90px"
              height="90px"
            />
            <m.img
              initial={{ opacity: 0.5 }}
              whileHover={{ scale: 1.5, opacity: 1 }}
              src={img4}
              alt=""
              width="90px"
              height="90px"
            />
            <m.img
              initial={{ opacity: 0.5 }}
              whileHover={{ scale: 1.5, opacity: 1 }}
              src={img5}
              alt=""
              width="99px"
              height="99px"
            />
            <m.img
              initial={{ opacity: 0.5 }}
              whileHover={{ scale: 1.5, opacity: 1 }}
              src={img6}
              alt=""
              width="80px"
              height="80px"
            />
            <m.img
              initial={{ opacity: 0.5 }}
              whileHover={{ scale: 1.5, opacity: 1 }}
              src={img7}
              alt=""
              width="100px"
              height="100px"
              style={{ filter: "invert(100%)" }}
            />
            {/* <img src={}  alt="" width="90px" height="90px" style={{filter: "grayscale(100%)"}} /> */}
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default About;
