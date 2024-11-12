import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iChacara - Home",
  description: "Aluguel de chácaras",
};

export default function HomePage() {
  return (
    <main className="min-h-dvh h-full mt-24">
      <div className="flex flex-col gap-8">
        <ShowcaseCarousel />

        <ShowcaseGrid />
      </div>
    </main>
  );
}
