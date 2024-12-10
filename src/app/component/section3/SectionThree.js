import React from "react";
import sectionthree from "./sectionthree.css";
import Groupe_123 from "../img/Groupe_123.png";
import Groupe_504 from "../img/Groupe_504.png";
import Groupe_56 from "../img/Groupe_56.png";
import Groupe_25 from "../img/Groupe_25.png";
import Image from "next/image";
const SectionThree = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontWeight: "800",
            color: "#393939",
            font: "Cabinet Grotesk",
          }}
        >
          On s’occupe de{" "}
          <span style={{ color: "#5CD2DD", fontSize: "35px" }}> tout</span>
        </h2>
        <h6 style={{ fontWeight: "400", font: "Geist", fontSize: "14px" }}>
          Office ipsum you must be muted. It meeting commitment busy pain.
        </h6>
        <div className="section3">
          <div>
            <Image src={Groupe_25} alt="img1" />
            <p className="s3_t">Livraison & Reprise</p>
          </div>

          <div>
            <Image src={Groupe_504} alt="img1" />
            <p className="s3_t">Nettoyage</p>
          </div>
          <div>
            <Image src={Groupe_25} alt="img1" />
            <p className="s3_t"> Commande Illimitée</p>
          </div>
          <div>
            <Image src={Groupe_123} alt="img1" />
            <p className="s3_t">Transport & Enlèvement</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
