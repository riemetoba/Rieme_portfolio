import "./App.css";
import RootLayout from "./components/layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutMe from "./components/layouts/AboutMe";
import Error from "./components/pages/Error";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
