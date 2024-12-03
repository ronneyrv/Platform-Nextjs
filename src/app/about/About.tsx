"use client";
import type { Metadata } from "next";
import Image from "next/image";

import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { LiaPhp } from "react-icons/lia";
import { TbBrandJavascript } from "react-icons/tb";
import { FaDocker } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

export const metadata: Metadata = {
  title: "About me",
};

export default function About() {
  return (
    <main className="flex-col gap-8 p-8">
      <section className="flex-col p-8">
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
            <h2 className="font-bold text-center text-5xl md:text-5x1 mb-2">
              Ronney Rocha
            </h2>
            <div className="flex gap-4 items-center justify-center">
              <h3 className="text-xl">Full Stack Developer</h3>
              <FaLaptopCode className="size-8" />
            </div>
          </div>
        </article>
      </section>
      <section>
        <p className="text-justify">
          Eu sou um desenvolvedor Full Stack em construção. Graduação em engenharia 
          de Produção e com alguns anos de experiência na área, venho solidificando minha
          transição de carreira para a área de tecnologia, através do curso de Análise e
          Desenvolvimento de Sistemas, que é a minha segunda graduação e está em
          andamento. Meu principal objetivo é aplicar minhas habilidades em gerenciamento
          e resolução de problemas com foco em eficiência e resultados para criar soluções
          que realmente impactem pessoas e negócios. Hoje, sinto-me ainda mais motivado a 
          explorar, aprender e inovar como desenvolvedor Full Stack.
        </p>
      </section>
      <section>
        <div className="mt-20">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            breakpoints={{
              540: {
                slidesPerView: 3,
              },
              800: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <FaReact className="size-20" />
                <span>React</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <RiNextjsFill className="size-20" />
                <span>Next.js</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <FaNode className="size-20" />
                <span>Node</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <BiLogoTypescript className="size-20" />
                <span>Typescript</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <SiTailwindcss className="size-20" />
                <span>Tailwind</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <FaBootstrap className="size-20" />
                <span>Bootstrap</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <LiaPhp className="size-20" />
                <span>php</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <TbBrandJavascript className="size-20" />
                <span>Javascript</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <SiMysql className="size-20" />
                <span>Mysql</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <FaDocker className="size-20" />
                <span>Docker</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <FaGitAlt className="size-20" />
                <span>Git</span>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center text-center">
                <FaGithubSquare className="size-20" />
                <span>GitHub</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </main>
  );
}
