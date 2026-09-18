import Navbar from './Navbar';

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section id="hero-section" className="relative bg-black text-[#f9f8ed] overflow-hidden">
      {/* 
        Navigation links and logo integrated directly into the Hero.
        On scroll, it dynamically adapts to a light background with dark typography and light-bg logo.
      */}
      <Navbar onOrderClick={onOrderClick} />

      {/* Atmospheric Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        >
          <source src="https://opaulistano.b-cdn.net/GettyImages-1031877408.mov" type="video/mp4" />
          <source src="https://opaulistano.b-cdn.net/GettyImages-1031877408.mov" type="video/quicktime" />
        </video>
        {/* Softening darkening & atmospheric overlays for contrast and readability */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40 pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50 pointer-events-none" 
          aria-hidden="true" 
        />
      </div>

      {/* Red ambient detail in bottom-left corner */}
      <div 
        className="absolute -bottom-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-[#ff4d4d]/35 via-[#ff4d4d]/15 to-transparent rounded-full blur-[110px] pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Main Hero Container with generous top and bottom height/margins */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Text content with increased width */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start z-10 space-y-6 max-w-xl xl:max-w-2xl">
            
            <div className="space-y-5 w-full">
              {/* Main Headline with Ubuntu font */}
              <h1
                id="hero-headline"
                className="text-[#f9f8ed] max-w-xl xl:max-w-2xl tracking-normal font-bold"
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: '52px',
                  fontWeight: 700,
                  lineHeight: '1.15',
                }}
              >
                A autêntica tradição da pizza paulistana no{' '}
                <span className="text-[#ff4d4d]">
                  forno a lenha
                </span>.
              </h1>

              {/* Subtitle / Lead */}
              <p
                id="hero-subtitle"
                className="text-[#f9f8ed]/90 max-w-lg xl:max-w-xl font-normal leading-relaxed"
                style={{ fontSize: '24px' }}
              >
                Massa de fermentação lenta 48h, ingredientes artesanais nobres e o calor das chamas que consagrou a metrópole, agora na Praia do Sonho.
              </p>
            </div>

            {/* CTA Button (strictly NO icons as requested: 'tire o ícone dos botões') */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                id="hero-order-btn"
                onClick={onOrderClick}
                className="font-size-body inline-flex items-center justify-center bg-[#ff4d4d] hover:bg-[#e63939] text-[#f9f8ed] px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-200 shadow-lg shadow-[#ff4d4d]/25 active:scale-95 cursor-pointer text-center"
              >
                Pedir pelo WhatsApp
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Standalone Pizzaiolo Image positioned to the right with separation, enlarged without increasing hero vertical space */}
          <div className="lg:col-span-6 relative flex items-center justify-end z-10 w-full">
            <img
              src="https://opaulistano.b-cdn.net/2155v5.png"
              alt="Mestre pizzaiolo da Forneria O Paulistano"
              className="ml-auto w-full max-w-[720px] sm:max-w-[840px] lg:max-w-[960px] xl:max-w-[1080px] 2xl:max-w-[1180px] lg:w-[125%] xl:w-[132%] -my-8 sm:-my-12 lg:-my-16 xl:-my-20 lg:-mr-12 xl:-mr-20 translate-x-[100px] h-auto object-contain block select-none transform hover:scale-[1.02] transition-transform duration-700 filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
