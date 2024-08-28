import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";
import { Bounce, ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "iChacara - Criar conta",
  description: "Aluguel de chácaras",
};

export default function RegisterPage() {
  return (
    <main className="h-dvh mt-24">
      <RegisterForm />
    </main>
  );
}
