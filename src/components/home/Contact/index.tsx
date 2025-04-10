"use client";

import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    emailjs.init("x1GnUG2U6_Q7dMwYe");
    const btn = document.getElementById("button") as HTMLInputElement | null;

    const form = document.getElementById("form");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (btn) btn.value = "Enviando...";

        const serviceID = "default_service";
        const templateID = "template_16t9y0l";

        emailjs.sendForm(serviceID, templateID, form as HTMLFormElement).then(
          () => {
            if (btn) btn.value = "Enviar Ticket";
            alert("Enviado com sucesso!");
            (form as HTMLFormElement).reset();
          },
          (err) => {
            if (btn) btn.value = "Enviar Ticket";
            alert("Erro ao enviar: " + JSON.stringify(err));
          }
        );
      });
    }
  }, []);

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                O que acha de falarmos?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Responderemos o mais rápido possível! Enquanto isso, siga-nos no Instagram:
                <a
                  href="https://www.instagram.com/zionmeedia/"
                  className="text-blue-500 hover:underline"
                >
                  @zionmeedia
                </a>
              </p>

              {/* Formulário com id="form" para o emailjs */}
              <form id="form" method="POST">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Digite seu Nome"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Seu Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Digite seu Email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Sua Mensagem
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Digite sua Mensagem"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <input
                      type="submit"
                      id="button"
                      value="Enviar Ticket"
                      className="cursor-pointer rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    />
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
