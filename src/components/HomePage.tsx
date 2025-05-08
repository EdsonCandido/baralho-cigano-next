import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [nome, setNome] = useState("");
  const router = useRouter();

  const handleComeçarJogo = () => {
    if (nome.trim()) {
      router.push(`/jogo?nome=${nome}`);
    } else {
      alert("Por favor, digite seu nome.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 to-orange-300 p-6">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Bem-vindo ao Baralho Cigano!
        </h1>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">
            Seu Nome:
          </label>
          <Input
            type="text"
            id="nome"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleComeçarJogo}>
          Começar a Jogar
        </Button>
        <p className="text-center text-gray-500 text-xs mt-4">
          Que as cartas revelem seu caminho!
        </p>
      </div>
    </div>
  );
}