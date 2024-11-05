"use client";

import { showToast } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import IconInvisible from "@material-design-icons/svg/filled/visibility.svg";
import IconVisible from "@material-design-icons/svg/filled/visibility_off.svg";
import { useForm } from "react-hook-form";
import { LoginFormData } from "@/lib/interfaces";

export default function LoginForm() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>();

  async function login(data: LoginFormData) {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const { errors, message } = await response.json();

      if (!response.ok) {
        if (errors && Array.isArray(errors)) {
          showToast(
            "error",
            <>
              <p className="mb-2">Por favor, corrija os seguintes erros:</p>
              {errors.map((error: string, index: number) => (
                <p key={index} className="mb-1">
                  - {error}
                </p>
              ))}
            </>
          );
        } else if (message) {
          showToast("error", <p>{message}</p>);
        } else {
          showToast("error", <p>Ocorreu um erro desconhecido!</p>);
        }
        return;
      }

      showToast("success", <p>{message}</p>);
      router.push("/home");
    } catch (error: any) {
      showToast(
        "error",
        <p>{error.message || "Ocorreu um erro ao tentar logar!"}</p>
      );
    }
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
            priority
          />
        </figure>

        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="font-poppins font-semibold text-[1.75rem]/[2.25rem] text-light-on-primary-container">
            Login
          </span>
          <span className="font-inter font-normal text-base text-light-on-primary-container tracking-[.0313rem] text-center">
            Seja bem-vindo de volta ao iChacara
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit(login)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <label
            htmlFor="email"
            className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
          >
            E-mail
            <input
              className="border-[0.0625rem] border-[#B6C9C8] h-10 p-2 rounded-lg font-normal text-sm"
              type="text"
              id="email"
              aria-label="Campo de email"
              autoComplete="off"
              {...register("email")}
            />
          </label>

          <label
            htmlFor="password"
            className="relative flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
          >
            Senha
            <input
              className="border-[0.0625rem] border-[#B6C9C8] h-10 p-2 rounded-lg font-normal text-sm"
              type={visible ? "text" : "password"}
              id="password"
              aria-label="Campo de senha"
              {...register("password")}
            />
            {visible ? (
              <IconVisible
                className="absolute max-w-6 max-h-6 fill-[#91A1A1] bottom-2 right-2 cursor-pointer"
                width={24}
                height={24}
                onClick={() => setVisible(false)}
              />
            ) : (
              <IconInvisible
                className="absolute max-w-6 max-h-6 fill-[#91A1A1] bottom-2 right-2 cursor-pointer"
                width={24}
                height={24}
                onClick={() => setVisible(true)}
              />
            )}
          </label>
        </div>

        <div className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <Link
              href="#"
              aria-label="Esqueci minha senha"
              className="w-fit self-end font-poppins font-bold text-[0.875rem]/[1rem] text-light-primary -tracking-[0.0088rem] text-right"
            >
              Esqueci a senha
            </Link>
            <button
              type="submit"
              aria-label="Entrar"
              className={`py-4 rounded-lg font-inter font-bold text-[1.125rem]/[1.5rem] text-white -tracking-[0.0112rem] transition-all ease-in-out duration-300 ${
                isSubmitting ? "bg-[#3B484866]" : "bg-light-primary"
              }`}
              disabled={isSubmitting}
            >
              Entrar
            </button>
          </div>

          <span className="font-inter font-normal text-[0.875rem]/[1rem] text-light-on-primary-container -tracking-[0.0088rem] text-center">
            Ainda não é registrado?
            <Link
              href="/criar-conta"
              aria-label="Criar conta"
              className="font-bold ml-1"
            >
              Criar conta
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
}
