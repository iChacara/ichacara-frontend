import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "iChacara - Login",
  description: "Aluguel de chácaras",
};

export default function LoginPage() {
  return (
    <main className="h-dvh mt-24">
      <LoginForm />
    </main>
  );
}
