import Content from "./component/contents/Content";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Navigation from "./component/header/Header";
import SectionOne from "./component/section1/SectionOne";
import SectionTwo from "./component/section2/SectionTwo";
import SectionThree from "./component/section3/SectionThree";
import SectionFour from "./component/section4/SectionFour";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="top">
      <main>
        <Header />
        <Content />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <Footer />
      </main>
    </div>
  );
}
