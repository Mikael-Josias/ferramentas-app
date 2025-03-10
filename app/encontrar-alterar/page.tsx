"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import copyToClipboard from "@/utils/copyToClipboard";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function EncontrarAlterar() {
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [baseText, setBaseText] = useState("");
  const [resultText, setResultText] = useState("");

  function replaceInText() {
    const regex = new RegExp(`(${findText})`);
    const highlightedText = baseText.replace(regex, replaceText);
    setResultText(highlightedText);
  }

  return (
    <main className="px-5 md:px-10 py-10 bg-gray-100">
      <section className="w-full flex flex-col gap-8 p-5 bg-white md:px-10 md:p-12">
        <div>
          <h1 className="text-xl text-black font-bold">
            Encontrar e Alterar Texto
          </h1>
          <span className="text-sm text-gray-600">
            Insira o texto que deseja procurar, digite a palavra que quer
            encontrar e clique no botão{" "}
            <span className="font-bold py-1 px-2 bg-blue-50 rounded-sm">
              Alterar Texto
            </span>
            .
          </span>
        </div>
        <div className="flex flex-row gap-3 lg:gap-12 flex-wrap md:flex-nowrap">
          <div className="flex flex-row items-center gap-3 w-full">
            <span>Econtrar:</span>
            <Input
              type="text"
              placeholder="Palavra"
              maxLength={30}
              value={findText}
              onChange={(e) => {
                setFindText(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-row items-center gap-3 w-full">
            <span>Alterar:</span>
            <Input
              type="text"
              placeholder="Palavra"
              maxLength={30}
              value={replaceText}
              onChange={(e) => {
                setReplaceText(e.target.value);
              }}
            />
            <Button
              className="bg-blue-500 hover:bg-blue-600 font-boldtransition-colors cursor-pointer"
              onClick={() => {
                replaceInText();
              }}
            >
              Alterar Texto
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10">
          <div className="w-full">
            <span className="text-base text-gray-600">Texto base:</span>
            <Textarea
              className="text-base text-black h-80 resize-none outline-blue-50"
              value={baseText}
              onChange={(e) => setBaseText(e.target.value)}
            />
          </div>
          <div className="w-full">
            <span className="text-base text-gray-600">Resultado:</span>
            <div className="border-1 border-gray-200 rounded-sm p-3 h-80 md:h-full">
              {resultText}
            </div>
            <Button
              className="text-white bg-gray-500 hover:bg-gray-600 font-bold w-full transition-colors cursor-pointer mt-3"
              onClick={() => copyToClipboard(resultText)}
            >
              Copiar Resultado
              <Copy />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
