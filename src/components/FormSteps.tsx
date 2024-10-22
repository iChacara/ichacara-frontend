"use client";

interface FormStepsProps {
  currentStep: number;
  steps: string[];
}

export default function FormSteps({ currentStep, steps }: FormStepsProps) {
  return (
    <nav aria-label="Progress">
      <ul role="list" className="flex gap-2 justify-center items-center">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`border-[0.0625rem] w-3 h-3 rounded-full 
              ${
                currentStep > index
                  ? "bg-light-primary border-light-primary"
                  : ""
              }
              ${
                currentStep === index
                  ? "bg-light-primary border-light-primary"
                  : ""
              }
              ${currentStep < index ? "border-[#6F7978]" : ""}
            `}
          ></li>
        ))}
      </ul>
    </nav>
  );
}
