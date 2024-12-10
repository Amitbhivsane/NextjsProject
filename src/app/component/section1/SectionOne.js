import React from "react";
import sectionone from "./sectionone.css";
import Image from "next/image";
import Card_Product from "../img/Card_Product.png";
const SectionOne = () => {
  const products = [
    {
      id: 1,
      image: { Card_Product },
      name: "Title",
      price: "0,35€/Pièce · RÉF : VABGN5",
      amu: "0€",
      pic: "20 pieces",
    },
    {
      id: 2,
      image: { Card_Product },
      name: "Title",
      price: "0,35€/Pièce · RÉF : VABGN5",
      amu: "0€",
      pic: "20 pieces",
    },
    {
      id: 3,
      image: { Card_Product },
      name: "Title",
      price: "0,35€/Pièce · RÉF : VABGN5",
      amu: "0€",
      pic: "20 pieces",
    },
    {
      id: 4,
      image: { Card_Product },
      name: "Title",
      price: "0,35€/Pièce · RÉF : VABGN5",
      amu: "0€",
      pic: "20 pieces",
    },
  ];
  return (
    <>
      <section className="section1">
        <h1>Articles similaires</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                textAlign: "center",
                // width: "200px",
              }}
            >
              <Image
                src={Card_Product}
                alt={product}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "330px",
                  height: "425px",
                  objectFit: "cover",
                  marginBottom: "10px",
                }}
              />
            </div>
          ))}
        </div>
      </section>
      <h1></h1>
    </>
  );
};

export default SectionOne;