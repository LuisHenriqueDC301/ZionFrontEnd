import Breadcrumb from "@/components/home/Common/Breadcrumb";
import Contact from "@/components/home/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de Contato",
  description: "Página de Contato",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Página de Contato"
        description="Entre em contato conosco para dúvidas, parcerias ou suporte. Estamos prontos para ajudar!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
