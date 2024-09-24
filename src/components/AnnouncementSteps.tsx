"use client";

import { useState } from "react";

const steps = [
  { key: "address", name: "Endereço", fields: [] },
  { key: "accommodation", name: "Acomodação", fields: [] },
  { key: "availableServices", name: "Serviços disponíveis", fields: [] },
  { key: "images", name: "Imagens", fields: [] },
  { key: "property", name: "Chácara", fields: [] },
  { key: "precification", name: "Precificação", fields: [] },
];

export default function AnnouncementSteps() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const next = async () => {
    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <nav aria-label="Progress">
      <ul role="list" className="flex gap-2 justify-center items-center">
        {steps.map((step, index) => (
          <li
            key={step.key}
            className={`border-[0.0625rem] w-3 h-3 rounded-full 
              ${currentStep > index ? "completed " : ""}
              ${currentStep === index ? "active " : ""}
              ${currentStep < index ? "border-[#6F7978] upcoming" : "bg-light-primary border-light-primary"}`}
          ></li>
        ))}
      </ul>
    </nav>
  );
}
