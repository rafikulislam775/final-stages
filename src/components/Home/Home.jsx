import { Outlet } from "react-router-dom";
import NavSection from "../NavSection/NavSection";
import bg from "../../assets/white_bg.jpg";
import Body from "../Body/Body";
import Services from "./Services";
import Price from "../price/Price";
import ScrollToTop from "react-scroll-to-top";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import Contact from "../contact/Contact";
import X from "../contact/X";

const Home = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        component={
          <p className="text-4xl text-red-500 ">
            <RiArrowUpDoubleFill />
          </p>
        }
      />
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
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Contact></Contact>
      </div>
      <div>
        <X></X>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
