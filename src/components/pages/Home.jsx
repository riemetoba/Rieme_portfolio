import Banner from "../layouts/Banner";
import AboutUs from "../layouts/AboutMe";
import Service from "../layouts/Service";
import Skill from "../layouts/Skill";
import Work from "../layouts/Work";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <Skill/>
      <Service/>
      <Work/>
    </>
  );
};

export default Home;
