import React from "react";
import styles from "./content.css";
import Image from "next/image";
// import location from "../img/location.png";
import location from "../../../../public/location.png";
// import table1 from "../img/table1.png";
import table1 from "../../../../public/table1.png";

const Content = () => {
  return (
    <>
      <div>
        <div className="hello">
          <span style={{ fontWeight: "bold" }}>Hello </span>
          <span style={{ color: "gray" }}>Art de la table</span>
        </div>

        <section className="content">
          <div className="left">
            <div
              style={{
                display: "block",
              }}
            >
              <p>
                <Image src={table1} alt="table1" />
              </p>
              <p>
                <Image src={table1} alt="table1" />
              </p>
              <p>
                <Image src={table1} alt="table1" />
              </p>
              <p>
                <Image src={table1} alt="table1" />
              </p>
            </div>
            <Image src={location} alt="Location" />
          </div>
          <div className="right">
            <div className="right_content">
              Cheese – appareil à raclette 1/2 roue
            </div>
            <div className="right_content2">
              {" "}
              <span>39,50€</span>
              <span style={{ color: "#9C9C9C" }}>/pièce</span>
            </div>
            <div>
              <p>--------------------------</p>
              <div>
                <span>20cm </span> <span>50cm</span>
              </div>
              <p>--------------------------</p>
            </div>
            <div>
              <p>
                Location appareil à raclette - Raclette traditionnelle 1/2 roue
              </p>
              <p>
                Réglable en hauteur Appareil à raclette professionnel Boîtier de
              </p>
              <p>chauffe horizontal réglable en hauteur   </p>

              <p>220V</p>
              <p>900W</p>
              <div className="content_bottom">
                <div className="left_c">
                  <span>-</span>
                  <input type="text" placeholder="1" />
                  <span>+</span>
                </div>

                <div className="right_c"> Ajouter au panier</div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div className="content_bootom" style={{ display: "flex" }}>
            <div>
              <p
                style={{
                  width: "511px",
                  height: "25px",
                  top: "927px",
                  left: "36px",
                  fontFamily: " Cabinet Grotesk",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "25px",
                  marginBottom: "10px",
                }}
              >
                Description produit
              </p>
              <p
                style={{
                  width: "711px",
                  height: "108px",
                  top: "962px",
                  left: "36px",
                }}
              >
                Festi vous propose à la location un/une "Jewel – grand
                couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce
                (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire
                ou du personnel, ce produit a fait l'objet d'une sélection
                rigoureuse par notre équipe. Il est en location chez nous sous
                la référence "VAJGC". Nous sommes à votre disposition pour que
                les événements de nos clients, même en last-minute, soient
                toujours une réussite. Vous pourrez trouver tout une série
                d'autre produit à louer de ce type dans la catégorie "Art de la
                Table".
              </p>
            </div>
            <div>
              <p
                style={{
                  width: "758px",
                  height: "62px",
                  marginLeft: "60px",
                  background: "#FBF9F899",
                  border: "1px solid gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",

                  textAlign: "left",
                }}
              >
                Livraisons
              </p>

              <p
                style={{
                  width: "758px",
                  height: "62px",
                  marginLeft: "60px",
                  background: "#FBF9F899",
                  border: "1px solid gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  textAlign: "left",
                }}
              >
                Questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
