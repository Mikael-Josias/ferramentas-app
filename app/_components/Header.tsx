"use client";
import Image from "next/image";
import Logo from "../icon.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-5 md:px-10 py-1 shadow-sm border-b-4 border-b-blue-500">
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
      <nav className="gap-6 hidden md:flex">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-base text-gray-600 font-semibold py-1 px-2 hover:bg-blue-50 rounded-md transition-colors outline-none">
            Textos
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="inverter-texto" className="w-full h-full">
                Inverter Texto
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="maiuscula-minuscula" className="w-full h-full">
                Converter Maiúscula/Minúscula
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="encontrar-alterar" className="w-full h-full">
                Encontrar e Alterar Texto
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="text-base text-gray-600 font-semibold py-1 px-2 hover:bg-blue-50 rounded-md transition-colors outline-none">
            Números
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="regra-de-tres" className="w-full h-full">
                Regra de Três
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="bhaskara" className="w-full h-full">
                Fórmula de Bhaskara
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="porcentagem" className="w-full h-full">
                Porcentagens
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
          <DropdownMenu>
            <DropdownMenuTrigger className="text-base text-gray-600 font-semibold py-1 px-2 hover:bg-blue-50 rounded-md transition-colors outline-none text-start">
              Textos
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild onClick={() => setIsOpen(false)}>
                <Link href="inverter-texto" className="w-full h-full">
                  Inverter Texto
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild onClick={() => setIsOpen(false)}>
                <Link href="maiuscula-minuscula" className="w-full h-full">
                  Converter Maiúscula/Minúscula
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild onClick={() => setIsOpen(false)}>
                <Link href="encontrar-alterar" className="w-full h-full">
                  Encontrar e Alterar Texto
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-base text-gray-600 font-semibold py-1 px-2 hover:bg-blue-50 rounded-md transition-colors outline-none text-start">
              Números
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild onClick={() => setIsOpen(false)}>
                <Link href="regra-de-tres" className="w-full h-full">
                  Regra de Três
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild onClick={() => setIsOpen(false)}>
                <Link href="bhaskara" className="w-full h-full">
                  Fórmula de Bhaskara
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild onClick={() => setIsOpen(false)}>
                <Link href="porcentagem" className="w-full h-full">
                  Porcentagens
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
