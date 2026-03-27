import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/layouts/AboutMe";
import Error from "./components/pages/Error";
import Skill from "./components/layouts/Skill";
import Service from "./components/layouts/Service";
import Projects from "./components/layouts/Projects";
import Review from "./components/layouts/Review";
import Contact from "./components/layouts/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/service" element={<Service />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonial" element={<Review/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
