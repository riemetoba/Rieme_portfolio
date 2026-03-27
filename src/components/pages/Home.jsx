import Banner from "../layouts/Banner";
import AboutUs from "../layouts/AboutMe";
import Service from "../layouts/Service";
import Skill from "../layouts/Skill";
import Work from "../layouts/Projects";
import Testimonial from "../layouts/Review";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Skill />
      <Service />
      <Work />
      <Testimonial />
    </>
  );
};

export default Home;
