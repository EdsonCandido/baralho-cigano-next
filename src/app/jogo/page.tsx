"use client";
import { useSearchParams } from "next/navigation";

export default function JogoPage() {
  const searchParams = useSearchParams();
  const nome = searchParams.get("nome");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-200 to-indigo-400 p-6">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Olá, {nome}!
        </h2>
        <p className="text-gray-700">
          A página do jogo será implementada aqui.
        </p>
      </div>
    </div>
  );
}