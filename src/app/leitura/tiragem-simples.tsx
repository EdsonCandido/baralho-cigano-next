"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { criarBaralho } from "@/lib/utils";
import { Carta } from "@/types/Carta";

const embaralhar = (baralho: Carta[]): Carta[] => {
  return [...baralho].sort(() => Math.random() - 0.5);
};

const selecionarCarta = (baralhoEmbaralhado: Carta[]): Carta | undefined => {
  return baralhoEmbaralhado[0];
};

export default function TiragemSimples() {
  const [carta, setCarta] = useState<Carta | undefined>(undefined);
  const [baralho, setBaralho] = useState<Carta[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const tipoTiragem = searchParams.get("tipo");

  useEffect(() => {
    if (tipoTiragem === "simples") {
      setBaralho(criarBaralho());
    }
  }, [tipoTiragem]);

  const handleTirarCarta = () => {
    if (baralho.length > 0 && !carta) {
      const baralhoEmbaralhado = embaralhar(baralho);
      const cartaSelecionada = selecionarCarta(baralhoEmbaralhado);
      setCarta(cartaSelecionada);
    }
  };

  const handleNovaTiragem = () => {
    setCarta(undefined);
    setBaralho(criarBaralho());
  };

  const handleVoltar = () => {
    router.push("/jogo/selecao-tiragem");
  };

  if (tipoTiragem !== "simples") {
    return <p className="text-center p-4">Esta página é para a Tiragem Simples.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-200 to-blue-400 p-6">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Tiragem Simples
        </h2>
        {!carta && (
          <Button onClick={handleTirarCarta} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
            Tirar uma Carta
          </Button>
        )}
        {carta && (
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{carta.nome}</h3>
            <img src={carta.imagem} alt={carta.nome} className="max-w-48 mb-4" />
            <p className="text-gray-700 text-center mb-4">{carta.significado}</p>
            <div className="flex gap-4">
              <Button onClick={handleNovaTiragem} variant="outline">
                Nova Tiragem
              </Button>
              <Button onClick={handleVoltar} variant="outline">
                Voltar
              </Button>
            </div>
          </div>
        )}
        {!baralho.length && tipoTiragem === "simples" && (
          <p className="text-gray-500">Preparando o baralho...</p>
        )}
      </div>
    </div>
  );
}