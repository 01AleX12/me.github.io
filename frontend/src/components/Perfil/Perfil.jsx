import github from "../../assets/perfil/github.svg";
import linkedin from "../../assets/perfil/linkedin.svg";
import profile from "../../assets/perfil/profile.svg"; // icono para tu CV

function Perfil() {
   return (
      <div className="flex flex-col items-center justify-center gap-5 py-10">
      {/* imagen en círculo */}
      <img
         src="/me.jpeg"
         alt="Foto de perfil"
         className="w-40 h-40 rounded-full object-cover border-4 border-[#161c24] shadow-lg"
      />

      {/* nombre */}
      <div className="text-center flex flex-col gap-2">
         <h2 className="text-2xl md:text-3xl font-bold text-white">Alejandro Aranda</h2>
         <p className="text-[#2b4b6d] font-semibold md:text-lg">Desarrollador Full Stack</p>
      </div>

      {/* botones con iconos */}
      <div className="flex gap-4">
        {/* boton de github */}
         <a
            href="https://github.com/01AleX12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-semibold flex items-center gap-2 px-2 py-2 bg-white text-[#161c24] rounded-md hover:bg-white/30 transition"
         >
            <img src={github} alt="GitHub" className="w-5" />
            GitHub
         </a>

        {/* boton de linkedin */}
         <a
            href="https://www.linkedin.com/in/alejandro-a-94951635a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-semibold flex items-center gap-2 px-4 py-2 bg-white text-[#161c24] rounded-md hover:bg-white/30 transition"
         >
            <img src={linkedin} alt="Linkedin" className="w-7" />
            Linkedin
         </a>

        {/* boton de curriculum */}
         <a
            href="https://drive.google.com/file/d/1AuQ3G2x0jBur7VbSlv1zbGSDhuBdFVCA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-semibold flex items-center gap-2 px-4 py-2 bg-[#161c24] text-white rounded-md hover:bg-white/30 transition
               ring-2 ring-[#86BEE1] ring-offset-[#86BEE1] hover:ring-[#86BEE1]"
         >
            <img src={profile} alt="CV" className="w-5" />
            CV
         </a>
      </div>
      </div>
   );
}

export default Perfil;
