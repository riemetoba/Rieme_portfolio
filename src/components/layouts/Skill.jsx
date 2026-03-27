import Container from "../Container";

// *************
import { useEffect, useState } from "react";
import SkillBar from "../SkillBar";

const Skill = () => {
  // ***********
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [js, setJs] = useState(0);
  const [react, setReact] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setHtml(90);
      setCss(86);
      setJs(65);
      setReact(80);
    }, 400);
  }, []);
  // **************
  return (
    <div className="py-25">
      <Container>
        <h3 className="font-inter text-2xl lg:text-3xl px-5 lg:px-0 font-black relative">
          MY SKILLS{" "}
          <span className="absolute left-5 lg:left-0 -bottom-2 w-9 h-0.5 bg-org"></span>
        </h3>
        <p className="font-inter uppercase text-sm text-[#555A64] pt-5 mb-10 px-5 lg:px-0">
          A passionate front-end developer based in bangladesh
        </p>
        {/* shadCN  */}
        <SkillBar label="HTML" value={html} />
        <SkillBar label="CSS" value={css} />
        <SkillBar label="JAVASCRIPT" value={js} />
        <SkillBar label="REACT" value={react} />
        {/* shadCN  */}
      </Container>
    </div>
  );
};

export default Skill;
