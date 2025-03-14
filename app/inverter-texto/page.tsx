"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import copyToClipboard from "@/utils/copyToClipboard";
import { Copy } from "lucide-react";
import { useState } from "react";

const inversionMethods = ["Tudo", "Palavras"];

export default function InvertText() {
  const [baseText, setBaseText] = useState("");
  const [resultText, setResultText] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<
    (typeof inversionMethods)[number]
  >(inversionMethods[0]);

  function invertText() {
    if (selectedMethod === "Tudo")
      setResultText([...baseText].reverse().join(""));
    if (selectedMethod === "Palavras")
      setResultText(
        baseText
          .split(/(\s+)/)
          .map((word) =>
            /\S/.test(word) ? splitGraphemes(word).reverse().join("") : word,
          )
          .join(""),
      );
  }

  function splitGraphemes(word: string): string[] {
    return [...word];
  }

  return (
    <main className="px-5 md:px-10 py-10 bg-gray-100">
      <section className="w-full flex flex-col gap-8 p-5 bg-white md:px-10 md:p-12">
        <div>
          <h1 className="text-xl text-black font-bold">Inverter Texto</h1>
          <span className="text-sm text-gray-600">
            Insira o seu texto e clique no botão{" "}
            <span className="font-bold py-1 px-2 bg-blue-50 rounded-sm">
              Inverter Texto
            </span>
            .
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span>Método de Inversão:</span>
          <RadioGroup defaultValue={inversionMethods[0]} className="flex">
            {inversionMethods.map((m, i) => (
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
              onClick={() => invertText()}
            >
              Inverter Texto
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
