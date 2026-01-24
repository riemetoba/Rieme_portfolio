import Container from "../Container";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
// *************
import { useEffect, useState } from "react";

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
    }, 200);
  }, []);

  return (
    <div className="py-25">
      <Container>
        <h3 className="font-inter text-3xl font-black relative">
          MY SKILLS{" "}
          <span className="absolute left-0 -bottom-2 w-9 h-0.5 bg-org"></span>
        </h3>
        <p className="font-inter uppercase text-sm text-[#555A64] pt-5 mb-10">
          A passionate front-end developer based in bangladesh
        </p>
        {/* shadCN  */}
        <Field className="w-full max-w-sm">
          <FieldLabel htmlFor="progress-upload">
            <span className="font-inter text-[18px]">HTML</span>
            <span className="font-inter text-sm text-[#555A64] ml-66">90%</span>
          </FieldLabel>
          <Progress value={html} />
        </Field>
        <Field className="w-full max-w-sm">
          <FieldLabel htmlFor="progress-upload">
            <span className="font-inter text-[18px]">CSS</span>
            <span className="ml-67 font-inter text-sm text-[#555A64]">86%</span>
          </FieldLabel>
          <Progress value={css} />
        </Field>
        <Field className="w-full max-w-sm">
          <FieldLabel htmlFor="progress-upload">
            <span className="font-inter text-[18px]">JAVASRCIPT</span>
            <span className="ml-28 font-inter text-sm text-[#555A64]">65%</span>
          </FieldLabel>
          <Progress value={js} />
        </Field>
        <Field className="w-full max-w-sm">
          <FieldLabel htmlFor="progress-upload">
            <span className="font-inter text-[18px]">REACT</span>
            <span className="ml-54 font-inter text-sm text-[#555A64]">80%</span>
          </FieldLabel>
          <Progress value={react} />
        </Field>
        {/* shadCN  */}
      </Container>
    </div>
  );
};

export default Skill;
