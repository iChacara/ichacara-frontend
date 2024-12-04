import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import { farmList } from "@/services/farm";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "iChacara - Home",
  description: "Aluguel de chácaras",
};

export default async function HomePage() {
  const { data } = await farmList();

  return (
    <main className="min-h-dvh h-full mt-24">
      <div className="flex flex-col gap-8">
        <ShowcaseCarousel farms={data} />

        <ShowcaseGrid farms={data} />
      </div>
    </main>
  );
}
