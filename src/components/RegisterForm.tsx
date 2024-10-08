"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconRent from "@material-design-icons/svg/outlined/search.svg";
import IconAnnounce from "@material-design-icons/svg/outlined/emergency_share.svg";
import IconInvisible from "@material-design-icons/svg/filled/visibility.svg";
import IconVisible from "@material-design-icons/svg/filled/visibility_off.svg";
import { useState } from "react";
import { showToast } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [visiblePass, setVisiblePass] = useState(false);
  const [visibleConfirmPass, setVisibleConfirmPass] = useState(false);

  const [selectedType, setSelectedType] = useState("lessee");
  const router = useRouter();

  async function register(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
        type: formData.get("type"),
        terms: formData.get("terms") === "on",
      };

      const response = await fetch("/api/register", {
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

      router.push("/");
    } catch (error: any) {
      showToast(
        "error",
        <p>{error.message || "Ocorreu um erro ao tentar registrar!"}</p>
      );
    }
  }

  return (
    <section className="flex flex-col gap-8 w-[calc(100%-4rem)] max-w-screen-md mx-auto ]">
      <div className="flex flex-col gap-8 justify-center items-center">
        <figure>
          <Image
            src="/logo.svg"
            alt="Ichácara logo"
            width="111"
            height="64"
            priority={true}
          />
        </figure>

        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="font-poppins font-semibold text-[1.75rem]/[2.25rem] text-light-on-primary-container">
            Criar conta
          </span>
          <span className="font-inter font-normal text-base text-light-on-primary-container tracking-[.0313rem] text-center">
            Seja bem-vindo ao iChacara
          </span>
        </div>
      </div>

      <form onSubmit={register} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <label
            htmlFor="name"
            className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
          >
            Nome
            <input
              className="border-[0.0625rem] border-[#B6C9C8] h-10 p-2 rounded-lg font-normal text-sm"
              type="text"
              name="name"
              id="name"
              aria-label="Campo de nome"
              autoComplete="off"
            />
          </label>

          <label
            htmlFor="email"
            className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
          >
            E-mail
            <input
              className="border-[0.0625rem] border-[#B6C9C8] h-10 p-2 rounded-lg font-normal text-sm"
              type="text"
              name="email"
              id="email"
              aria-label="Campo de email"
              autoComplete="off"
            />
          </label>

          <label
            htmlFor="password"
            className="relative flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
          >
            Senha
            <input
              className="border-[0.0625rem] border-[#B6C9C8] h-10 p-2 rounded-lg font-normal text-sm"
              type={visiblePass ? "text" : "password"}
              name="password"
              id="password"
              aria-label="Campo de senha"
            />
            {visiblePass ? (
              <IconVisible
                className="absolute max-w-6 max-h-6 fill-[#91A1A1] bottom-2 right-2 cursor-pointer"
                width={24}
                height={24}
                onClick={() => setVisiblePass(false)}
              />
            ) : (
              <IconInvisible
                className="absolute max-w-6 max-h-6 fill-[#91A1A1] bottom-2 right-2 cursor-pointer"
                width={24}
                height={24}
                onClick={() => setVisiblePass(true)}
              />
            )}
          </label>

          <label
            htmlFor="confirmPassword"
            className="relative flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]"
          >
            Confirmar senha
            <input
              className="border-[0.0625rem] border-[#B6C9C8] h-10 p-2 rounded-lg font-normal text-sm"
              type={visibleConfirmPass ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              aria-label="Campo de confirmar senha"
            />
            {visibleConfirmPass ? (
              <IconVisible
                className="absolute max-w-6 max-h-6 fill-[#91A1A1] bottom-2 right-2 cursor-pointer"
                width={24}
                height={24}
                onClick={() => setVisibleConfirmPass(false)}
              />
            ) : (
              <IconInvisible
                className="absolute max-w-6 max-h-6 fill-[#91A1A1] bottom-2 right-2 cursor-pointer"
                width={24}
                height={24}
                onClick={() => setVisibleConfirmPass(true)}
              />
            )}
          </label>

          <span className="flex flex-col gap-2 font-poppins font-bold text-base text-[#3B4848] -tracking-[0.019rem]">
            Objetivo
            <div className="flex gap-2">
              <label
                htmlFor="lessee"
                className="cursor-pointer flex flex-1 justify-center items-center gap-1 py-2 bg-white border-[0.0625rem] border-[#3B484866] has-[:checked]:border-light-primary rounded-lg font-inter font-normal text-[0.75rem]/[1.25rem] text-[#3B484866] has-[:checked]:text-light-primary tracking-[0.0156rem] transition-all ease-in-out duration-300"
                tabIndex={0}
              >
                <IconRent
                  className="fill-current max-w-4 max-h-4"
                  width={16}
                  height={16}
                />
                Alugar
                <input
                  className="hidden"
                  type="radio"
                  name="type"
                  value="lessee"
                  id="lessee"
                  aria-label="Campo de quero alugar"
                  checked={selectedType === "lessee"}
                  onChange={() => setSelectedType("lessee")}
                />
              </label>

              <label
                htmlFor="lessor"
                className="cursor-pointer flex flex-1 justify-center items-center gap-1 py-2 bg-white border-[0.0625rem] border-[#3B484866] has-[:checked]:border-light-primary rounded-lg font-inter font-normal text-[0.75rem]/[1.25rem] text-[#3B484866] has-[:checked]:text-light-primary tracking-[0.0156rem] transition-all ease-in-out duration-300"
                tabIndex={0}
              >
                <IconAnnounce
                  className="fill-current max-w-4 max-h-4"
                  width={16}
                  height={16}
                />
                Anunciar
                <input
                  className="hidden"
                  type="radio"
                  name="type"
                  value="lessor"
                  id="lessor"
                  aria-label="Campo de quero anunciar"
                  checked={selectedType === "lessor"}
                  onChange={() => setSelectedType("lessor")}
                />
              </label>
            </div>
          </span>
        </div>

        <div className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <label htmlFor="terms" className="flex gap-3 items-center">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                aria-label="Campo de confirmar com termos e condições"
                className="appearance-none min-w-4 min-h-4 border-[0.0625rem] border-[#757575] rounded bg-white checked:bg-light-primary checked:border-light-primary transition-all ease-in-out duration-300"
              />

              <span className="font-inter font-medium text-[1rem]/[1.5rem] text-[#1E1E1E] tracking-[0.0094rem]">
                Concordo com os{" "}
                <Link
                  href="#"
                  aria-label="Termos e condições"
                  target="_blank"
                  className="text-[#3DD2CC]"
                >
                  termos e condições
                </Link>
              </span>
            </label>

            <button
              type="submit"
              aria-label="Criar conta"
              className="py-4 bg-light-primary rounded-lg font-inter font-bold text-[1.125rem]/[1.5rem] text-white -tracking-[0.0112rem]"
            >
              Criar conta
            </button>
          </div>

          <span className="font-inter font-normal text-[0.875rem]/[1rem] text-light-on-primary-container -tracking-[0.0088rem] text-center">
            Já é registrado?
            <Link href="/" aria-label="Entrar" className="font-bold ml-1">
              Entrar
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
}
