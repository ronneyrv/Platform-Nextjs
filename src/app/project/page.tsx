import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
};

export default function PageProjects() {
  return (
    <Link href={'/project/qualquer'}>
    <article className="flex gap-2 flex-col p-2 m-3 rounded sm:hover:bg-primary">
      <Image
        src="/images/gerenciador-tarefa.png"
        alt="App lista de tarefas"
        width={400}
        height={400}
        draggable={false}
        className="aspect-video rounded"
      />
      <h4 className="font-extrabold text-lg">
        Gerenciador de Tarefas
        </h4>
      <p className="line-clamp-4">
        O Gerenciador de Tarefas é uma aplicação web desenvolvida para organizar
        e acompanhar suas tarefas de forma prática e eficiente. Criado com
        tecnologias modernas como React, Tailwind CSS, Raunts, e React Icons, o
        projeto foca em simplicidade e funcionalidade. Funcionalidades:
        Adicionar Tarefas Insira o título e uma breve descrição da tarefa, e
        clique no botão Adicionar para registrá-la. Marcar Tarefas como
        Realizadas Clique sobre a tarefa para marcá-la como concluída. Essa
        funcionalidade facilita o acompanhamento do progresso. Visualizar
        Detalhes Clique no botão Detalhes ao lado de qualquer tarefa para
        visualizar as informações completas. Excluir Tarefas Utilize o botão
        Lixeira, localizado ao lado de cada tarefa, para excluí-la
        rapidamente. Segurança das Informações Todas as tarefas são armazenadas
        no cache do navegador, permitindo acesso mesmo após fechar e reabrir a
        aplicação. Tecnologias utilizadas: React: Para a construção da interface
        do usuário. Tailwind CSS: Para estilização rápida e responsiva. Raunts:
        Para gerenciamento de estado. React Icons: Para ícones intuitivos e
        acessíveis. Deploy: O projeto foi hospedado utilizando Vercel,
        garantindo performance e facilidade de acesso. Acesse agora:
        https://gerenciador-de-tarefas-liart.vercel.app/
      </p>
    </article>
    </Link>
  );
};