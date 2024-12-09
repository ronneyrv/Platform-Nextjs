"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import emailjs from "@emailjs/browser";

export default function sendMeEmail() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7afq53m",
        "template_56e4x29",
        e.target as HTMLFormElement,
        "KhSmjuJ4VbXTB9DLG"
      )
      .then(
        (result) => {
          console.log("Email enviado com sucesso:", result.text);
          alert("Email enviado com sucesso!");
          router.push("/");
        },
        (error) => {
          console.log("Erro ao enviar email:", error.text);
          alert("Erro na API emailjs, favor me contatar pelo e-mail 'ronneyrv@gmail.com'");
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex-col pt-14 sm:pt-24 h-max">
      <form className="max-w-lg mx-auto p-2" onSubmit={sendEmail}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Seu nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Seu email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Digite seu email@dominio.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sua mensagem
          </label>
          <textarea
          id="message"
          name="message"
          value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-teal-600 hover:bg-teal-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
