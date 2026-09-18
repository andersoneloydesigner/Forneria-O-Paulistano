interface LocationSectionProps {
  onOrderClick: () => void;
}

export default function LocationSection({ onOrderClick }: LocationSectionProps) {
  return (
    <section id="localizacao" className="bg-[#141414] text-[#f9f8ed] py-28 lg:py-36 relative border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous spacing */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="font-size-body tracking-[0.2em] uppercase font-bold text-[#ff4d4d] mb-3">
            Atendimento & Localização
          </div>
          <h2 className="font-title font-size-title font-bold text-[#f9f8ed] tracking-normal">
            Seu Pedaço de São Paulo na Praia do Sonho.
          </h2>
          <p className="font-size-sub text-[#f9f8ed]/80 mt-3 font-normal leading-relaxed">
            De um ponto abençoado de Palhoça, atendemos a região da Grande Florianópolis com rapidez e respeito ao seu tempo.
          </p>
          <div className="w-20 h-1 bg-[#ff4d4d] mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 xl:gap-24 items-stretch">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6 h-full">
            
            {/* Address */}
            <div className="p-7 rounded-2xl bg-[#1e1e1e] border border-[#2e2e2e] flex-1 flex flex-col justify-center">
              <h3 className="font-title font-size-sub font-bold text-[#f9f8ed] mb-1">
                Endereço & Região
              </h3>
              <p className="font-size-body text-[#f9f8ed]/80 font-medium">
                Praia do Sonho · Palhoça, Santa Catarina
              </p>
              <p className="font-size-body text-[#f9f8ed]/60 mt-1">
                Atendimento no balcão e delivery com embalagens térmicas lacradas.
              </p>
            </div>

            {/* Operating Hours */}
            <div className="p-7 rounded-2xl bg-[#1e1e1e] border border-[#2e2e2e] flex-1 flex flex-col justify-center">
              <h3 className="font-title font-size-sub font-bold text-[#f9f8ed] mb-1">
                Horário de Funcionamento
              </h3>
              <p className="font-size-body text-[#f9f8ed]/80 font-medium">
                Terça a Domingo: das 18h30 às 23h30
              </p>
              <p className="font-size-body text-[#f9f8ed]/60 mt-1">
                Segunda-feira: Fechado para descanso da equipe e maturação lenta das massas.
              </p>
            </div>

            {/* Delivery Channels */}
            <div className="p-7 rounded-2xl bg-[#1e1e1e] border border-[#2e2e2e] flex-1 flex flex-col justify-center">
              <h3 className="font-title font-size-sub font-bold text-[#f9f8ed] mb-1">
                Canais de Atendimento
              </h3>
              <p className="font-size-body text-[#f9f8ed]/80 font-medium">
                WhatsApp Direto & Retirada
              </p>
              <p className="font-size-body text-[#f9f8ed]/60 mt-1">
                Massa crocante que chega quentinha na sua mesa.
              </p>
            </div>

          </div>

          {/* Right Column: Prominent Order Box */}
          <div className="lg:col-span-6 h-full min-h-[460px] bg-[#1e1e1e] border-2 border-[#ff4d4d]/40 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden text-center flex flex-col items-center justify-center">
            
            <div 
              className="absolute -top-24 -right-24 w-60 h-60 bg-[#ff4d4d]/15 rounded-full blur-3xl pointer-events-none" 
              aria-hidden="true"
            />

            <span className="font-size-body tracking-[0.2em] uppercase font-bold text-[#ff4d4d] mb-3">
              Peça Agora
            </span>

            <h3 className="font-title font-size-title font-bold text-[#f9f8ed] mb-4 tracking-normal">
              Deseja uma autêntica pizza no forno a lenha hoje?
            </h3>

            <p className="font-size-body text-[#f9f8ed]/80 max-w-md mb-8 leading-relaxed">
              Inicie seu atendimento no WhatsApp. Enviamos o cardápio atualizado e preparamos a sua pizza com o cuidado artesanal que você merece.
            </p>

            {/* Action button strictly without icon as requested: 'tire o ícone dos botões' */}
            <button
              id="location-order-btn"
              onClick={onOrderClick}
              className="font-size-body inline-flex items-center justify-center bg-[#ff4d4d] hover:bg-[#e63939] text-[#f9f8ed] px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-200 shadow-xl shadow-[#ff4d4d]/30 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              Chamar no WhatsApp
            </button>

            <div className="mt-6 flex items-center gap-4 font-size-body text-[#f9f8ed]/60">
              <span>Entrega rápida</span>
              <span>•</span>
              <span>Forno tradicional</span>
              <span>•</span>
              <span>Praia do Sonho</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
