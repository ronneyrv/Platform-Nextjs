import { Project } from "@/components/card/Project";

export const Section = () => {
  return (
    <section className="flex-col gap-4 px-4">
      <h2 className="font-bold text-xl">My Projects</h2>

      <ul className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <li>
          <Project
            href="/project/gerenciador-de-tarefas"
            title="Gerenciador de Tarefas"
            image="/images/gerenciador-tarefa.png"
            description="O Gerenciador de Tarefas é uma aplicação web desenvolvida para organizar
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
        https://gerenciador-de-tarefas-liart.vercel.app/"
          />
        </li>
      </ul>
    </section>
  );
};
