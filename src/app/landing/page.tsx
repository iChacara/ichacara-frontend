"use client";

import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-dvh h-full p-8 flex flex-col items-center gap-8">
      <div className="w-screen">
        <Image fill alt="Imagem bem-vindo" src="/farm.jpg" objectFit="cover" />
        <div className="w-full h-full fixed top-0 bg-gradient-to-t from-black to-black/40 flex flex-col justify-end items-center gap-4 pb-20 px-8">
          <h1 className="text-white text-3xl font-poppins font-bold">
            Bem-vindo!
          </h1>
          <h3 className="text-gray-200 text-xl font-normal text-center">
            O iChacara é a opção perfeita pra quem quer lazer e segurança
          </h3>
          <button className="bg-white px-8 py-6 font-bold w-full rounded-xl mt-8">
            Criar conta
          </button>
          <button className="text-white rounded-xl mt-8 hover:text-gray-300">
            Já tem conta? <strong>Entrar</strong>
          </button>
        </div>
      </div>
    </main>
  );
}
