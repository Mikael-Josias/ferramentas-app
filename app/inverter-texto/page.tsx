"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function InvertText() {
  const [baseText, setBaseText] = useState("");
  const [resultText, setResultText] = useState("");

  function invertText() {
    setResultText([...baseText].reverse().join(""));
  }

  return (
    <section className="flex flex-col gap-6 px-5 py-10">
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
      <div className="flex flex-col md:flex-row gap-3">
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
        </div>
      </div>
    </section>
  );
}
