"use client";
import Image from "next/image";
import Logo from "../icon.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-5 md:px-10 py-5 shadow-sm">
      <div>
        <Link href="/" className="flex gap-3 items-center">
          <Image
            src={Logo}
            alt="chave de fenda e chave de boca cruzadas em um X"
            className="w-12 md:w-16 h-auto select-none pointer-events-none"
          />
          <span className="text-lg md:text-2xl text-gray-600 font-black leading-[18px] md:leading-[24px]">
            Ferramentas
            <br />
            App
          </span>
        </Link>
      </div>
      <nav className="gap-3 hidden md:flex">
        <Link
          href="inverter-texto"
          className="text-base text-gray-600 font-semibold py-1 px-2 hover:bg-blue-50 rounded-md transition-colors"
        >
          Inverter Texto
        </Link>
        <Link
          href="maiuscula-minuscula"
          className="text-base text-gray-600 font-semibold py-1 px-2 hover:bg-blue-50 rounded-md transition-colors"
        >
          Converter Maiúscula/Minúscula
        </Link>
      </nav>

      {/* MOBILE */}
      <Menu
        className="text-gray-600 cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`${isOpen ? "translate-x-[0%]" : "translate-x-[100%]"} fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-5 transition-transform duration-300`}
      >
        <button
          className="absolute top-4 right-4 p-2"
          onClick={() => setIsOpen(false)}
        >
          <X className="text-gray-600 cursor-pointer" />
        </button>
        <nav className="mt-10 space-y-4 flex flex-col">
          <Link
            href="/inverter-texto"
            className="text-base text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Inverter Texto
          </Link>
          <Link
            href="/maiuscula-minuscula"
            className="text-base text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Converter Maiúscula/Minúscula
          </Link>
        </nav>
      </div>
    </header>
  );
}
