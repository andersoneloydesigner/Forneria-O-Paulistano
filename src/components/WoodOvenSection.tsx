export default function WoodOvenSection() {
  return (
    <section id="massa" className="bg-[#f9f8ed] text-[#1e1e1e] py-20 sm:py-24 lg:py-32 relative overflow-hidden border-t border-[#e8e4d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual of the artisanal pizza dough */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative flex items-center justify-center z-10 w-full">
            <img
              src="https://raw.githubusercontent.com/andersoneloydesigner/arquivos-opaulistano/73c0a7522eec599833c3db2acd388f24d1442c5f/pizzav2.png"
              alt="Massa artesanal de longa fermentação da Forneria O Paulistano"
              className="relative z-10 w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[700px] h-auto object-contain block select-none transform hover:scale-[1.02] transition-transform duration-700 filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.22)]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column: Editorial story */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center space-y-6 z-10 max-w-xl">
            
            <div className="font-size-body tracking-[0.2em] uppercase font-bold text-[#ff4d4d]">
              Tradição & Maturação
            </div>

            <h2 className="font-title font-size-title font-bold text-[#1e1e1e] tracking-normal">
              Massa de Longa Fermentação: Leveza e Alta Digestibilidade.
            </h2>

            <p className="font-size-sub text-[#1e1e1e] font-semibold leading-relaxed">
              48 a 72 horas de maturação lenta a frio para uma pizza leve, crocante e sem qualquer sensação de peso.
            </p>

            <p className="font-size-body text-[#1e1e1e]/80 leading-relaxed">
              Nossa receita segue a maestria paulistana: farinhas nobres selecionadas, alta hidratação e fermentação natural e paciente. Esse processo decompõe os açúcares e o glúten de forma orgânica, gerando alvéolos aerados na borda, interior macio e digestão extremamente suave.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
