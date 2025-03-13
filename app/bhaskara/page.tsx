"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export default function Bhaskara() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [numberC, setNumberC] = useState(0);
  const [result, setResult] = useState({ x1: 0, x2: 0 });

  function calculateBhaskara() {
    const delta = numberB * numberB - 4 * numberA * numberC;

    if (numberA === 0) {
      toast.error("Erro: não é uma fórmula quadrática.");
      return;
    }
    if (delta < 0) {
      toast.error("Erro: não possui raiz quadrada.");
      return;
    }

    const x1 = (-numberB + Math.sqrt(delta)) / (2 * numberA);
    const x2 = (-numberB - Math.sqrt(delta)) / (2 * numberA);

    setResult({ x1, x2 });
  }

  return (
    <main className="px-5 md:px-10 py-10 bg-gray-100">
      <section className="w-full flex flex-col gap-8 p-5 bg-white md:px-10 md:p-12">
        <div>
          <h1 className="text-xl text-black font-bold">Fórmula de Bhaskara</h1>
          <span className="text-sm text-gray-600">
            Insira três valores e calcule o resultado clicando em{" "}
            <span className="font-bold py-1 px-2 bg-blue-50 rounded-sm">
              Calcular Valor
            </span>
            .
          </span>
        </div>
        <div className="flex flex-row flex-wrap gap-3">
          <div className="flex flex-row items-start gap-6">
            <div className="flex flex-col gap-6">
              <Label className="flex flex-col items-start">
                Número A:
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
                Número B:
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
                Número C:
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
            <div className="flex flex-col gap-6 justify-between h-full">
              <div className="flex flex-col gap-6">
                <Label className="flex flex-col items-start">
                  Resultado X1:
                  <Input
                    type="number"
                    maxLength={9}
                    value={result.x1}
                    onChange={() => {}}
                    className="bg-gray-100"
                  />
                </Label>
                <Label className="flex flex-col items-start">
                  Resultado X2:
                  <Input
                    type="number"
                    maxLength={9}
                    value={result.x2}
                    onChange={() => {}}
                    className="bg-gray-100"
                  />
                </Label>
              </div>
              <Button
                onClick={() => calculateBhaskara()}
                className="bg-blue-500 hover:bg-blue-600 font-bold w-full transition-colors cursor-pointer"
              >
                Calcular Valor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
