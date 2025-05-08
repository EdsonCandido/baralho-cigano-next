"use client";
import { useSearchParams } from "next/navigation";
import TiragemSimples from "./tiragem-simples";
import TiragemTresCartas from "./tiragem-tres-cartas";

export default function PaginaLeitura() {
  const searchParams = useSearchParams();
  const tipoTiragem = searchParams.get("tipo");

  return (
    <div>
      {tipoTiragem === "simples" && <TiragemSimples />}
      {tipoTiragem === "tres_cartas" && <TiragemTresCartas />}
      {!["simples", "tres_cartas"].includes(String(tipoTiragem)) && (
        <p className="text-center p-4">Tipo de tiragem inválido.</p>
      )}
    </div>
  );
}