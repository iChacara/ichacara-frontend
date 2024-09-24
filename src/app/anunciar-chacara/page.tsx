import AnnouncementForm from "@/components/AnnouncementForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iChacara - Anunciar chácaras",
  description: "Anúncio de chácaras",
};

export default function AnnouncementPage() {
  return (
    <main className="h-dvh mt-8">
      <AnnouncementForm />
    </main>
  );
}
