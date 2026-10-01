import { WHATSAPP_LINK, DIGITAL_MENU_LINK } from '../constants';

interface LocationSectionProps {
  onOrderClick?: () => void;
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: Delivery Courier with Transparent Background */}
          <div className="lg:col-span-6 relative flex items-center justify-center z-10 w-full">
            {/* Ambient subtle warm backlight glow */}
            <div 
              className="absolute w-96 h-96 bg-[#ff4d4d]/15 rounded-full blur-[100px] pointer-events-none -z-0"
              aria-hidden="true" 
            />

            <div className="relative z-10 w-full flex items-center justify-center">
              <img
                src="https://opaulistano.b-cdn.net/pizza-entregadorv2.png"
                alt="Entregador Forneria O Paulistano"
                className="w-full h-auto max-w-full object-contain block select-none transform hover:scale-[1.02] transition-transform duration-500 filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                referrerPolicy="no-referrer"
              />
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
              Deseja uma autêntica pizza paulistana hoje?
            </h3>

            <p className="font-size-body text-[#f9f8ed]/80 max-w-md mb-8 leading-relaxed">
              Inicie seu atendimento no WhatsApp. Enviamos o cardápio atualizado e preparamos a sua pizza com o cuidado artesanal que você merece.
            </p>

            {/* Buttons Group with same width */}
            <div className="flex flex-col items-center gap-3.5 w-full sm:w-auto">
              <a
                id="location-menu-btn"
                href={DIGITAL_MENU_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-size-body inline-flex items-center justify-center bg-[#ff4d4d] hover:bg-[#e63939] text-[#f9f8ed] px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-200 shadow-xl shadow-[#ff4d4d]/30 active:scale-95 cursor-pointer w-full sm:w-80 text-center"
              >
                Acesse nosso cardápio digital
              </a>

              <a
                id="location-whatsapp-btn"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOrderClick) {
                    e.preventDefault();
                    onOrderClick();
                  }
                }}
                className="font-size-body inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-200 shadow-lg shadow-[#25D366]/25 active:scale-95 cursor-pointer w-full sm:w-80 text-center"
              >
                Chamar no WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-size-body text-[#f9f8ed]/70">
              <span>Atendimento das 19h às 23h30</span>
              <span>•</span>
              <span className="text-[#ff4d4d] font-semibold">Praia do Sonho - Palhoça (SC)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
