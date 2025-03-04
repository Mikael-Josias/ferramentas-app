"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import copyToClipboard from "@/utils/copyToClipboard";
import { Copy } from "lucide-react";
import { useState } from "react";

const conversionMethods = [
  "Tudo Maiúsculo",
  "Tudo Minúsculo",
  "Primeira Letra",
];

export default function MaiusculaMinuscula() {
  const [baseText, setBaseText] = useState("");
  const [resultText, setResultText] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<
    (typeof conversionMethods)[number]
  >(conversionMethods[0]);

  function convertText() {
    if (selectedMethod === "Tudo Maiúsculo")
      setResultText(baseText.toUpperCase());
    if (selectedMethod === "Tudo Minúsculo")
      setResultText(baseText.toLowerCase());
    if (selectedMethod === "Primeira Letra")
      setResultText(
        baseText.charAt(0).toUpperCase() + baseText.slice(1).toLowerCase(),
      );
  }

  return (
    <main className="px-2 md:px-10 py-10 md:py-20 bg-gray-50">
      <section className="flex flex-col gap-6 md:px-10 p-6 md:p-12 bg-white rounded-xl md:rounded-4xl">
        <div>
          <h1 className="text-xl text-black font-bold">
            Converter para Maiúsculo ou Minúsculo
          </h1>
          <span className="text-sm text-gray-600">
            Insira o seu texto e clique no botão{" "}
            <span className="font-bold py-1 px-2 bg-blue-50 rounded-sm">
              Converter Texto
            </span>
            .
          </span>
        </div>
        <div className="flex items-start md:items-center gap-3 flex-col md:flex-row">
          <span>Método de Conversão:</span>
          <RadioGroup
            defaultValue={conversionMethods[0]}
            className="flex flex-col md:flex-row"
          >
            {conversionMethods.map((m, i) => (
              <Label key={i} htmlFor={m}>
                <RadioGroupItem
                  value={m}
                  id={m}
                  onClick={() => setSelectedMethod(m)}
                />
                {m}
              </Label>
            ))}
          </RadioGroup>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10">
          <div className="w-full">
            <span className="text-base text-gray-600">Texto base:</span>
            <Textarea
              className="text-base text-black h-80 resize-none outline-blue-50"
              value={baseText}
              onChange={(e) => setBaseText(e.target.value)}
            />
            <Button
              className="bg-blue-500 hover:bg-blue-600 font-bold w-full transition-colors cursor-pointer mt-3"
              onClick={() => convertText()}
            >
              Converter Texto
            </Button>
          </div>
          <div className="w-full">
            <span className="text-base text-gray-600">Resultado:</span>
            <Textarea
              className="text-base text-black h-80 resize-none outline-blue-50"
              value={resultText}
              onChange={() => {}}
            />
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
