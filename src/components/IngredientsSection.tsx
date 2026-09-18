interface IngredientsSectionProps {
  onOrderClick?: () => void;
}

export default function IngredientsSection({ onOrderClick }: IngredientsSectionProps) {
  const ingredients = [
    {
      title: 'Fermentação Lenta 48h',
      subtitle: 'Farinha de moagem especial italiana',
      description:
        'Nossa massa descansa e fermenta naturalmente por dois dias inteiros. O resultado é uma pizza leve, altamente digestiva, com borda crocante e alvéolos de ar perfeitos.',
      highlight: 'Digestibilidade & Leveza',
    },
    {
      title: 'Molho de Tomate Artesanal',
      subtitle: 'Tomates San Marzano & Azeite Extravirgem',
      description:
        'Preparo diário feito exclusivamente com tomates doces e maduros, azeite de oliva extravirgem e manjericão fresco. Sem aditivos ou conservantes químicos.',
      highlight: 'Acidez Equilibrada',
    },
    {
      title: 'Catupiry® Legítimo',
      subtitle: 'O autêntico sabor da culinária paulistana',
      description:
        'Não usamos substitutos ou requeijões comuns. Servimos o Catupiry® original cremoso e generoso, honrando o clássico e sagrado costume das pizzarias de São Paulo.',
      highlight: 'Tradição Genuína',
    },
    {
      title: 'Embutidos & Queijos Nobres',
      subtitle: 'Calabresa curada, Pepperoni & Mozzarella especial',
      description:
        'Queijo de corte nobre com fusão dourada e embutidos artesanais temperados com especiarias tradicionais, fatiados na espessura exata para tostar na medida certa.',
      highlight: 'Sabor Marcante',
    },
  ];

  return (
    <section id="ingredientes" className="bg-[#f9f8ed] text-[#1e1e1e] py-28 lg:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous spacing */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="font-size-body tracking-[0.2em] uppercase font-bold text-[#ff4d4d] mb-3">
            Mestria Gastronômica
          </div>
          <h2 className="font-title font-size-title font-bold text-[#1e1e1e] tracking-normal">
            Ingredientes Artesanais de Alta Qualidade.
          </h2>
          <p className="font-size-sub text-[#1e1e1e]/85 mt-4 font-normal leading-relaxed">
            Para nós, cada detalhe importa. Uma grande pizza nasce da seleção criteriosa de quem respeita a procedência e o frescor da matéria-prima.
          </p>
          <div className="w-20 h-1 bg-[#ff4d4d] mt-6" />
        </div>

        {/* 4 Clean Columns Grid for Ingredients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((item, index) => (
            <div
              key={index}
              className="bg-[#ffffff] p-8 rounded-2xl border border-[#e5e2cf] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="font-size-body uppercase tracking-wider font-bold text-[#ff4d4d] mb-2">
                  {item.highlight}
                </div>
                <h3 className="font-title font-size-sub font-bold text-[#1e1e1e] mb-2">
                  {item.title}
                </h3>
                <div className="font-size-body font-medium text-[#1e1e1e]/70 mb-4 pb-3 border-b border-[#f0eee2]">
                  {item.subtitle}
                </div>
                <p className="font-size-body text-[#1e1e1e]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0eee2] flex items-center justify-between">
                <span className="font-size-body text-[#1e1e1e]/50">
                  Pilar 0{index + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#ff4d4d]" />
              </div>
            </div>
          ))}
        </div>

        {/* Sensory quote banner */}
        <div className="mt-20 p-8 md:p-12 rounded-2xl bg-[#1e1e1e] text-[#f9f8ed] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="font-title font-size-sub font-bold text-[#f9f8ed]">
              Recheios generosos, sabor marcante e massa leve.
            </div>
            <p className="font-size-body text-[#f9f8ed]/75 leading-relaxed">
              Experimente a união perfeita do frescor catarinense com a alma gastronômica de São Paulo.
            </p>
          </div>
          {onOrderClick && (
            <button
              onClick={onOrderClick}
              className="font-size-body font-bold px-8 py-3.5 rounded-full bg-[#ff4d4d] hover:bg-[#e63939] text-[#f9f8ed] transition-colors shrink-0 shadow-lg cursor-pointer"
            >
              Pedir pelo WhatsApp
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
