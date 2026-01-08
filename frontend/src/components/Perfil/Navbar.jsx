function Navbar() {
   return (
      <nav className="fixed top-6 z-50 w-full flex justify-center">
      <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 backdrop-blur shadow-lg hover:border-white transition-all">
         <a
            href="#perfil"
            className="text-sm md:text-base text-white/80 hover:text-white transition"
         >
            Perfil
         </a>
         <a
            href="#proyectos"
            className="text-sm md:text-base text-white/80 hover:text-white transition"
         >
            Proyectos
         </a>
         <a
            href="#contacto"
            className="text-sm md:text-base text-white/80 hover:text-white transition"
         >
            Contacto
         </a>
      </div>
      </nav>
   );
}

export default Navbar;
