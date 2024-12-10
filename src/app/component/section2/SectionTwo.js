import React from "react";
import sectionTwo from "./sectionTwo.css";
import Image from "next/image";
import Card_Product from "../img/Card_Product.png";
const SectionTwo = () => {
  const products = [
    {
      id: 1,
      image: { Card_Product },
    },
    {
      id: 2,
      image: { Card_Product },
    },
    {
      id: 3,
      image: { Card_Product },
    },
    {
      id: 4,
      image: { Card_Product },
    },
  ];
  return (
    <>
      <h3 style={{ color: "#393939" }}>
        Ces produits pourraient vous intéresser
      </h3>

      <section className="section1">
        <div></div>
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
    </>
  );
};

export default SectionTwo;
