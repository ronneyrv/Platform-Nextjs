import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About me",
};

export default function About() {
  return (
    <main className="flex-col gap-8 p-8">
      <section className="flex-col p-4">
        <article className="flex gap-2 flex-col p-2 m-3 rounded sm:flex-row items-center">
          <Image
            src={"/images/avatar.jpg"}
            alt={"avatar"}
            width={400}
            height={400}
            draggable={false}
            className="rounded-full p-2 w-full sm:w-60 md:w-72"
          />
          <div className="flex-col text-center w-full">
            <h2 className="font-bold text-center text-5xl md:text-5x1 mb-2">Ronney Rocha</h2>
            <h3 className="text-xl">Full Stack Developer</h3>
          </div>
        </article>
        </section>
        <section>
        <p className="text-justify">
          Eu sou um desenvolvedor Full Stack em construção, a Análise e Desenvolvimento de Sistemas é a minha segunda graduação que está em andamento na UniFB de Fortaleza, com
          graduação e alguns anos de experiência com a engenharia de Produção, venho solidificando minha transição de carreira para a área de tecnologia. Meu principal objetivo é 
          aplicar minhas habilidades em  gerenciamento e resolução de problemas com foco em eficiência e resultados, para criar soluções que realmente impactem pessoas e negócios. 
          Hoje, sinto-me ainda mais motivado a explorar, aprender e inovar como desenvolvedor Full Stack.
        </p>
        </section>
        <section>
            Skill
        </section>
    </main>
  );
}
