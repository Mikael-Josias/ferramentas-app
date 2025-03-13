import Image from "next/image";
import Link from "next/link";
import TextToolsSVG from "./_assets/text-tools.svg";
import InvertTextIcon from "./_assets/invert-text.svg";
import UpperLower from "./_assets/upper-to-lower.svg";
import FindReplace from "./_assets/find-replace.svg";
import NumericToolsSVG from "./_assets/number-tools.svg";
import PercentageSVG from "./_assets/percentage.svg";
import BhaskaraSVG from "./_assets/bhaskara.svg";
import RuleOfThreeSVG from "./_assets/rule-of-three.svg";

export default function Home() {
  return (
    <main className="flex flex-col gap-9 px-5 md:px-10 py-10 bg-gray-100">
      <section className="w-full flex flex-col gap-3 p-5 bg-white">
        <h4 className="flex items-center gap-2 text-2xl text-gray-700 font-bold pb-4 border-b-1 border-b-gray-100">
          <Image
            src={TextToolsSVG}
            alt="white letters in a blue background"
            className="h-9 w-auto pointer-events-none select-none"
          />
          Ferramentas de Texto
        </h4>
        <div className="flex flex-col flex-wrap px-4">
          <Link
            href="/inverter-texto"
            className="flex gap-3 p-1 items-start rounded-sm hover:bg-gray-50 transition-colors"
          >
            <Image
              src={InvertTextIcon}
              width={40}
              height={40}
              alt="inverter texto icone"
            />
            <div className="flex flex-col gap-0">
              <span className="text-base font-bold text-gray-800">
                Inverter Texto
              </span>
              <span className="text-sm font-normal text-gray-600">
                inverte as letras de palavras e textos.
              </span>
            </div>
          </Link>
          <Link
            href="/maiuscula-minuscula"
            className="flex gap-3 p-1 items-start rounded-sm hover:bg-gray-50 transition-colors"
          >
            <Image
              src={UpperLower}
              width={40}
              height={40}
              alt="maiuscula e minuscula icone"
            />
            <div className="flex flex-col gap-0">
              <span className="text-base font-bold text-gray-800">
                Maiúsculas e Minúsculas
              </span>
              <span className="text-sm font-normal text-gray-600">
                converta para maiúsculo, minúsculo ou a primeira letra
              </span>
            </div>
          </Link>
          <Link
            href="/encontrar-alterar"
            className="flex gap-3 p-1 items-start rounded-sm hover:bg-gray-50 transition-colors"
          >
            <Image
              src={FindReplace}
              width={40}
              height={40}
              alt="encontrar e alterar icone"
            />
            <div className="flex flex-col gap-0">
              <span className="text-base font-bold text-gray-800">
                Encontrar e Alterar Texto
              </span>
              <span className="text-sm font-normal text-gray-600">
                encontre e altere palavras em um texto
              </span>
            </div>
          </Link>
        </div>
      </section>
      <section className="w-full flex flex-col gap-3 p-5 bg-white">
        <h4 className="flex items-center gap-2 text-2xl text-gray-700 font-bold pb-4 border-b-1 border-b-gray-100">
          <Image
            src={NumericToolsSVG}
            alt="white letters in a blue background"
            className="h-9 w-auto pointer-events-none select-none"
          />
          Ferramentas de Números
        </h4>
        <div className="flex flex-col flex-wrap px-4">
          <Link
            href="/regra-de-tres"
            className="flex gap-3 p-1 items-start rounded-sm hover:bg-gray-50 transition-colors"
          >
            <Image
              src={RuleOfThreeSVG}
              width={40}
              height={40}
              alt="inverter texto icone"
            />
            <div className="flex flex-col gap-0">
              <span className="text-base font-bold text-gray-800">
                Regra de Três
              </span>
              <span className="text-sm font-normal text-gray-600">
                Calcula valores usando a regra de três.
              </span>
            </div>
          </Link>
          <Link
            href="/maiuscula-minuscula"
            className="flex gap-3 p-1 items-start rounded-sm hover:bg-gray-50 transition-colors"
          >
            <Image
              src={BhaskaraSVG}
              width={40}
              height={40}
              alt="maiuscula e minuscula icone"
            />
            <div className="flex flex-col gap-0">
              <span className="text-base font-bold text-gray-800">
                Fórmula de Bhaskara
              </span>
              <span className="text-sm font-normal text-gray-600">
                Calcula valores usando a fórmula de bhaskara.
              </span>
            </div>
          </Link>
          <Link
            href="/encontrar-alterar"
            className="flex gap-3 p-1 items-start rounded-sm hover:bg-gray-50 transition-colors"
          >
            <Image
              src={PercentageSVG}
              width={40}
              height={40}
              alt="encontrar e alterar icone"
            />
            <div className="flex flex-col gap-0">
              <span className="text-base font-bold text-gray-800">
                Porcentagens
              </span>
              <span className="text-sm font-normal text-gray-600">
                Descubra a porcentagem de qualquer valor.
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
