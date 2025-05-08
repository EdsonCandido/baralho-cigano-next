"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SelecaoTiragem() {
  const router = useRouter();
  const [tipoTiragem, setTipoTiragem] = useState<string | null>(null);

  const handleSelecionarTiragem = (tipo: string) => {
    setTipoTiragem(tipo);
  };

  const handleComeçarLeitura = () => {
    if (tipoTiragem) {
      router.push(`/leitura?tipo=${tipoTiragem}`);
    } else {
      alert("Por favor, selecione um tipo de tiragem.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-indigo-400 p-6">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
          Qual o tipo de tiragem?
        </h2>
        <div className="grid grid-cols-1 gap-4 mb-6">
          <Button
            variant={tipoTiragem === "simples" ? "default" : "outline"}
            className="w-full"
            onClick={() => handleSelecionarTiragem("simples")}
          >
            Tiragem simples (1 carta — para uma resposta objetiva)
          </Button>
          <Button
            variant={tipoTiragem === "tres_cartas" ? "default" : "outline"}
            className="w-full"
            onClick={() => handleSelecionarTiragem("tres_cartas")}
          >
            Tiragem de 3 cartas (passado, presente, futuro)
          </Button>
          <Button
            variant="outline"
            className="w-full disabled"
            onClick={() => handleSelecionarTiragem("cinco_cartas")}
          >
            Tiragem de 5 cartas (um pouco mais detalhado) <span className="text-gray-500">(Em breve)</span>
          </Button>
          <Button
            variant="outline"
            className="w-full disabled"
            onClick={() => handleSelecionarTiragem("cruz")}
          >
            Tiragem da Cruz (mais profunda e complexa) <span className="text-gray-500">(Em breve)</span>
          </Button>
        </div>
        <Button
          className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleComeçarLeitura}
          disabled={!tipoTiragem}
        >
          Começar Leitura
        </Button>
      </div>
    </div>
  );
}