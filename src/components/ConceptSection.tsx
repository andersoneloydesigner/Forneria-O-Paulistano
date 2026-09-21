export default function ConceptSection() {
  return (
    <section id="conceito" className="bg-[#f9f8ed] text-[#1e1e1e] py-28 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title with generous spacing */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="font-size-body tracking-[0.2em] uppercase font-bold text-[#ff4d4d] mb-3">
            Identidade Visual & Tradição
          </div>
          <h2 className="font-title font-size-title font-bold text-[#1e1e1e] tracking-normal">
            A Essência Urbana e Afetiva no Litoral Catarinense.
          </h2>
          <div className="w-20 h-1 bg-[#ff4d4d] mt-6" />
        </div>

        {/* 3 Pillars of Identity: Piso Paulista, Ponte Estaiada, O Vermelho */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Piso Paulista */}
          <div className="bg-[#ffffff] rounded-2xl p-8 border border-[#e5e2cf] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-full h-16 bg-[#1e1e1e] rounded-xl mb-6 flex items-center justify-center">
                <span className="font-title font-size-sub font-bold tracking-widest text-[#f9f8ed]">
                  1965 · SÃO PAULO
                </span>
              </div>

              <h3 className="font-title font-size-sub font-bold text-[#1e1e1e] mb-3">
                O Piso Paulista de 1965
              </h3>
              <p className="font-size-body text-[#1e1e1e]/80 leading-relaxed">
                Criado pela artista plástica Mirthes Bernardes, o desenho estiliza o contorno geográfico do mapa de São Paulo. Uma memória afetiva viva que agora embeleza a nossa forneria em Palhoça.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0eee2] font-size-body text-[#ff4d4d] font-semibold">
              Memória & Raízes
            </div>
          </div>

          {/* Card 2: Ponte Estaiada */}
          <div className="bg-[#ffffff] rounded-2xl p-8 border border-[#e5e2cf] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-full h-16 bg-[#1e1e1e] rounded-xl mb-6 flex items-center justify-center text-[#f9f8ed]">
                {/* Stylized bridge silhouette */}
                <svg viewBox="0 0 100 40" className="w-20 h-10" fill="none" stroke="currentColor">
                  <path d="M45 35L50 5L55 35" strokeWidth="2.5" />
                  <line x1="50" y1="10" x2="20" y2="35" strokeWidth="1.5" stroke="#ff4d4d" />
                  <line x1="50" y1="16" x2="30" y2="35" strokeWidth="1.5" stroke="#ff4d4d" />
                  <line x1="50" y1="10" x2="80" y2="35" strokeWidth="1.5" stroke="#ff4d4d" />
                  <line x1="50" y1="16" x2="70" y2="35" strokeWidth="1.5" stroke="#ff4d4d" />
                  <line x1="10" y1="35" x2="90" y2="35" strokeWidth="2" />
                </svg>
              </div>

              <h3 className="font-title font-size-sub font-bold text-[#1e1e1e] mb-3">
                A Ponte Estaiada
              </h3>
              <p className="font-size-body text-[#1e1e1e]/80 leading-relaxed">
                Inaugurada em 2008 sobre o Rio Pinheiros com seu mastro central em X, ela simboliza o dinamismo da metrópole e a ponte cultural que construímos entre a tradição de SP e a acolhida de Santa Catarina.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0eee2] font-size-body text-[#ff4d4d] font-semibold">
              Conexão & Simetria
            </div>
          </div>

          {/* Card 3: O Vermelho da Paixão Culinária */}
          <div className="bg-[#ffffff] rounded-2xl p-8 border border-[#e5e2cf] shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-full h-16 bg-[#ff4d4d] rounded-xl mb-6 flex items-center justify-center text-white">
                <span className="font-title font-size-sub font-bold tracking-wider">
                  #D2212B
                </span>
              </div>

              <h3 className="font-title font-size-sub font-bold text-[#1e1e1e] mb-3">
                A Cor da Paixão
              </h3>
              <p className="font-size-body text-[#1e1e1e]/80 leading-relaxed">
                Inspirado na cor oficial da bandeira do estado de São Paulo, o vermelho evoca o calor da nossa cozinha, a intensidade do tomate maduro e o apetite por uma pizza de verdade.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f0eee2] font-size-body text-[#ff4d4d] font-semibold">
              Apetite & Calor
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
