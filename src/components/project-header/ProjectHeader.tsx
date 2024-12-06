"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  EffectCoverflow,
  EffectCube,
} from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";

export const ProjectHeader = () => {
  return (
    <>
      <div className="block w-full justify-center p-10 sm:hidden">
        <Swiper
          modules={[Autoplay, EffectCube]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={false}
          effect={"cube"}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          cubeEffect={{
            shadow: false,
            slideShadows: true,
            shadowOffset: 0,
            shadowScale: 0.94,
          }}
        >
          <SwiperSlide>
            <Image
              src="/images/gerenciador-tarefas/gerenciador-tarefa5.png"
              alt="Picture 1"
              width={300}
              height={400}
              className="block mx-auto "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gerenciador-tarefas/gerenciador-tarefa2.png"
              alt="Picture 2"
              width={300}
              height={400}
              className="block mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gerenciador-tarefas/gerenciador-tarefa3.png"
              alt="Picture 3"
              width={300}
              height={400}
              className="block mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gerenciador-tarefas/gerenciador-tarefa4.png"
              alt="Picture 4"
              width={300}
              height={400}
              className="block mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gerenciador-tarefas/gerenciador-tarefa.png"
              alt="Picture 5"
              width={400}
              height={400}
              className="block mx-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="hidden pt-20 sm:block">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          navigation={false}
          effect={"coverflow"}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 100,
            stretch: 50,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          className="flex justify-center"
        >
          <SwiperSlide>
            <Image
              src="/images/gerenciador-tarefas/gerenciador-tarefa5.png"
              alt="Picture 1"
              width={300}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gerenciador-tarefas/gerenciador-tarefa2.png"
              alt="Picture 2"
              width={300}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gerenciador-tarefas/gerenciador-tarefa3.png"
              alt="Picture 3"
              width={300}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gerenciador-tarefas/gerenciador-tarefa4.png"
              alt="Picture 4"
              width={300}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/gerenciador-tarefas/gerenciador-tarefa.png"
              alt="Picture 5"
              width={500}
              height={500}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col gap-2 p-8 pt-0">
        <h1 className="font-extrabold text-xl">Gerenciador de Tarefas</h1>
        <p className="text-justify overflow-x-auto">
          O Gerenciador de Tarefas é uma aplicação web desenvolvida para
          organizar e acompanhar suas tarefas de forma prática e eficiente.
          Criado com tecnologias modernas como React, Tailwind CSS, Raunts, e
          React Icons, o projeto foca em simplicidade e funcionalidade.
          Funcionalidades: Adicionar Tarefas Insira o título e uma breve
          descrição da tarefa, e clique no botão Adicionar para registrá-la.
          Marcar Tarefas como Realizadas Clique sobre a tarefa para marcá-la
          como concluída. Essa funcionalidade facilita o acompanhamento do
          progresso. Visualizar Detalhes Clique no botão Detalhes ao lado de
          qualquer tarefa para visualizar as informações completas. Excluir
          Tarefas Utilize o botão Lixeira, localizado ao lado de cada tarefa,
          para excluí-la rapidamente. Segurança das Informações Todas as tarefas
          são armazenadas no cache do navegador, permitindo acesso mesmo após
          fechar e reabrir a aplicação. Tecnologias utilizadas: React: Para a
          construção da interface do usuário. Tailwind CSS: Para estilização
          rápida e responsiva. Raunts: Para gerenciamento de estado. React
          Icons: Para ícones intuitivos e acessíveis. Deploy: O projeto foi
          hospedado utilizando Vercel, garantindo performance e facilidade de
          acesso. Acesse o app clicando no botão abaixo
        </p>

        <div>
          <button
            onClick={() =>
              window.open(
                "https://gerenciador-de-tarefas-liart.vercel.app",
                "_blank"
              )
            }
            className="py-2 px-4 bg-paper rounded-full"
          >
            Visualizar
          </button>
        </div>
      </div>
    </>
  );
};
