import Container from "../Container";

// *************
import { useEffect, useState } from "react";
import SkillBar from "../SkillBar";

const Skill = () => {
  // ***********
  const [css, setCss] = useState(0);
  const [js, setJs] = useState(0);
  const [react, setReact] = useState(0);
  const [api, setApi] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCss(85);
      setJs(60);
      setReact(80);
      setApi(70);
    }, 400);
  }, []);
  // **************
  return (
    <div className="py-25">
      <Container>
        <h3 className="font-inter text-2xl lg:text-3xl px-2 lg:px-0 font-black relative">
          MY SKILLS{" "}
          <span className="absolute left-2 lg:left-0 -bottom-2 w-9 h-0.5 bg-org"></span>
        </h3>
        <p className="font-inter uppercase text-sm text-[#555A64] pt-5 mb-10 px-2 lg:px-0">
          A passionate front-end developer based in bangladesh
        </p>
        {/* shadCN  */}
        <SkillBar label="TAILWIND CSS" value={css} />
        <SkillBar label="JAVASCRIPT (ES6+)" value={js} />
        <SkillBar label="REACT" value={react} />
        <SkillBar label="API INTEGRATION" value={api} />
        {/* shadCN  */}
      </Container>
    </div>
  );
};

export default Skill;
