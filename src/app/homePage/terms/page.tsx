export default function TermosPage() {
  return (
    <main className="pt-24 p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Termos de Uso e Serviço</h1>
      <p className="mb-4 text-sm text-gray-500">Última atualização: 10 de abril de 2025</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Uso do Site</h2>
        <p>
          Você tem permissão para navegar em nossa homepage e utilizar a funcionalidade de envio de
          ticket para entrar em contato conosco. O uso deve ser feito de forma legal, ética e respeitosa.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Envio de Mensagens (Tickets)</h2>
        <p>
          O site oferece um formulário de contato para que você possa enviar dúvidas, sugestões ou
          solicitações de suporte. As mensagens são recebidas por e-mail e respondidas pela nossa equipe,
          de acordo com a disponibilidade.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Conduta do Usuário</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Não enviar conteúdo ofensivo, falso ou ilegal;</li>
          <li>Não utilizar o formulário de ticket para fazer spam;</li>
          <li>Não tentar invadir, danificar ou manipular o funcionamento do site.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo presente no site (textos, imagens, logotipos, etc.) é protegido por direitos
          autorais. Não é permitida a cópia, reprodução ou redistribuição sem autorização prévia.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Limitação de Responsabilidade</h2>
        <p>
          Nosso site é oferecido “como está”. Não garantimos disponibilidade contínua ou ausência de
          erros. A empresa não se responsabiliza por danos causados por indisponibilidades temporárias,
          falhas de envio de mensagens ou mau uso da plataforma.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Alterações nos Termos</h2>
        <p>
          Reservamo-nos o direito de modificar estes Termos de Uso e Serviço a qualquer momento.
          A versão mais recente estará sempre disponível nesta página.
        </p>
      </section>
    </main>
  );
}
