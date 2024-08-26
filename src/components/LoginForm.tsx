"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
  }

  return (
    <section className="flex flex-col gap-8 w-[calc(100%-4rem)] max-w-screen-md mx-auto ]">
      <div className="flex flex-col gap-8 justify-center items-center">
        <figure>
          <Image
            src="/fullLogo.svg"
            alt="Ichácara logo"
            width="198"
            height="138"
          />
        </figure>

        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="font-poppins font-semibold text-[1.75rem]/[2.25rem] text-light-on-primary-container">
            Login
          </span>
          <span className="font-poppins font-normal text-base text-light-on-primary-container tracking-[.0313rem] text-center">
            Seja bem-vindo de volta ao iChacara
          </span>
        </div>
      </div>

      <form onSubmit={login} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]">
            E-mail
            <input
              className="border-[0.0625rem] border-[#B6C9C8] h-10 p-2 rounded-lg"
              type="email"
              name="email"
            />
          </label>

          <label className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]">
            Senha
            <input
              className="border-[0.0625rem] border-[#B6C9C8] h-10 p-2 rounded-lg"
              type="password"
              name="password"
            />
          </label>
        </div>

        <div className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <Link
              href="#"
              aria-label="Esqueci minha senha"
              className="font-poppins font-bold text-[0.875rem]/[1rem] text-light-primary -tracking-[0.0088rem] text-right"
            >
              Esqueci a senha
            </Link>
            <button
              type="submit"
              aria-label="Entrar"
              className="py-4 bg-light-primary rounded-lg font-inter font-bold text-[1.125rem]/[1.5rem] text-white -tracking-[0.0112rem]"
            >
              Entrar
            </button>
          </div>

          <span className="font-inter font-normal text-[0.875rem]/[1rem] text-light-on-primary-container -tracking-[0.0088rem] text-center">
            Ainda não é registrado?
            <Link href="#" aria-label="Criar conta" className="font-bold ml-1">
              Criar conta
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
}
