"use client";

import Switch from "@/components/Switch";
import IconArrowForward from "@material-design-icons/svg/outlined/arrow_forward.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PerfilPage() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  const data = {
    nome: "Jorge da silva",
    profilePicUrl: "https://placehold.co/100x100.png",
    type: "Locador",
  };
  return (
    <main className="min-h-dvh h-full mb-24 p-8 flex flex-col items-center gap-8">
      <h1 className="text-3xl text-gray-900 font-bold">Meu perfil</h1>
      <div className="flex justify-between items-center w-full gap-6 pb-8 border-gray-100 border-b-2">
        <div className="flex justify-center items-center w-fit gap-4">
          <Image
            src={data.profilePicUrl}
            alt={"Foto de perfil de " + data.nome}
            width={60}
            height={60}
            className="rounded-full"
          ></Image>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-gray-800">{data.nome}</h2>
            <p className="text-gray-700">{data.type}</p>
          </div>
        </div>
        <IconArrowForward className="fill-gray-800" width={32} height={32} />
      </div>
      <div className="flex w-full flex-col gap-4 pb-8 border-gray-100 border-b-2">
        <h3 className="text-2xl font-bold text-gray-800">Configurações</h3>
        <ul className="w-full">
          <li className="flex justify-between items-center w-full transition-all p-4 hover:bg-gray-100 rounded-xl">
            <label className="text-lg">Notificações</label>
            <Switch handleToggle={handleToggle} isOn={isOn} />
          </li>
        </ul>
      </div>
      <div className="flex w-full flex-col gap-4 pb-8 border-gray-100 border-b-2">
        <h3 className="text-2xl font-bold text-gray-800">Informações</h3>
        <ul className="w-full flex flex-col">
          <li className="w-full">
            <Link
              href="/termos"
              className="flex justify-between items-center transition-all p-4 hover:bg-gray-100 rounded-xl"
            >
              <span className="text-lg">Termos de privacidade</span>
              <IconArrowForward
                className="fill-gray-800"
                width={32}
                height={32}
              />
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/termos"
              className="flex justify-between items-center transition-all p-4 hover:bg-gray-100 rounded-xl"
            >
              <span className="text-lg">Termos de privacidade</span>
              <IconArrowForward
                className="fill-gray-800"
                width={32}
                height={32}
              />
            </Link>
          </li>
        </ul>
      </div>
      <button className="border-[3px] border-red-400 text-red-400 w-full p-4 rounded-xl text-lg font-bold hover:border-red-600 hover:text-red-600 transition-all">
        Sair
      </button>
    </main>
  );
}
