import { Outlet } from "react-router-dom";
import NavSection from "../NavSection/NavSection";
import bg from "../../assets/white_bg.jpg";
import Body from "../Body/Body";
import Services from "./Services";
import Price from "../price/Price";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <NavSection />
        <Body />
      </div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Services></Services>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 100%",
          minHeight: "100vh",
        }}
      >
        <Price></Price>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
