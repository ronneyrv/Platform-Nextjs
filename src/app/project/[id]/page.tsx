import { ProjectHeader } from "@/components/project-header/ProjectHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gerenciador de Tarefas",
  };

export default function PageProjectDetal() {
    return (
        <main className="mt-8 flex justify-center">
            <div className="w-full min-[880px]:max-w-[880px]">
                <ProjectHeader />
            </div>
        </main>
    );
}