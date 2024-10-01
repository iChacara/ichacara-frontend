"use client";

import useStepsContext from "@/hooks/useStepsContext";

export default function FormSteps() {
  const { currentStep, steps } = useStepsContext();

  return (
    <nav aria-label="Progress">
      <ul role="list" className="flex gap-2 justify-center items-center">
        {steps.map((step, index) => (
          <li
            key={step.key}
            className={`border-[0.0625rem] w-3 h-3 rounded-full 
              ${currentStep > index ? "completed " : ""}
              ${currentStep === index ? "active " : ""}
              ${
                currentStep < index
                  ? "border-[#6F7978] upcoming"
                  : "bg-light-primary border-light-primary"
              }`}
          ></li>
        ))}
      </ul>
    </nav>
  );
}
