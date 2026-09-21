export default function HistorySection() {
  return (
    <>
      {/* SEÇÃO 1: A TRADIÇÃO DA PIZZA & ALMA PAULISTANA */}
      <section id="historia" className="bg-[#000000] text-[#f9f8ed] py-16 lg:py-20 border-t border-[#1e1e1e] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Grid: Left Pizza Image (60%) + Right Text Column (40%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Pizza Image Showcase (60% width) on Left */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex items-center justify-center relative z-10">
              <div className="relative w-full flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/andersoneloydesigner/arquivos-opaulistano/2ebd837cc6407e4ba565d8ec0ccc48bbac57700c/pizza-menina.png"
                  alt="Tradição da pizza paulistana e paixão compartilhada"
                  className="w-full h-auto max-w-[550px] sm:max-w-[620px] lg:max-w-[700px] xl:max-w-[750px] object-contain transform hover:scale-[1.02] transition-transform duration-700 filter drop-shadow-[0_35px_65px_rgba(0,0,0,0.95)] select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Story Text Column (40% width) on Right */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center space-y-6 z-10">
              
              <div>
                <div className="font-size-body tracking-[0.2em] uppercase font-bold text-[#ff4d4d] mb-1.5">
                  Seu Pedaço de São Paulo · Tradição de Raiz
                </div>
                <h2 className="font-title font-size-title font-bold text-[#f9f8ed] tracking-normal max-w-md">
                  A Autêntica Paixão Pela Pizza Paulistana.
                </h2>
                <div className="w-20 h-1 bg-[#ff4d4d] mt-3" />
              </div>

              <p className="font-size-sub text-[#f9f8ed] font-semibold leading-relaxed">
                Sempre fomos apaixonados pela alma e pelo ritmo de São Paulo Capital – e, claro, pela sua{' '}
                <span className="text-[#ff4d4d]">tradição inabalável de pizza</span>.
              </p>

              <p className="font-size-body text-[#f9f8ed]/85 leading-relaxed">
                Para um paulistano de raiz, pizza não é apenas uma refeição rápida: é um ritual sagrado de sabor, massa no ponto certo, ingredientes selecionados e muita agilidade no preparo.
              </p>

              <p className="font-size-body text-[#f9f8ed]/85 leading-relaxed">
                Essa herança forjada nos bairros tradicionais da capital paulista é a essência viva que colocamos em cada disco de pizza que sai da nossa cozinha artesanal.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 2: A JORNADA ATÉ A PRAIA DO SONHO & A PONTE COM A ILHA */}
      <section id="jornada" className="bg-[#f2efe4] text-[#1e1e1e] py-20 lg:py-28 border-y border-[#e5e2cf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Story of Moving to Santa Catarina */}
            <div className="lg:col-span-7 space-y-6">
              <div className="font-size-body tracking-[0.2em] uppercase font-bold text-[#ff4d4d]">
                De São Paulo a Santa Catarina · Há 5 Anos
              </div>

              <h2 className="font-title font-size-title font-bold text-[#1e1e1e] tracking-normal">
                Trocamos a Metrópole Pelo Paraíso.
              </h2>
              <div className="w-20 h-1 bg-[#ff4d4d]" />

              <p className="font-size-body text-[#1e1e1e]/85 leading-relaxed pt-2">
                Há 5 anos, trocamos a metrópole pelo paraíso e fizemos da região da Grande Florianópolis o nosso lar. Nos apaixonamos pela vibe única da Ilha da Magia e pela tranquilidade e exuberância do Continente.
              </p>

              <p className="font-size-body text-[#1e1e1e]/85 leading-relaxed">
                Sabemos como o público catarinense é exigente, valoriza o que é bom e preza pela qualidade e respeito aos detalhes. Por isso, a nossa missão é clara: unir o charme do nosso litoral com a autêntica experiência da pizza paulistana.
              </p>
            </div>

            {/* Right Column: Editorial Quote Card */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="bg-[#ffffff] p-8 sm:p-10 rounded-2xl border border-[#e5e2cf] shadow-sm relative">
                <div className="text-[#ff4d4d] text-4xl font-serif leading-none mb-4">“</div>
                <p className="font-size-body text-[#1e1e1e] font-medium italic leading-relaxed mb-6">
                  Escolher a Praia do Sonho para dar vida a O Paulistano Forneria foi um passo natural: de um ponto abençoado no continente, olhamos para a Ilha com carinho e o desejo de servir a todos com excelência.
                </p>
                <div className="border-t border-[#e5e2cf] pt-4 flex items-center justify-between">
                  <span className="font-title font-bold text-[#1e1e1e] text-sm tracking-wider uppercase">
                    O Paulistano Forneria
                  </span>
                  <span className="text-xs font-semibold text-[#ff4d4d] tracking-wider uppercase">
                    Praia do Sonho · Palhoça
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
