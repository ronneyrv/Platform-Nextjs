import { Metadata } from "next";

interface Props {
    params: {id: string}
}

export const metadata: Metadata = {
    title: "Gerenciador de Tarefas",
  };

export default function PageProjectDetal({params}: Props) {
    return (
        <main>
            Detalhes do projeto {params.id}
        </main>
    );
}