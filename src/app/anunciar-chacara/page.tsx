import AnnouncementForm from "@/components/AnnouncementForm";
import StepsContextProvider from "@/contexts/stepsContext";
import { ANNOUNCEMENT_STEPS } from "@/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iChacara - Anunciar chácaras",
  description: "Anúncio de chácaras",
};

export default function AnnouncementPage() {
  return (
    <StepsContextProvider steps={ANNOUNCEMENT_STEPS}>
      <main className="h-dvh pt-8">
        <AnnouncementForm />
      </main>
    </StepsContextProvider>
  );
}
