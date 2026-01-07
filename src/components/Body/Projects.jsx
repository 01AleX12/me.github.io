import { useRef, useEffect } from "react";
import github from "../../assets/perfil/github.svg";

function Projects() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // intenta reproducir al montar
      video.play().catch(() => {
        // si falla, muted y autoplay forzado
        video.muted = true;
        video.play();
      });
    }
  }, []);

  return (
    <section
      id="proyectos"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-white text-3xl font-semibold uppercase mb-10">
        Proyectos
      </h1>

      {/* contenedor de proyectos */}
      <div className="flex flex-col justify-center md:flex-row flex-wrap gap-10">

        {/* VIRYONIA MAKEUP */}
        <div className="proyecto1 flex flex-col gap-5">
          <div className="group relative w-95 h-53 md:w-115 md:h-65 overflow-hidden shadow-lg cursor-pointer">
            {/* Video siempre reproduciéndose */}
            <video
              ref={videoRef}
              src="/vm.mp4"
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />

            {/* Poster */}
            <img
              src="/vm-poster.png"
              alt="Proyecto Esteticista"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
          </div>
          {/* Texto */}
          <div className="text-white flex flex-col gap-3">
            <h3 className="font-light text-lg uppercase">Viryonia Makeup</h3>
            <div className="lenguajes flex gap-2">
              {/* React */}
              <span className="px-3 py-1 text-xs rounded-lg bg-cyan-400/20 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]">
                React
              </span>
              {/* Tailwind */}
              <span className="px-3 py-1 text-xs rounded-lg bg-sky-400/20 border border-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                Tailwind
              </span>
              {/* Node */}
              <span className="px-3 py-1 text-xs rounded-lg bg-green-500/20 border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]">
                Node
              </span>
              {/* Express */}
              <span className="px-3 py-1 text-xs rounded-lg bg-gray-400/20 border border-gray-400 shadow-[0_0_10px_rgba(156,163,175,0.6)]">
                Express
              </span>
              {/* JavaScript */}
              <span className="px-3 py-1 text-xs rounded-lg bg-yellow-400/20 border border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]">
                JavaScript
              </span>
            </div>
            <p className="text-sm text-justify max-w-90 text-white/80">
              Pagina web completa con gestion de reservas, logueo, registro de
              usuarios, panel de usuario y formulario de contacto.
            </p>
            <a
              href=""
              className="flex gap-2 w-fit text-sm font-semibold px-2 py-2 bg-white text-[#161c24] rounded-md hover:bg-white/70 hover:scale-102 transition"
            >
              <img src={github} alt="GitHub" className="w-5" />
              Github
            </a>
          </div>
        </div>

        {/* CONVERTIDOR */}
        <div className="proyecto2 flex flex-col gap-5">
          <div className="group relative w-95 h-53 md:w-115 md:h-65 overflow-hidden shadow-lg cursor-pointer">
            {/* Video siempre reproduciéndose */}
            <video
              ref={videoRef}
              src="/converter.mp4"
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />

            {/* Poster */}
            <img
              src="/converter-poster.png"
              alt="Proyecto Esteticista"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
          </div>
          {/* Texto */}
          <div className="text-white flex flex-col gap-3">
            <h3 className="font-light text-lg uppercase">Docx Converter</h3>
            <div className="lenguajes flex gap-2">
              {/* Html */}
              <span className="px-3 py-1 text-xs rounded-lg bg-orange-400/20 border border-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.6)]">
                Html
              </span>
              {/* Css */}
              <span className="px-3 py-1 text-xs rounded-lg bg-purple-500/20 border border-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                Css
              </span>
              {/* Node */}
              <span className="px-3 py-1 text-xs rounded-lg bg-green-500/20 border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]">
                Node
              </span>
              {/* Express */}
              <span className="px-3 py-1 text-xs rounded-lg bg-gray-400/20 border border-gray-400 shadow-[0_0_10px_rgba(156,163,175,0.6)]">
                Express
              </span>
              {/* JavaScript */}
              <span className="px-3 py-1 text-xs rounded-lg bg-yellow-400/20 border border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]">
                JavaScript
              </span>
            </div>
            <p className="text-sm text-justify max-w-90 text-white/80">
              Aplicación web creada para mi FCT, automatiza la conversión de
              archivos .docx a formato html, siguiendo una estructura
              predefinida.
            </p>
            <a
              href=""
              className="flex gap-2 w-fit text-sm font-semibold px-2 py-2 bg-white text-[#161c24] rounded-md hover:bg-white/70 hover:scale-102 transition"
            >
              <img src={github} alt="GitHub" className="w-5" />
              Github
            </a>
          </div>
        </div>

        {/* MCP */}
        <div className="proyecto3 flex flex-col gap-5">
          <div className="group relative w-95 h-53 md:w-115 md:h-65 overflow-hidden shadow-lg cursor-pointer">
            {/* Video siempre reproduciéndose */}
            <video
              ref={videoRef}
              src="/mcp.mp4"
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />

            {/* Poster */}
            <img
              src="/mcp-poster.png"
              alt="Proyecto Esteticista"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
          </div>
          {/* Texto */}
          <div className="text-white flex flex-col gap-3">
            <h3 className="font-light text-lg uppercase">MCP CallBot</h3>
            <div className="lenguajes flex gap-2">
              {/* Node */}
              <span className="px-3 py-1 text-xs rounded-lg bg-green-500/20 border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]">
                Node
              </span>
              {/* Express */}
              <span className="px-3 py-1 text-xs rounded-lg bg-gray-400/20 border border-gray-400 shadow-[0_0_10px_rgba(156,163,175,0.6)]">
                Express
              </span>
              {/* TypeScript */}
              <span className="px-3 py-1 text-xs rounded-lg bg-blue-600/20 border border-blue-600 shadow-[0_0_10px_rgba(49,130,206,0.6)]">
                TypeScript
              </span>
            </div>
            <p className="text-sm text-justify max-w-90 text-white/80">
              MCP realizado para mi FCT, automatiza respuestas en llamadas
              telefónicas accediendo a la base de datos, optimizando la gestión
              de información y flujos de comunicación.
            </p>
          </div>
        </div>

        {/* BLACKMESA COLLECTIVE */}
        <div className="proyecto2 flex flex-col gap-5">
          <div className="group relative w-95 h-53 md:w-115 md:h-65 overflow-hidden shadow-lg cursor-pointer">
            {/* Video siempre reproduciéndose */}
            <video
              ref={videoRef}
              src="/blackmesa.mp4"
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />

            {/* Poster */}
            <img
              src="/blackmesa-poster.png"
              alt="Proyecto Esteticista"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
          </div>
          {/* Texto */}
          <div className="text-white flex flex-col gap-3">
            <h3 className="font-light text-lg uppercase">BLACKMESA COLLECTIVE</h3>
            <div className="lenguajes flex gap-2">
              {/* React */}
              <span className="px-3 py-1 text-xs rounded-lg bg-cyan-400/20 border border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]">
                React
              </span>
              {/* Css */}
              <span className="px-3 py-1 text-xs rounded-lg bg-purple-500/20 border border-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                Css
              </span>
              {/* Tailwind */}
              <span className="px-3 py-1 text-xs rounded-lg bg-sky-400/20 border border-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]">
                Tailwind
              </span>
              {/* JavaScript */}
              <span className="px-3 py-1 text-xs rounded-lg bg-yellow-400/20 border border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]">
                JavaScript
              </span>
            </div>
            <p className="text-sm text-justify max-w-90 text-white/80">
              Landing page creada para un grupo de DJS de musica electrónica. Cuenta con promoción de cada integrante, eventos y multimedia.
            </p>
            <a
              href=""
              className="flex gap-2 w-fit text-sm font-semibold px-2 py-2 bg-white text-[#161c24] rounded-md hover:bg-white/70 hover:scale-102 transition"
            >
              <img src={github} alt="GitHub" className="w-5" />
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
