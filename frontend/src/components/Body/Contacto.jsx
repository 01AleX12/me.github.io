import gmail from "../../assets/gmail.svg";

function Contacto() {
  return (
    <section
      id="contacto"
      className="flex flex-col items-center justify-center pb-8"
    >
      <h1 className="text-3xl uppercase font-semibold text-white mb-8">
        Contacto
      </h1>
      <div className="w-full max-w-2xl px-6 items-center flex flex-col gap-6 ">
        <p className="text-sm text-white leading-relaxed text-justify">
          ¿Tienes una idea, un proyecto o simplemente quieres hablar de
          desarrollo web? Estoy abierto a nuevas oportunidades y colaboraciones.
        </p>
        <a
          href="mailto:aag.devv@gmail.com"
          className="flex gap-2 w-fit text-sm px-2 py-2 bg-red-900 text-white rounded-md transition"
        >
          <img src={gmail} alt="Logo de Gmail" className="w-5" />
          Enviar email
        </a>
      </div>
    </section>
  );
}

export default Contacto;
