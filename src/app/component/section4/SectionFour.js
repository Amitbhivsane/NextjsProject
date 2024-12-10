import React from "react";
import sectionfour from "./sectionfour.css";
import Image from "next/image";
import Frame204 from "../img/Frame204.png";

const SectionFour = () => {
  return (
    <>
      <div className="container4">
        <div className="left4">
          <Image src={Frame204} alt="img" />
        </div>
        <div className="right4">
          <p className="right41">
            S’inscrire & économiser{" "}
            <span
              style={{
                fontFamily: " Cabinet Grotesk",
                fontSize: "43px",
                fontWeight: "500",
                color: "#5CD2DD",
              }}
            >
              10%
            </span>{" "}
          </p>
          <p className="right412">
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity didn't. Yet busy any meeting
            shark light marginalised 4-blocker message. Productize corporate
            nail caught synergy highlights lunch. Company another pushback items
            dear or any.
          </p>
          <div>
            <input
              className="righttext"
              type="text"
              placeholder="john@doe.com"
            />{" "}
            <button className="rightbutton">S’inscrire -</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
