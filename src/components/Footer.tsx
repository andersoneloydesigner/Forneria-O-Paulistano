export default function Footer() {
  return (
    <footer id="main-footer" className="bg-[#141414] text-[#f9f8ed] border-t border-[#262626] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Logo & Tagline */}
        <div className="flex flex-col items-center justify-center text-center pb-12 border-b border-[#262626]">
          {/* Official Footer Logo: https://opaulistano.b-cdn.net/logo-final-o-paulistano_fundo%20escuro%20sem%20slogan.png */}
          <img
            src="https://opaulistano.b-cdn.net/logo-final-o-paulistano_fundo%20escuro%20sem%20slogan.png"
            alt="Forneria O Paulistano"
            className="h-44 sm:h-56 md:h-64 lg:h-72 w-auto max-w-[90vw] md:max-w-[560px] lg:max-w-[640px] object-contain mb-8 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] select-none"
            referrerPolicy="no-referrer"
          />
          
          <div className="max-w-md text-center">
            <p className="font-size-body text-[#f9f8ed]/70">
              A autêntica forneria paulistana na Grande Florianópolis. Massa de longa fermentação, receitas tradicionais e ingredientes nobres.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-6 font-size-body text-[#f9f8ed]/80">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff4d4d] transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href="https://wa.me/5548991897510?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Forneria%20O%20Paulistano."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ff4d4d] transition-colors font-semibold text-[#ff4d4d]"
            >
              WhatsApp (+55 48 99189-7510)
            </a>
          </div>
        </div>

        {/* Quick Info columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-[#262626] text-center md:text-left">
          <div>
            <div className="font-title font-size-sub font-bold text-[#f9f8ed] mb-2">
              O Paulistano Forneria
            </div>
            <p className="font-size-body text-[#f9f8ed]/70">
              Tradição, afeto e o sabor inconfundível da capital paulista diretamente para Santa Catarina.
            </p>
          </div>

          <div>
            <div className="font-title font-size-sub font-bold text-[#f9f8ed] mb-2">
              Localização & Contato
            </div>
            <p className="font-size-body text-[#f9f8ed]/70">
              Praia do Sonho · Palhoça, SC
            </p>
            <p className="font-size-body text-[#ff4d4d] font-bold mt-1">
              WhatsApp: +55 (48) 99189-7510
            </p>
            <p className="font-size-body text-[#f9f8ed]/60 mt-1">
              Atendimento de Terça a Domingo, 18h30 - 23h30
            </p>
          </div>

          <div>
            <div className="font-title font-size-sub font-bold text-[#f9f8ed] mb-2">
              Padrão de Qualidade
            </div>
            <p className="font-size-body text-[#f9f8ed]/70">
              Fermentação natural lenta 48h · Farinha nobre · Catupiry® legítimo
            </p>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-size-body text-[#f9f8ed]/50 text-center sm:text-left">
            © {new Date().getFullYear()} Forneria O Paulistano. Todos os direitos reservados.
          </p>
          <p className="font-size-body text-[#f9f8ed]/50 text-center sm:text-right">
            Seu pedaço de São Paulo em Palhoça / SC
          </p>
        </div>

      </div>
    </footer>
  );
}
