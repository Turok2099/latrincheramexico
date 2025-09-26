export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
            Menú Dark Kitchen
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#22d3f7] to-transparent mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubre nuestra deliciosa selección de platillos gourmet
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <p className="text-gray-400 text-center">
            Próximamente: Nuestro menú completo estará disponible aquí.
          </p>
        </div>
      </div>
    </div>
  );
}



