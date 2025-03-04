import { ArrowDownZA } from "lucide-react";
import Link from "next/link";

const TOOLS_LINKS = [
  {
    type: "text",
    name: "Inverter Texto",
    link: "/inverter-texto",
  },
];

export default function Home() {
  return (
    <main className="px-5 md:px-10 py-20">
      <section className="w-full flex flex-col gap-6">
        <h4 className="text-xl text-black font-bold block">
          Ferramentas de Texto
        </h4>
        <div className="flex gap-3 justify-between">
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
        </div>
      </section>
    </main>
  );
}
