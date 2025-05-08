"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

// Defina a interface para uma carta (se ainda não estiver definida)
interface Carta {
  nome: string;
  imagem: string; // Caminho para a imagem da carta
  significado: string;
}

// Importe a função para criar o baralho (se já não estiver no mesmo arquivo)
const criarBaralho = (): Carta[] => {
  return [
    { nome: "O Cavaleiro", imagem: "/assets/cavaleiro.png", significado: "Movimento, notícias, progresso." },
    { nome: "O Trevo", imagem: "/assets/trevo.png", significado: "Pequenos desafios, sorte passageira." },
    { nome: "O Navio", imagem: "/assets/navio.png", significado: "Viagem, mudanças, oportunidades." },
    { nome: "A Casa", imagem: "/assets/casa.png", significado: "Lar, segurança, família." },
    { nome: "A Árvore", imagem: "/assets/arvore.png", significado: "Crescimento, saúde, vitalidade." },
    { nome: "As Nuvens", imagem: "/assets/nuvens.png", significado: "Confusão, incerteza, obscuridade." },
    { nome: "A Serpente", imagem: "/assets/serpente.png", significado: "Traição, inveja, astúcia." },
    { nome: "O Caixão", imagem: "/assets/caixao.png", significado: "Fim de ciclo, transformação, perda." },
    { nome: "O Buquê", imagem: "/assets/buque.png", significado: "Felicidade, alegria, presente." },
    { nome: "A Foice", imagem: "/assets/foice.png", significado: "Corte, separação, decisão." },
    // ... Adicione as outras 26 cartas aqui com seus nomes, caminhos de imagem e significados
  ];
};

const embaralhar = (baralho: Carta[]): Carta[] => {
  return [...baralho].sort(() => Math.random() - 0.5);
};

const selecionarTresCartas = (baralhoEmbaralhado: Carta[]): Carta[] => {
  return baralhoEmbaralhado.slice(0, 3);
};

export default function TiragemTresCartas() {
  const [cartas, setCartas] = useState<Carta[]>([]);
  const [baralho, setBaralho] = useState<Carta[]>([]);
  const [tirouCartas, setTirouCartas] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const tipoTiragem = searchParams.get("tipo");

  useEffect(() => {
    if (tipoTiragem === "tres_cartas") {
      setBaralho(criarBaralho());
    }
  }, [tipoTiragem]);

  const handleTirarCartas = () => {
    if (baralho.length >= 3 && !tirouCartas) {
      const baralhoEmbaralhado = embaralhar(baralho);
      const cartasSelecionadas = selecionarTresCartas(baralhoEmbaralhado);
      setCartas(cartasSelecionadas);
      setTirouCartas(true);
    }
  };

  const handleNovaTiragem = () => {
    setCartas([]);
    setTirouCartas(false);
    setBaralho(criarBaralho());
  };

  const handleVoltar = () => {
    router.push("/jogo/selecao-tiragem");
  };

  if (tipoTiragem !== "tres_cartas") {
    return <p className="text-center p-4">Esta página é para a Tiragem de 3 Cartas.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-200 to-blue-400 p-6">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Tiragem de 3 Cartas
        </h2>
        {!tirouCartas ? (
          <Button
            onClick={handleTirarCartas}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
            disabled={baralho.length < 3}
          >
            Tirar 3 Cartas
          </Button>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Passado</h3>
              {cartas.length > 0 && (
                <>
                  <img src={cartas?.[0]?.imagem} alt={cartas?.[0]?.nome} className="max-w-48 mb-2" />
                  <p className="text-gray-700 text-center mb-2">{cartas?.[0]?.nome}</p>
                  <p className="text-gray-600 text-sm text-center">{cartas?.[0]?.significado}</p>
                </>
              )}
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Presente</h3>
              {cartas.length > 1 && (
                <>
                  <img src={cartas?.[1]?.imagem} alt={cartas?.[1]?.nome} className="max-w-48 mb-2" />
                  <p className="text-gray-700 text-center mb-2">{cartas?.[1]?.nome}</p>
                  <p className="text-gray-600 text-sm text-center">{cartas?.[1]?.significado}</p>
                </>
              )}
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Futuro</h3>
              {cartas.length > 2 && (
                <>
                  <img src={cartas?.[2]?.imagem} alt={cartas?.[2]?.nome} className="max-w-48 mb-2" />
                  <p className="text-gray-700 text-center mb-2">{cartas?.[2]?.nome}</p>
                  <p className="text-gray-600 text-sm text-center">{cartas?.[2]?.significado}</p>
                </>
              )}
            </div>
          </div>
        )}
        <div className="flex gap-4">
          {tirouCartas && (
            <Button onClick={handleNovaTiragem} variant="outline">
              Nova Tiragem
            </Button>
          )}
          <Button onClick={handleVoltar} variant="outline">
            Voltar
          </Button>
        </div>
        {!baralho.length && tipoTiragem === "tres_cartas" && (
          <p className="text-gray-500">Preparando o baralho...</p>
        )}
      </div>
    </div>
  );
}