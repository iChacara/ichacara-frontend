import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iChacara - Home",
  description: "Aluguel de chácaras",
};

export default function HomePage() {
  return (
    <main className="min-h-dvh h-full mt-24">
      <p>Home</p>
    </main>
  );
}
