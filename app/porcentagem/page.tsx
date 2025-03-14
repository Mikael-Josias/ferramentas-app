"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

export default function Porcentagem() {
  const [calc1Value, setCalc1Value] = useState(0);
  const [calc1Percentage, setCalc1Percentage] = useState(0);
  const [calc1Result, setCalc1Result] = useState(0);
  const [calc2Value, setCalc2Value] = useState(0);
  const [calc2Value2, setCalc2Value2] = useState(0);
  const [calc2Result, setCalc2Result] = useState(0);
  const [calc3Value, setCalc3Value] = useState(0);
  const [calc3Value2, setCalc3Value2] = useState(0);
  const [calc3Result, setCalc3Result] = useState("");
  const [calc4Value, setCalc4Value] = useState(0);
  const [calc4Percentage, setCalc4Percentage] = useState(0);
  const [calc4Result, setCalc4Result] = useState(0);
  const [calc5Value, setCalc5Value] = useState(0);
  const [calc5Percentage, setCalc5Percentage] = useState(0);
  const [calc5Result, setCalc5Result] = useState(0);

  function calculateOne() {
    if (calc1Percentage < 0 || calc1Percentage > 100) {
      toast.error("Erro: porcentagem deve estar entre 0 e 100.");
      return;
    }
    setCalc1Result((calc1Value * calc1Percentage) / 100);
  }

  function calculateTwo() {
    if (calc2Value2 === 0) {
      toast.error("Erro: segundo valor não pode ser 0.");
      return;
    }
    setCalc2Result((calc2Value * 100) / calc2Value2);
  }

  function calculateThree() {
    if (calc3Value === 0) {
      if (calc3Value2 === 0) {
        setCalc3Result("0%");
        return;
      }
      setCalc3Result("∞ %");
      return;
    }

    setCalc3Result(((calc3Value2 - calc3Value) * 100) / calc3Value + " %");
  }

  function calculateFour() {
    if (calc4Percentage < 0) {
      toast.error("Erro: porcentagem deve estar entre 0 e 100.");
      return;
    }

    const addition = calc4Value * (calc4Percentage / 100);
    setCalc4Result(calc4Value + addition);
  }

  function calculateFive() {
    if (calc5Percentage < 0) {
      toast.error("Erro: porcentagem deve estar entre 0 e 100.");
      return;
    }

    const addition = calc5Value * (calc5Percentage / 100);
    setCalc5Result(calc5Value - addition);
  }

  return (
    <main className="px-5 md:px-10 py-10 bg-gray-100">
      <section className="w-full flex flex-col gap-8 p-5 bg-white md:px-10 md:p-12">
        <div>
          <h1 className="text-xl text-black font-bold">Porcentagens</h1>
          <span className="text-sm text-gray-600">
            Insira dois valores e calcule a porcentagem clicando em{" "}
            <span className="font-bold py-1 px-2 bg-blue-50 rounded-sm">
              Calcular Valor
            </span>
            .
          </span>
        </div>
        <div className="flex flex-row flex-wrap gap-12">
          <div className="flex flex-col gap-3 p-4 rounded-sm bg-gray-100/50 w-80">
            <span className="text-base font-bold text-gray-700 mb-3">
              Calculadora 1
            </span>
            <Label className="flex flex-col items-start">
              Quanto é (%):
              <Input
                type="number"
                maxLength={9}
                value={calc1Percentage}
                onChange={(e) =>
                  setCalc1Percentage(Number.parseFloat(e.target.value))
                }
                className="bg-white"
              />
            </Label>
            <Label className="flex flex-col items-start">
              De:
              <Input
                type="number"
                maxLength={9}
                value={calc1Value}
                onChange={(e) =>
                  setCalc1Value(Number.parseFloat(e.target.value))
                }
                className="bg-white"
              />
            </Label>
            <Label className="flex flex-col items-start">
              Resultado:
              <Input
                type="number"
                maxLength={9}
                value={calc1Result}
                onChange={() => {}}
                className="bg-gray-100"
              />
            </Label>
            <Button
              onClick={() => calculateOne()}
              className="bg-blue-500 hover:bg-blue-600 font-bold w-full transition-colors cursor-pointer"
            >
              Calcular Valor
            </Button>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-sm bg-gray-100/50 w-80">
            <span className="text-base font-bold text-gray-700 mb-3">
              Calculadora 2
            </span>
            <Label className="flex flex-col items-start">
              O valor:
              <Input
                type="number"
                maxLength={9}
                value={calc2Value}
                onChange={(e) =>
                  setCalc2Value(Number.parseFloat(e.target.value))
                }
                className="bg-white"
              />
            </Label>
            <Label className="flex flex-col items-start">
              É qual porcentagem de:
              <Input
                type="number"
                maxLength={9}
                value={calc2Value2}
                onChange={(e) =>
                  setCalc2Value2(Number.parseFloat(e.target.value))
                }
                className="bg-white"
              />
            </Label>
            <Label className="flex flex-col items-start">
              Resultado (%):
              <Input
                type="number"
                maxLength={9}
                value={calc2Result}
                onChange={() => {}}
                className="bg-gray-100"
              />
            </Label>
            <Button
              onClick={() => calculateTwo()}
              className="bg-blue-500 hover:bg-blue-600 font-bold w-full transition-colors cursor-pointer"
            >
              Calcular Valor
            </Button>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-sm bg-gray-100/50 w-80">
            <span className="text-base font-bold text-gray-700 mb-3">
              Calculadora 3
            </span>
            <Label className="flex flex-col items-start">
              Eu tenho:
              <Input
                type="number"
                maxLength={9}
                value={calc3Value}
                onChange={(e) =>
                  setCalc3Value(Number.parseFloat(e.target.value))
                }
                className="bg-white"
              />
            </Label>
            <Label className="flex flex-col items-start">
              Que mudou para:
              <Input
                type="number"
                maxLength={9}
                value={calc3Value2}
                onChange={(e) =>
                  setCalc3Value2(Number.parseFloat(e.target.value))
                }
                className="bg-white"
              />
            </Label>
            <Label className="flex flex-col items-start">
              Variação Percentual:
              <Input
                type="text"
                maxLength={9}
                value={calc3Result}
                onChange={() => {}}
                className="bg-gray-100"
              />
            </Label>
            <Button
              onClick={() => calculateThree()}
              className="bg-blue-500 hover:bg-blue-600 font-bold w-full transition-colors cursor-pointer"
            >
              Calcular Valor
            </Button>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-sm bg-gray-100/50 w-80">
            <span className="text-base font-bold text-gray-700 mb-3">
              Calculadora 4
            </span>
            <Label className="flex flex-col items-start">
              Eu tenho:
              <Input
                type="number"
                maxLength={9}
                value={calc4Value}
                onChange={(e) =>
                  setCalc4Value(Number.parseFloat(e.target.value))
                }
                className="bg-white"
              />
            </Label>
            <Label className="flex flex-col items-start">
              E quero aumentar (%):
              <Input
                type="number"
                maxLength={9}
                value={calc4Percentage}
                onChange={(e) =>
                  setCalc4Percentage(Number.parseFloat(e.target.value))
                }
                className="bg-white"
              />
            </Label>
            <Label className="flex flex-col items-start">
              Resultado:
              <Input
                type="number"
                maxLength={9}
                value={calc4Result}
                onChange={() => {}}
                className="bg-gray-100"
              />
            </Label>
            <Button
              onClick={() => calculateFour()}
              className="bg-blue-500 hover:bg-blue-600 font-bold w-full transition-colors cursor-pointer"
            >
              Calcular Valor
            </Button>
          </div>
          <div className="flex flex-col gap-3 p-4 rounded-sm bg-gray-100/50 w-80">
            <span className="text-base font-bold text-gray-700 mb-3">
              Calculadora 5
            </span>
            <Label className="flex flex-col items-start">
              Eu tenho:
              <Input
                type="number"
                maxLength={9}
                value={calc5Value}
                onChange={(e) =>
                  setCalc5Value(Number.parseFloat(e.target.value))
                }
                className="bg-white"
              />
            </Label>
            <Label className="flex flex-col items-start">
              E quero diminuir (%):
              <Input
                type="number"
                maxLength={9}
                value={calc5Percentage}
                onChange={(e) =>
                  setCalc5Percentage(Number.parseFloat(e.target.value))
                }
                className="bg-white"
              />
            </Label>
            <Label className="flex flex-col items-start">
              Resultado:
              <Input
                type="number"
                maxLength={9}
                value={calc5Result}
                onChange={() => {}}
                className="bg-gray-100"
              />
            </Label>
            <Button
              onClick={() => calculateFive()}
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
