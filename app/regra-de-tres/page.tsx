"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export default function RegraDeTres() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [numberC, setNumberC] = useState(0);
  const [result, setResult] = useState(0);

  function ruleOfThree() {
    try {
      if (numberA === 0) {
        toast.error("Erro: Primeiro valor não pode ser zero.");
        return;
      }
      setResult((numberB * numberC) / numberA);
    } catch {
      toast.error("Erro: Valores inválidos.");
    }
  }

  return (
    <main className="px-5 md:px-10 py-10 bg-gray-100">
      <section className="w-full flex flex-col gap-8 p-5 bg-white md:px-10 md:p-12">
        <div>
          <h1 className="text-xl text-black font-bold">Regra de Três</h1>
          <span className="text-sm text-gray-600">
            Insira três valores e calcule o quarto valor clicando em{" "}
            <span className="font-bold py-1 px-2 bg-blue-50 rounded-sm">
              Calcular Valor
            </span>
            .
          </span>
        </div>
        <div className="flex flex-row flex-wrap items-end gap-3">
          <div className="flex flex-row items-end gap-3">
            <div className="flex flex-col gap-6">
              <Label className="flex flex-col items-start">
                Se o valor:
                <Input
                  type="number"
                  maxLength={9}
                  value={numberA}
                  onChange={(e) =>
                    setNumberA(Number.parseFloat(e.target.value))
                  }
                />
              </Label>
              <Label className="flex flex-col items-start">
                Então o valor:
                <Input
                  type="number"
                  maxLength={9}
                  value={numberC}
                  onChange={(e) =>
                    setNumberC(Number.parseFloat(e.target.value))
                  }
                />
              </Label>
            </div>
            <div className="flex flex-col gap-6">
              <Label className="flex flex-col items-start">
                Equivale ao valor:
                <Input
                  type="number"
                  maxLength={9}
                  value={numberB}
                  onChange={(e) =>
                    setNumberB(Number.parseFloat(e.target.value))
                  }
                />
              </Label>
              <Label className="flex flex-col items-start">
                Equivale ao valor:
                <Input
                  type="number"
                  maxLength={9}
                  value={result}
                  onChange={() => {}}
                  className="bg-gray-100"
                />
              </Label>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Button
              onClick={() => ruleOfThree()}
              className="bg-blue-500 hover:bg-blue-600 font-bold w-full transition-colors cursor-pointer"
            >
              Calcular Valor
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
