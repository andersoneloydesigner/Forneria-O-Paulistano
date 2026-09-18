export default function CommitmentSection() {
  return (
    <section id="compromisso" className="bg-[#ffffff] text-[#1e1e1e] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-xl xl:max-w-2xl mb-14">
          <div className="font-size-body tracking-[0.2em] uppercase font-bold text-[#ff4d4d] mb-3">
            O Padrão Paulistano · Na Sua Mesa
          </div>
          <h2 className="font-title font-size-title font-bold text-[#1e1e1e] tracking-normal max-w-xl xl:max-w-2xl">
            O Melhor dos Dois Mundos Chegando Quente Até Você.
          </h2>
          <p className="font-size-body text-[#1e1e1e]/85 mt-6 leading-relaxed max-w-lg xl:max-w-xl">
            No O Paulistano Forneria, você encontra o casamento perfeito entre o ritmo da capital e o bem-estar do litoral catarinense:
          </p>
        </div>

        {/* 3 Pillars of Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-[#141414] text-[#f9f8ed] p-8 sm:p-9 rounded-2xl border border-[#2a2a2a] shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
              <h3 className="font-title text-[#ff4d4d] text-3xl sm:text-4xl tracking-wide mb-3">
                Massa Leve & Crocante
              </h3>
              <p className="font-size-body text-[#f9f8ed]/80 leading-relaxed">
                Fermentação lenta e natural que garante altíssima digestibilidade, bordas aeradas e textura crocante inconfundível.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#141414] text-[#f9f8ed] p-8 sm:p-9 rounded-2xl border border-[#2a2a2a] shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
              <h3 className="font-title text-[#ff4d4d] text-3xl sm:text-4xl tracking-wide mb-3">
                Recheios Generosos
              </h3>
              <p className="font-size-body text-[#f9f8ed]/80 leading-relaxed">
                Ingredientes nobres selecionados, queijos legítimos e embutidos especiais montados com a fartura típica paulistana.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#141414] text-[#f9f8ed] p-8 sm:p-9 rounded-2xl border border-[#2a2a2a] shadow-xl flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1">
            <div>
              <h3 className="font-title text-[#ff4d4d] text-3xl sm:text-4xl tracking-wide mb-3">
                Entrega Rápida & Eficiente
              </h3>
              <p className="font-size-body text-[#f9f8ed]/80 leading-relaxed">
                Logística dedicada e cuidadosa que respeita o seu tempo, garantindo que a sua pizza chegue perfeita e estalando à mesa.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
