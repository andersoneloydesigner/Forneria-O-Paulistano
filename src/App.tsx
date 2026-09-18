import { useState } from 'react';
import Hero from './components/Hero';
import CommitmentSection from './components/CommitmentSection';
import HistorySection from './components/HistorySection';
import WoodOvenSection from './components/WoodOvenSection';
import IngredientsSection from './components/IngredientsSection';
import ConceptSection from './components/ConceptSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState('Paulistana Clássica');

  const handleOpenOrder = (pizzaName?: string) => {
    if (pizzaName) {
      setSelectedPizza(pizzaName);
    } else {
      setSelectedPizza('Paulistana Clássica');
    }
    setOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#f9f8ed] flex flex-col selection:bg-[#ff4d4d] selection:text-white">
      <main className="flex-grow">
        {/* 
          Hero Section:
          Fundo preto, lado direito pizzaiolo, lado esquerdo texto,
          links e logo integrados diretamente na hero separados por um traço.
          Ao descer a página, transiciona para estilo claro.
          Sem ícones nos botões, título com Syne normal (sem achatar).
        */}
        <Hero onOrderClick={() => handleOpenOrder()} />

        {/* 
          Compromisso com a sua mesa:
          O melhor dos dois mundos (Massa Leve, Recheios Generosos, Entrega Rápida)
        */}
        <CommitmentSection />

        {/* 
          História:
          Origem e propósito, de SP a Palhoça / Grande Florianópolis,
          espaçamento generoso entre seções.
        */}
        <HistorySection />

        {/* 
          Forno a Lenha Tradicional:
          Alta temperatura (450°C), aroma da lenha nobre,
          crocância e alvéolos.
        */}
        <WoodOvenSection />

        {/* 
          Ingredientes Artesanais de Alta Qualidade:
          Fermentação 48h, Tomates San Marzano, Catupiry® Legítimo,
          Queijos e embutidos nobres.
        */}
        <IngredientsSection onOrderClick={() => handleOpenOrder()} />

        {/* 
          Conceito da Marca:
          O Piso Paulista de 1965, a Ponte Estaiada e o vermelho da paixão.
        */}
        <ConceptSection />

        {/* 
          Localização e Atendimento:
          Praia do Sonho, Palhoça / SC e pedidos via WhatsApp.
        */}
        <LocationSection onOrderClick={() => handleOpenOrder()} />
      </main>

      {/* Footer com logo oficial sem slogan e piso paulista */}
      <Footer />

      {/* Modal de Pedido via WhatsApp (botões limpos sem ícones) */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        preselectedPizza={selectedPizza}
      />
    </div>
  );
}
