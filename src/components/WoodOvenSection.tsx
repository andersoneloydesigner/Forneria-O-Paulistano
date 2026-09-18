export default function WoodOvenSection() {
  return (
    <section id="forno" className="bg-[#000000] text-[#f9f8ed] py-24 sm:py-28 lg:py-36 relative overflow-hidden border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Column: Standalone Visual of the artisanal pizza enlarged to the maximum */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative flex items-center justify-center z-10 w-full">
            <img
              src="https://opaulistano.b-cdn.net/pizzav2.png"
              alt="Pizza artesanal assada no forno a lenha"
              className="relative z-10 w-full max-w-[620px] sm:max-w-[760px] lg:max-w-[880px] xl:max-w-[1000px] 2xl:max-w-[1100px] lg:w-[120%] xl:w-[128%] lg:-ml-10 xl:-ml-16 h-auto object-contain block select-none transform hover:scale-[1.02] transition-transform duration-700 filter drop-shadow-[0_35px_70px_rgba(0,0,0,0.95)]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column: Editorial story & technical mastery */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-between space-y-6 h-full z-10">
            
            <div className="space-y-6">
              <div className="font-size-body tracking-[0.2em] uppercase font-bold text-[#ff4d4d]">
                Tradição Forneira
              </div>

              <h2 className="font-title font-size-title font-bold text-[#f9f8ed] tracking-normal">
                O Forno a Lenha Tradicional: Calor, Fogo e Alquimia.
              </h2>

              <p className="font-size-sub text-[#f9f8ed]/90 font-medium leading-relaxed">
                Nenhuma tecnologia substitui o contato direto da pedra refratária com o aroma sutil da lenha de reflorestamento em brasa.
              </p>

              <p className="font-size-body text-[#f9f8ed]/70 leading-relaxed">
                Assada em temperatura que ultrapassa os 450°C, a massa cresce instantaneamente, criando as clássicas bolhas douradas e tostadas (o famoso aspecto leopardo), mantendo o interior extremamente macio, úmido e perfumado.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-6 rounded-xl bg-[#0d0d0d] border border-[#222222]">
                <div className="font-title font-size-sub font-bold text-[#ff4d4d] mb-2">
                  Defumação Suave
                </div>
                <p className="font-size-body text-[#f9f8ed]/70 leading-relaxed">
                  A fumaça limpa de madeiras nobres sela os ingredientes sem mascarar o frescor do molho e dos queijos.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#0d0d0d] border border-[#222222]">
                <div className="font-title font-size-sub font-bold text-[#ff4d4d] mb-2">
                  Crocância & Ar
                </div>
                <p className="font-size-body text-[#f9f8ed]/70 leading-relaxed">
                  O choque térmico imediato preserva a leveza alveolar da massa e a cremosidade perfeita das coberturas.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
