import { Carta } from "@/types/Carta";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const criarBaralho = (): Carta[] => {
  return [
    { nome: "O Cavaleiro", imagem: "/assets/cavaleiro.png", significado: "Movimento, notícias, progresso, energia, chegada, partida." },
    { nome: "O Trevo", imagem: "/assets/trevo.png", significado: "Pequenos desafios, sorte passageira, esperança, oportunidade." },
    { nome: "O Navio", imagem: "/assets/navio.png", significado: "Viagem, mudanças, oportunidades, movimento, comércio." },
    { nome: "A Casa", imagem: "/assets/casa.png", significado: "Lar, segurança, família, conforto, estabilidade." },
    { nome: "A Árvore", imagem: "/assets/arvore.png", significado: "Crescimento, saúde, vitalidade, raízes, desenvolvimento." },
    { nome: "As Nuvens", imagem: "/assets/nuvens.png", significado: "Confusão, incerteza, obscuridade, dúvidas, instabilidade." },
    { nome: "A Serpente", imagem: "/assets/serpente.png", significado: "Traição, inveja, astúcia, tentação, sabedoria oculta." },
    { nome: "O Caixão", imagem: "/assets/caixao.png", significado: "Fim de ciclo, transformação, perda, renovação, luto." },
    { nome: "O Buquê", imagem: "/assets/buque.png", significado: "Felicidade, alegria, presente, harmonia, beleza." },
    { nome: "A Foice", imagem: "/assets/foice.png", significado: "Corte, separação, decisão súbita, perigo, finalização." },
    { nome: "O Chicote", imagem: "/assets/chicote.png", significado: "Conflito, discussão, repetição, energia dispersa, agressividade." },
    { nome: "Os Pássaros", imagem: "/assets/passaros.png", significado: "Comunicação, notícias, conversas, ansiedade, movimento." },
    { nome: "A Criança", imagem: "/assets/crianca.png", significado: "Novos começos, inocência, potencial, dependência, imaturidade." },
    { nome: "A Raposa", imagem: "/assets/raposa.png", significado: "Astúcia, inteligência, cautela, engano, esperteza." },
    { nome: "O Urso", imagem: "/assets/urso.png", significado: "Força, poder, proteção, possessividade, nutrição." },
    { nome: "As Estrelas", imagem: "/assets/estrelas.png", significado: "Esperança, inspiração, clareza, destino, orientação." },
    { nome: "A Cegonha", imagem: "/assets/cegonha.png", significado: "Mudanças (geralmente positivas), gravidez, novos lares, viagens." },
    { nome: "O Cão", imagem: "/assets/cao.png", significado: "Lealdade, amizade, fidelidade, proteção, companheirismo." },
    { nome: "A Torre", imagem: "/assets/torre.png", significado: "Isolamento, estrutura, autoridade, ambição, solidez." },
    { nome: "O Jardim", imagem: "/assets/jardim.png", significado: "Público, eventos sociais, comunidade, alegria, encontros." },
    { nome: "A Montanha", imagem: "/assets/montanha.png", significado: "Obstáculos, desafios, atrasos, ambição, perseverança." },
    { nome: "O Caminho", imagem: "/assets/caminho.png", significado: "Escolhas, decisões, direção, oportunidades, encruzilhada." },
    { nome: "O Rato", imagem: "/assets/rato.png", significado: "Perda, roubo, deterioração, ansiedade, problemas pequenos." },
    { nome: "O Coração", imagem: "/assets/coracao.png", significado: "Amor, romance, afeição, alegria, paixão." },
    { nome: "O Anel", imagem: "/assets/anel.png", significado: "Compromisso, parceria, casamento, ciclos, acordos." },
    { nome: "Os Livros", imagem: "/assets/livros.png", significado: "Estudo, conhecimento, segredos, aprendizado, informação." },
    { nome: "A Carta", imagem: "/assets/carta.png", significado: "Notícias, mensagens, comunicação (escrita), informações." },
    { nome: "O Cigano", imagem: "/assets/cigano.png", significado: "Homem, pessoa masculina importante, iniciativa, energia masculina." },
    { nome: "A Cigana", imagem: "/assets/cigana.png", significado: "Mulher, pessoa feminina importante, intuição, energia feminina." },
    { nome: "Os Lírios", imagem: "/assets/lilios.png", significado: "Paz, pureza, harmonia, beleza interior, maturidade." },
    { nome: "O Sol", imagem: "/assets/sol.png", significado: "Alegria, sucesso, vitalidade, energia, clareza." },
    { nome: "A Lua", imagem: "/assets/lua.png", significado: "Intuição, emoções, sonhos, mistério, ilusão." },
    { nome: "A Chave", imagem: "/assets/chave.png", significado: "Soluções, oportunidades, abertura, acesso, importância." },
    { nome: "O Peixe", imagem: "/assets/peixe.png", significado: "Prosperidade, abundância, finanças, fertilidade, emoções." },
    { nome: "A Âncora", imagem: "/assets/ancora.png", significado: "Estabilidade, segurança, firmeza, resistência, fixação." },
    { nome: "A Cruz", imagem: "/assets/cruz.png", significado: "Fardo, provação, sacrifício, destino, fé." },
  ];
};