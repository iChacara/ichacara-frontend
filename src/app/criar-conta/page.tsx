import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iChacara - Criar conta",
  description: "Aluguel de chácaras",
};

export default function RegisterPage() {
  return (
    <main className="min-h-dvh h-full mt-24">
      <RegisterForm />
    </main>
  );
}
