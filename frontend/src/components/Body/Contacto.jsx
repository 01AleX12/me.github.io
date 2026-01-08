function Contacto() {
  return (
    <section id="contacto" className="flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl uppercase font-semibold text-white mb-8">Contacto</h1>

      <form className="w-full max-w-md px-6 rounded-xl shadow-lg">
        
        {/* Nombre */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-white/80">Nombre</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-cyan-400/50 rounded-md bg-gray-800 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            placeholder="Tu nombre"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-white/80">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-sky-400/50 rounded-md bg-gray-800 text-white placeholder-white/50 focus:border-sky-400 focus:ring-2 focus:ring-sky-400 outline-none transition"
            placeholder="tu@email.com"
          />
        </div>

        {/* Mensaje */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-white/80">Mensaje</label>
          <textarea
            className="w-full px-3 py-2 border border-purple-500/50 rounded-md bg-gray-800 text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition"
            rows="4"
            placeholder="Escribe tu mensaje..."
            resize="none"
          ></textarea>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-cyan-400 text-gray-900 font-semibold py-2 rounded-md shadow-[0_0_10px_rgba(34,211,238,0.6)] hover:bg-cyan-300 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default Contacto;
