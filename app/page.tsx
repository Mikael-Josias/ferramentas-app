import { ALargeSmall, ArrowDownZA } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-5 md:px-10 py-20 bg-gray-50">
      <section className="w-full flex flex-col gap-6 p-12 bg-white rounded-4xl">
        <h4 className="text-xl text-black font-bold block">
          Ferramentas de Texto
        </h4>
        <div className="flex gap-3 justify-start">
          <Link
            href="/inverter-texto"
            className="flex flex-col items-center rounded-lg py-8 px-4 text-base text-gray-600 font-semibold w-full sm:w-[49%] md:w-[24%] bg-blue-50 hover:bg-blue-100 transition-colors text-center"
          >
            <ArrowDownZA size={64} className="mb-4" />
            Inversor de Texto
            <span className="text-sm font-normal">
              inverte as letras de palavras e textos.
            </span>
          </Link>
          <Link
            href="/maiuscula-minuscula"
            className="flex flex-col items-center rounded-lg py-8 px-4 text-base text-gray-600 font-semibold w-full sm:w-[49%] md:w-[24%] bg-blue-50 hover:bg-blue-100 transition-colors text-center"
          >
            <ALargeSmall size={64} className="mb-4" />
            Maiúsculas e Minúsculas
            <span className="text-sm font-normal">
              converta textos para maiúsculo, minúsculo ou somente a primeira
              letra.
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
