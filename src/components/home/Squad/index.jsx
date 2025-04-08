"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const teamMembers = [
  {
    name: "Willian Henrique",
    roles: [
      "Diretor da Zion",
      "Especialista em Marketing",
      "Estrategista de Marketing",
      "Growth Marketing",
    ],
    image: "/images/team/Will.jpg",
  },
  {
    name: "Sthefanny Vitória",
    roles: ["Social Media", "Organização de Projetos", "Administração"],
    image: "/images/team/meuAmor.jpeg",
  },
  {
    name: "Maria Eduarda",
    roles: ["Áudio Visual", "VídeoMaker", "StoryMaker"],
    image: "/images/team/Madu.jpg",
  },
  {
    name: "Nadson Lucas",
    roles: ["Audiovisual", "VideoMaker", "Estrategista de Conteúdo"],
    image: "/images/team/oManinho.jpg",
  },
];

const Team = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12">
        Quem Somos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 w-full max-w-sm mx-auto"
            >
              <div className="relative mx-auto mb-4 aspect-square w-55 overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={member.image}
                  alt="Team Member"
                  fill
                  className="object-cover object-top"
                />
              </div>


              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {member.name}
              </h3>
              <ul className="text-left text-sm text-gray-700 dark:text-gray-400 space-y-1">
                {member.roles.map((role, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600" /> {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
