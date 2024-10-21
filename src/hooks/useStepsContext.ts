import { StepsContext } from "@/contexts/stepsContext";
import { useContext } from "react";

export default function useStepsContext() {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error(
      "UseStepsContext deve ser usado dentro de um StepsContextProvider"
    );
  }
  return context;
}
