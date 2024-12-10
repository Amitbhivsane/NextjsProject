import React from "react";
import Content from "./component/contents/Content.js";
import Footer from "./component/footer/Footer.js";
import Header from "./component/header/Header.js";
import SectionOne from "./component/section1/SectionOne.js";
import SectionTwo from "./component/section2/SectionTwo.js";
import SectionThree from "./component/section3/SectionThree.js";
import SectionFour from "./component/section4/SectionFour.js";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Content />

      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>
      <SectionFour />
      <Footer />
    </div>
  );
}
