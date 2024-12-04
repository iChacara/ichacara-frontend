import BookingForm from "@/components/BookingForm";
import { getUser } from "@/services/user";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iChacara - Agendamento de chácara",
  description: "Aluguel de chácaras",
};

export default async function SchedulePage({
  params,
}: {
  params: { id: string };
}) {
  const { id: userId } = (await getUser()) as { id: number };

  return (
    <main className="min-h-dvh h-full overflow-hidden">
      <BookingForm userId={userId} farmId={parseInt(params.id)} />
    </main>
  );
}
