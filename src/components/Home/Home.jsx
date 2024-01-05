import NavSection from "../NavSection/NavSection";
import bg from "../../assets/white_bg.jpg";
import Body from "../Body/Body";
import Services from "./Services";
import Price from "../price/Price";
import ScrollToTop from "react-scroll-to-top";
import { RiArrowUpDoubleFill } from "react-icons/ri";
import Contact from "../contact/Contact";
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Set up event listener for scroll
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    return () => {
      // Clean up event listener
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <ScrollToTop
        smooth
        component={
          <p className="text-4xl text-red-500 " onClick={scrollToTop}>
            <RiArrowUpDoubleFill />
          </p>
        }
      />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed", // Add this line for parallax effect
          minHeight: "100vh",
          alignItems: "center", // Center content vertically
        }}
      >
        <NavSection />
        <Body />
      </div>
      <Link
        activeClass="active"
        to="services"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset based on your layout
        duration={500}
      >
        Services
      </Link>
      <Link
        activeClass="active"
        to="price"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset based on your layout
        duration={500}
      >
        Price
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset based on your layout
        duration={500}
      >
        Contact
      </Link>

      <Element name="services">
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            minHeight: "100vh",
          }}
        >
          <Services></Services>
        </div>
      </Element>

      <Element name="price">
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
      </Element>

      <Element name="contact">
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed", // Add this line for parallax effect
            minHeight: "100vh",
            display: "flex",
            alignItems: "center", // Center content vertically
          }}
        >
          <Contact></Contact>
        </div>
      </Element>
    </div>
  );
};

export default Home;
