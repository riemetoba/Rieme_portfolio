import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";

const SkillBar = ({ label, value }) => {
  return (
      <Field className="w-full max-w-sm px-5 lg:px-0">
      <FieldLabel>
        <span className="font-inter text-lg">{label}</span>
      </FieldLabel>

      <div className="relative mt-3">
        <span
          className="absolute -top-6 text-sm font-inter text-org transition-all duration-700"
          style={{
            left: `${value}%`,
            transform: "translateX(-50%)",
          }}
        >
          {value}%
        </span>

        <Progress value={value} />
      </div>
    </Field>
  )
}

export default SkillBar